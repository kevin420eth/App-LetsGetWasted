import Faq from "react-faq-component";

const data = {
    rows:
        [
        {
            title:`How much does each wasted NFT cost?`,
            content:`0.00369 ETH`
        },
        {
            title:`Why I can only buy one in each transcation?`,
            content:`We hope that we could have party people as many as possible!`
        },
        {
            title:`How much royalties do you apply?`,
            content:`3.69%. While we don't pull EIP-2981 in our smart contract, that means you can sell your NFT on royaties-free platform without paying any fee to us. It's totally fine selling your NFTs there if you just don't want to share some ice cream with us. We're still cool!`
        },
        {
            title:`Why there's no Discord server?`,
            content:`Stop being immersed in Discord. Go out and have a drink with your fellows!`
        },
        {
            title:`Will there be some airdrops?`,
            content:`Probably…not.`
        },
        {
            title: "Why don't you save the metadata on IPFS decentrailzed network?",
            content: `We want to make sure that the process for users to create their own NFTs is smooth. While uploading metadata to IPFS at the beginning will complicate the process of operation, but don't worry, once all NFTs of this collection are created, we will transfer these data to IPFS as soon as possible.`
        },
        {
            title:`Can I utilize the photo of the NFT in commercial use If I buy it on the market?`,
            content:`Yes you can. People who want to mint a wasted NFT will need to sign the agreement of portrait rights useage.`
        },
        {
            title:`How can I verify the photo of the NFT is real or just a copy-paste image from the internet?`,
            content:`Unfortunately, we can't provide a efficient way to verify authenticity, as we said, we define this project as an experiement/party/game and there are always some people try to cheat in a game no matter the rule is strict or not. However we will try to let minters attach their social media link on the NFTs created by themsleves so that the buyers on markets may be able to verify authenticity of a photo in this way.`
        },
        {
            title:`I don't have any wasted/drunk photo but I have some really funny photos of my own. Can I join in?`,
            content:`Of course you can! We always welcome all the people who want to share their memorable moment to us!`
        },
        {
            title:`What's the difference betweent minting this NFT and upload my photo on Opensea by myself?`,
            content:`It's different! One is like watching World Series alone at home on Friday night. The other is like watching it with your friends in a bar!`
        }
        ]
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    bgColor: 'transparent'
};

const config = {
    animate: true,
    tabFocus: true,
};

const Faqcontent = () => {
    return (
        <>
            <Faq data={data} styles={styles} config={config} />
        </>
    )
}

export default Faqcontent