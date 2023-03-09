const express = require('express')
const multer = require('multer')
const aws = require('aws-sdk');
const sslRedirect = require('heroku-ssl-redirect').default;


/*AWS S3 Config*/
aws.config.region = 'ap-northeast-1'
const S3_BUCKET = process.env.S3_BUCKET_NAME; // change to process.env.S3_BUCKET_NAME when you are ready to deploy
const s3 = new aws.S3({
    // change to process.env.AWS_ACCESS_KEY_ID when you are ready to deploy
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    // change to process.env.AWS_SECRET_ACCESS_KEY when you are ready to deploy
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const contractAddress = '0x04EeE3c4251BAFCCfAa63011534147d89175425F' //Enter contract address after you deploy your smart contract

const app = express()

app.use(sslRedirect());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('build'))

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

const storage = multer.memoryStorage();
const upload = multer({
    limit: { fileSize: 2000000 },
    storage: storage
})

app.post('/', upload.single("photo"), (req, res) => {
    const tokenid = req.body.tokenId
    const name = req.body.name
    const nickname = req.body.credible[0]
    const social_media = req.body.credible[1]
    const description = req.body.description
    const photo_url = `https://${S3_BUCKET}.s3.ap-northeast-1.amazonaws.com/image/${tokenid}`

    const newJson = {
        "tokenId": tokenid,
        "name": name,
        "description": `${nickname === '' ? `- ${description}` : `- Created by [${nickname}](${social_media}) - ${description}`}`,
        "image": photo_url
    }

    const jsonParams = {
        Bucket: `${S3_BUCKET}/json`, // location
        Key: req.body.tokenId, // file name
        Body: JSON.stringify(newJson), // file content
        ACL: 'public-read', // file permission
        ContentType: 'json' // file extension
    };

    const photoParam = {
        Bucket: `${S3_BUCKET}/image`,
        Key: req.body.tokenId,
        Body: req.file.buffer,
        ACL: 'public-read',
        ContentType: req.file.mimetype
    };

    const getObjectParam = {
        Bucket: `${S3_BUCKET}`,
        Key: `json/${tokenid}`
    }

    s3.getObject(getObjectParam, (err, data) => {
        const tokenidempty = JSON.parse(data.Body.toString()).tokenId
        if (tokenidempty === '') {
            s3.upload((jsonParams), function (err, data) {
                if (err) console.log(err, err.stack);
                else console.log('Bucket Created Successfully', data.Location);
            })

            s3.upload((photoParam), function (err, data) {
                if (err) console.log(err, err.stack);
                else console.log('Bucket Created Successfully', data.Location);
            })
        } else {
            console.log('Token has been used.')
        }
        res.redirect(`https://opensea.io/assets/ethereum/${contractAddress}/${tokenid}`)
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})