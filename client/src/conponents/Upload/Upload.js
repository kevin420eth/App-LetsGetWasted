import './upload.css'
import nft__image from '../../assets/materials/nft.png'
import opensealogo from '../../assets/logo/logo-opensea.png'
import UploadTypewriter from './UploadTypewriter'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineGold, AiOutlineEye, AiOutlineThunderbolt, AiOutlineMenu, AiOutlineCloudUpload } from 'react-icons/ai'
import { MdLabelOutline, MdOutlineInsertPhoto } from 'react-icons/md'
import { useState } from 'react'
import { verifyToken } from '../../ether'


const Upload = () => {
    const [Title, setTitle] = useState("Let's get wasted!")
    const [Description, setDescription] = useState(`Let's get wasted is the coolest NFT collection in the world!`)
    const [TokenIdAuth, setTokenIdAuth] = useState(true)
    const [UserNickname, setUserNickname] = useState('wasted_guy')
    const [SocialMedia, setSocialMedia] = useState('https://opensea.io/collection/lets-get-wasted')


    return (
        <section className='update__section section' id="upload" >
            <div className='update__container'>
                <div className='opensea__page'>
                    <div className='opensea__navbar'>
                        <a href='https://www.opensea.io' target='_blank' rel="noreferrer" className='opensea__logo'>
                            <img className='opensea__logo__image' src={opensealogo} alt='opensea_logo' />Opensea
                        </a>
                    </div>

                    <div className='opensea__preview__container'>

                        <div className='nft__information__left'>
                            <label htmlFor='photo'>
                                <div className='nft__showcase'>
                                    <img className={`nft__showcase__image ${TokenIdAuth ? 'form__button__disabled' : ''}`} id='showcaseimage' src={nft__image} alt='' />
                                </div>
                            </label>

                            <div className='nft__description'>
                                <p className='nft__description__title'>
                                    <HiOutlineMenuAlt2 />
                                    Description
                                </p>
                                <p className='nft__description__content__title'>
                                    By Wasted_King&nbsp;
                                    <BsFillPatchCheckFill className='nft__description__check' />
                                </p>
                                <p className='nft__description__content'>
                                    Created by <a className='socialmedia__link' href={SocialMedia} target='_blank' rel="noreferrer">{UserNickname}</a><br />
                                    {Description}
                                </p>
                            </div>
                        </div>


                        <div className='nft__information__right'>
                            <a href='https://opensea.io/collection/lets-get-wasted' target='_blank' rel="noreferrer" className='collection__name'>
                                Let's Get Wasted&nbsp;
                                <BsFillPatchCheckFill className='nft__description__check' />
                            </a>
                            <div className='nft__title'>
                                <h3>{Title}</h3>
                            </div>


                            <p className='nft__owner'>Owned by <span>you</span></p>

                            <div className='nft__reaction'>

                                <p className='nft__reaction__view'>
                                    <AiOutlineEye />
                                    6969 views
                                </p>

                                <p className='nft__reaction__favorite'>
                                    <AiOutlineHeart />
                                    69 favorites
                                </p>

                                <p className='nft__reaction__type'>
                                    <AiOutlineGold />
                                    PFPs
                                </p>

                            </div>

                            <div className='nft__price'>
                                <p className='sale__end__prompt'>Sales ends in 6 hours</p>
                                <div className='sale__end__countdown'>
                                    <div>
                                        <p>5</p>
                                        <p>Hours</p>
                                    </div>
                                    <div>
                                        <p>25</p>
                                        <p>Minutes</p>
                                    </div>
                                    <div>
                                        <p>30</p>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <div className='nft__current__price__container'>
                                    <p className='nft__current__price__label'>Current price</p>
                                    <div className='nft__current__price'>
                                        <h3 className='nft__current__price__eth'>69 ETH</h3>
                                        <p className='nft__current__price__usd'>$105000</p>
                                    </div>
                                    <div className='nft__current__price__buttons'>
                                        <div className='add__to__cart__button'>
                                            <p>Add to cart</p>
                                            <AiOutlineThunderbolt className='add__to__cart__icon' />
                                        </div>
                                        <div className='make__offer__button'>
                                            <p>Make offer</p>
                                            <MdLabelOutline className='make__offer__icon' />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='nft__offers__list__container'>
                                <p className='nft__offers__list__label'>
                                    <AiOutlineMenu />
                                    Offers
                                </p>
                                <div className='nft__offers__list__content'>
                                    <div className='nft__offers__list__content__data'>
                                        <p>Price</p>
                                        <p>USD Price</p>
                                        <p>Floor Difference</p>
                                        <p>Expiration</p>
                                        <p>From</p>

                                        <p>68 ETH</p>
                                        <p>$104590</p>
                                        <p>10% below</p>
                                        <p>3 hours</p>
                                        <p className='from'>4X5DF</p>

                                        <p>67 ETH</p>
                                        <p>$103580</p>
                                        <p>11% below</p>
                                        <p>2 hours</p>
                                        <p className='from'>5G8TY</p>

                                        <p>66 ETH</p>
                                        <p>$102680</p>
                                        <p>9% below</p>
                                        <p>1 hours</p>
                                        <p className='from'>8H6MN</p>

                                        <p>65 ETH</p>
                                        <p>$95570</p>
                                        <p>8% below</p>
                                        <p>50 minutes</p>
                                        <p className='from'>6XP5J</p>

                                        <p>64 ETH</p>
                                        <p>$92469</p>
                                        <p>7% below</p>
                                        <p>35 minutes</p>
                                        <p className='from'>9P4TR</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form__container">
                    <div className='form__title'>
                        <UploadTypewriter />
                    </div>
                    <form className='upload__form' id='form' method="post" onSubmit={(event) => {
                        event.preventDefault()
                        const confirmSend = window.confirm('You can only set your data one time.\n\nDo you want to continue?')
                        if (confirmSend) {
                            event.target.submit()
                        }
                    }} encType="multipart/form-data" pattern="[^' ']+">

                        <div className='form__rule'>
                            <p className='form__rule__text'>✔️ Use your own photo</p>
                            <p className='form__rule__text'>✔️ Filter/Effect/Sticker is fine</p>
                            <p className='form__rule__text form__rule__text__note'>✔️ png/jpg 2MB max</p>
                        </div>

                        <div className="form__input__group">
                            <label htmlFor='tokenId'>Token Id</label>
                            <div className='tokeid__input'>
                                <input className={`form__input__tokenid ${TokenIdAuth ? '' : 'form__input__disabled'}`} name='tokenId' id='tokenId' type='number' min='0' max='6968' placeholder='tokeid' readOnly={!TokenIdAuth} required onChange={(event) => {

                                    let id = Number(event.target.value)

                                    event.target.value = id

                                    if (id > 6968) {
                                        event.target.value = 6968
                                    } else if (id < 0) {
                                        event.target.value = 0
                                    } else if (Number.isInteger(id) === false) {
                                        event.target.value = 0
                                    }
                                }} />
                                <div className={`tokenid__verify__button ${TokenIdAuth ? '' : 'form__button__disabled'}`} disabled={!TokenIdAuth} onClick={
                                    async () => {
                                        let tokenid = document.getElementById('tokenId').value

                                        if (tokenid === '') {
                                            alert('Please enter a number')
                                        } else {
                                            tokenid = Number(tokenid)
                                            if (Number.isInteger(tokenid) === true && tokenid >= 0 && tokenid < 6969) {
                                                setTokenIdAuth(!await verifyToken(tokenid))
                                            } else {
                                                alert('Wrong Number')
                                            }
                                        }
                                    }}>
                                    Verify
                                </div>
                                <p className={`tokenid__verify__prompt ${TokenIdAuth ? 'tokenid__verify__prompt__hide' : ''}`}>Verified!</p>
                            </div>
                            <label htmlFor='name'>Step 1. Give your photo a name</label>
                            <input className={`form__input__input ${TokenIdAuth ? 'form__input__disabled' : ''}`} name='name' id='name' type="text" maxLength='100' disabled={TokenIdAuth} placeholder='title of your art' required onChange={(event) => {
                                let title = event.target.value
                                setTitle(title)
                            }} />

                            <label htmlFor='credible'>Step 2. Make your art credible <span className='form__input__step2__prompt'>optional</span> </label>
                            <div className='form__input__step2'>
                                <input className={`form__input__input form__input__step2__name ${TokenIdAuth ? 'form__input__disabled' : ''}`} name='credible' type="text" maxLength='15' disabled={TokenIdAuth} placeholder='nickname' onChange={(event) => {
                                    let nickname = event.target.value
                                    setUserNickname(nickname)
                                }}></input>
                                <input className={`form__input__input form__input__step2__socialmedia ${TokenIdAuth ? 'form__input__disabled' : ''}`} name='credible' type="url" maxLength='200' disabled={TokenIdAuth} placeholder='social media url link' onChange={(event) => {
                                    let socialmedia = event.target.value
                                    setSocialMedia(socialmedia)
                                }}></input>
                            </div>


                            <label htmlFor='description'>Step 3. Write a story about your photo</label>
                            <textarea className={`form__input__input ${TokenIdAuth ? 'form__input__disabled' : ''}`} name='description' col='2000' maxLength='20000' disabled={TokenIdAuth} placeholder='write something here...' required onChange={(event) => {
                                let description = event.target.value
                                setDescription(description)
                            }}></textarea>

                        </div>

                        <div className='form__image__upload'>
                            <label htmlFor='photo'>Step 4. Upload your photo</label>

                            <input name="photo" id='photo' type="file" accept='.png, .jpg, .jpeg' disabled={TokenIdAuth} required onChange={(event) => {
                                const [file] = document.getElementById('photo').files
                                const showcaseimage = document.getElementById('showcaseimage')
                                if (file.size > 2000000) {
                                    document.getElementById('photo').value = ''
                                    alert('File size is too big! 2MB is the limit!')
                                } else if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
                                    showcaseimage.src = URL.createObjectURL(file)
                                } else {
                                    document.getElementById('photo').value = ''
                                    showcaseimage.src = nft__image
                                    alert('Only .png/.jpg/.jpeg is acceptable!')
                                }
                            }} />
                            <div className='select__file__button__section'>
                                <label htmlFor='photo'>
                                    <div className={`select__file__button ${TokenIdAuth ? 'form__button__disabled' : ''}`}>
                                        Select a file&nbsp;
                                        <MdOutlineInsertPhoto />
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className='form__submit__button__div'>
                            <button className={`form__submit__button button ${TokenIdAuth ? 'form__button__disabled' : ''}`} disabled={TokenIdAuth} type='submit'>
                                Upload&nbsp;
                                <AiOutlineCloudUpload />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Upload;
//