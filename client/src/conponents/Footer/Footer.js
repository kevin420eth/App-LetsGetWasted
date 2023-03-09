import './footer.css'
import opensealogo from '../../assets/logo/logo-opensea.png'
import twitterlogo from '../../assets/logo/logo-twitter.png'
import etherscanlogo from '../../assets/logo/logo-etherscan.png'
import raritysniperlogo from '../../assets/logo/logo-raritysniper.png'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <div className='footer__container'>

                <div className='footer__socialmedia'>
                    <a className='footer__socialmedia__link' href='https://opensea.io/collection/lets-get-wasted' target='_blank' rel="noreferrer">
                        <img className='footer__socialmedia__link__img' src={opensealogo} alt='opensealogo' />
                    </a>
                    <a className='footer__socialmedia__link' href='https://twitter.com/wastednft69' target='_blank' rel="noreferrer">
                        <img className='footer__socialmedia__link__img' src={twitterlogo} alt='twitterlogo' />
                    </a>
                    <a className='footer__socialmedia__link' href='https://etherscan.io/address/0x04EeE3c4251BAFCCfAa63011534147d89175425F' target='_blank' rel="noreferrer">
                        <img className='footer__socialmedia__link__img' src={etherscanlogo} alt='etherscanlogo' />
                    </a>
                </div>
                
                <div className='collab__section'>
                    <a href="https://icy.tools/calendar" target="_blank" rel="noreferrer" className='collab__section__link icytool_link'>
                        <img className='collab__website__image icytool_image' src="https://cdn.icy.tools/images/icy-tools-light.svg" alt="as seen on icy.tools"/>
                    </a>
                </div>


                <p className='footer__copyright'>© {year} Let's Get Wasted.</p>
            </div>
        </footer>
    )
}

export default Footer;