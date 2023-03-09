import './about.css'
import image1 from '../../assets/background/about__background.png'

const About = () => {

    return (
        <section className='about__section section' id='about'>
            <div className='about__container'>
                <h1 className='about__title'>What's this? 👀</h1>
                <p className='about__content'>
                    This is an NFT project that is closer to 100% decentralization than others.
                    A large part of the value of conventional NFTs is built on the team of the project, such
                    as art content, team's credibility and financing ability... etc.
                    At some levels it's not a bad thing, otherwise we would not have seen those highly
                    successful projects such as BAYC, Clone X and Moonbird. On the contrary, 90% of the
                    creation content of this project is designed by youself. The art, the title and the
                    description are totally created by the person who mints the NFT.
                    You will be able to decide the value of your NFT, no need to pray that you could get a
                    super rare edition with good luck as each NFT you mint is made of your most precious memory!
                </p>
                <h1 className='about__title'>What's the purpose? 🎯</h1>
                <p className='about__content'>
                    We define this project as an experimental project and want to bring those people
                    who have similar memories or experiences together sharing their joyful and funny
                    moments with the world. We don't know how the market will react on this concept but
                    we hope that you can enjoy in it!
                </p>
                <div className='about__image__container'>
                    <img className='about__image' alt='wasted' src={image1}/>
                </div>
            </div>
        </section>
    )
}

export default About