import './home.css'
import { useEffect, useState } from 'react';
import HomeTypewriter from './HomeTypewriter';
import HomeSwiper from './HomeSwiper';
import curtain from '../../assets/materials/curtain.png'
import { mint } from '../../ether'
import { useInterval } from './UseInterval'


const Home = () => {
    const targetTime = 	1677258000000 //Wed Feb 22 2023 22:00:00 GMT+0800 Taipei Time Zone
    const currentTime = new Date().getTime()

    const [MintActive, setMintActive] = useState(false)
    const [leftTime, setleftTime] = useState(targetTime - currentTime)
    const [delay, setDelay] = useState(1000)

    useEffect(() => {
        if (leftTime <= 0) {
            setMintActive(true)
        }
    }, [])

    useInterval(() => {
        const currentTime = new Date().getTime()
        const left_time = targetTime - currentTime
        if (left_time <= 0) {
            setDelay(null)
        } else {
            setleftTime(left_time)
        }
    }, delay)

    const left_day = Math.floor(leftTime / (1000 * 60 * 60 * 24))
    const left_hour = Math.floor((leftTime - left_day * 24 * 60 * 60 * 1000) / (1000 * 60 * 60))
    const left_minute = Math.floor((leftTime - left_day * 24 * 60 * 60 * 1000 - left_hour * 60 * 60 * 1000) / (1000 * 60))
    const left_second = Math.floor((leftTime - left_day * 24 * 60 * 60 * 1000 - left_hour * 60 * 60 * 1000 - left_minute * 60 * 1000) / (1000))

    return (
        <section className='home__sectoin section'>
            <div className='home__container'>

                <div className='home__content'>
                    <div className='home__title' id='app'>
                        <HomeTypewriter />
                    </div>

                    <div className={`mint__button__container ${MintActive ? '' : 'mint__button__container__disabled'}`} onClick={() => {
                        if (leftTime <= 0) {
                            mint()
                        }
                    }}>
                        <p className='mint__button'>
                            Take a shot 🍹
                        </p>
                        <img className='curtain__img' src={curtain} alt='' />
                    </div>

                    <p className='mint__price__prompt'>0.00369 ETH/each</p>

                    <div className={`countdown__timer ${MintActive ? 'countdown__timer__disabled' : ''}`}>
                        <p className='countdown__timer__time'>
                            {left_day === 0 ? 
                            `${left_hour}:${left_minute}:${left_second}` : 
                            `${left_day===1?`${left_day} Day ${left_hour}:${left_minute}:${left_second}`:`${left_day} Days ${left_hour}:${left_minute}:${left_second}`}`}
                        </p>
                    </div>

                </div>

                <div className='home__showcase'>
                    <HomeSwiper />
                </div>
            </div>


        </section>
    )
}
export default Home;