import './header.css'
import { useState } from 'react'
import {AiFillAppstore, AiFillCloseCircle} from 'react-icons/ai'
import logo from '../../assets/logo/logo192.png'
import opensealogo from '../../assets/logo/logo-opensea.png'
import twitterlogo from '../../assets/logo/logo-twitter.png'
import etherscanlogo from '../../assets/logo/logo-etherscan.png'



const Header = ()=>{

    const [Toggle, showMenu] = useState(false)

    return(
        <header className='header'>
            <nav className={`navbar ${Toggle?'show-menu':''}`}>
                <a href='index.html' className='navbar__logo'>
                    <img className='navbar__logo__image' src={logo} alt=''/>
                    Wasted!
                </a>

                <div className='navbar__menu'>
                    <ul className='navbar__list grid'>
                        <li className='navbar__item'>
                            <a href='#top' className=''>Home</a>
                        </li>

                        <li className='navbar__item'>
                            <a href='#upload' className=''>Upload</a>
                        </li>

                        <li className='navbar__item'>
                            <a href='#about' className=''>About</a>
                        </li>

                        <li className='navbar__item'>
                            <a href='#qa' className=''>FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className='navbar__socialmedia'>
                    <a className='navbar__socialmedia__link' href='https://opensea.io/collection/lets-get-wasted' target='_blank' rel="noreferrer">
                        <img className='navbar__socialmedia__link__img' src={opensealogo} alt='opensealogo'/>
                    </a>

                    <a className='navbar__socialmedia__link' href='https://twitter.com/wastednft69' target='_blank' rel="noreferrer">
                        <img className='navbar__socialmedia__link__img' src={twitterlogo} alt='twitterlogo'/>
                    </a>

                    <a className='navbar__socialmedia__link' href='https://etherscan.io/address/0x04EeE3c4251BAFCCfAa63011534147d89175425F' target='_blank' rel="noreferrer">
                        <img className='navbar__socialmedia__link__img' src={etherscanlogo} alt='etherscanlogo'/>
                    </a>

                    <div className='navbar__toggle' onClick={()=>{showMenu(true)}}>
                        <AiFillAppstore />
                    </div>

                </div>

                <div className='navbar__close' onClick={()=>{showMenu(false)}}>
                    <AiFillCloseCircle />
                </div>


            </nav>
        </header>
    )
}

export default Header;