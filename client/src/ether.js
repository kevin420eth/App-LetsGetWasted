import { ethers } from 'ethers'
import abi from './abi'

// const provider = new ethers.providers.Web3Provider(window.ethereum)

let provider = ''

if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum)
} else {
    provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/38d634f1d941492db684f7e73ef7af59')
}

const signer = provider.getSigner()

//Sign message
const signMessage = `Each wasted NFT will cost you 0.00369 ETH. The owner of the NFT that you are going to mint will be able to use the photo attached on it in any way including but not limited to commercial use. If one uses it in some criminal activities, we are not responsible for that. If you agree with this statement, sign the request, otherwise reject it. Thank you.`

//NFT Price in ETH
const price = '0.00369'

//Target contract chainId
const contractChainId = 1

//Target contract address
const contractAddress = '0x04EeE3c4251BAFCCfAa63011534147d89175425F'

//Contract ABI
const contractAbi = abi

//Create target contract object
const contractObject = new ethers.Contract(contractAddress, contractAbi, provider)


const getAddress = async () => {
    await provider.send("eth_requestAccounts", []);
    const address = await signer.getAddress()
    return address
}

const getChainId = async () => {
    try {
        await provider.send("eth_requestAccounts", []);
        const chainid = await signer.getChainId()
        return chainid
    } catch {
        alert('Please install Metamask!')
    }
}

const signsomething = async () => {
    const userChainId = await getChainId()
    if (userChainId !== contractChainId) {
        alert('Please switch to Ethereum mainnet.')
        throw Error({ message: 'Wrong Network.', chainid: userChainId })
    } else {
        await provider.send("eth_requestAccounts", []);
        await signer.signMessage(signMessage);
    }
}

const mint = async () => {
    try {
        await provider.send("eth_requestAccounts", []);
        signsomething()
            .then((res) => {
                const contractSigner = contractObject.connect(signer)
                contractSigner.mint(
                    { value: ethers.utils.parseEther(price) }
                )
                    .then()
                    .catch((err) => {
                        if (err.code === 'INSUFFICIENT_FUNDS') {
                            console.log(err)
                            alert('Insufficient funds. Minimum is 0.0369 ETH.')
                        } else if (err.code === 'ACTION_REJECTED') {
                            console.log(err)
                            console.log('User rejected the transaction.')
                        } else {
                            console.log(err)
                        }
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    } catch {
        alert('Please install Metamask!')
    }
}

const verifyToken = async (tokenid) => {
    const userChainId = await getChainId()

    if (userChainId === undefined) {

    }
    else if (userChainId !== contractChainId) {
        alert('Please switch to Ethereum mainnet.')
    } else {
        const contractSigner = contractObject.connect(signer)
        const userAddress = await getAddress()
        return (await contractSigner.ownerOf(tokenid)
            .then((res) => {
                if (res === userAddress) {
                    return true
                } else {
                    alert('You are not the owner of this token.')
                    return false
                }
            })
            .catch((err) => {
                console.log(err)
                alert("This token doesn't exist")
            }))
    }
}

export { mint, verifyToken };