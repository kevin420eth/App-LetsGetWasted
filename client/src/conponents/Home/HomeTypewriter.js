import Typewriter from 'typewriter-effect';

//Doc: https://github.com/tameemsafi/typewriterjs
const HomeTypewriter = () => {
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(50)
                        .typeString("A New Concept Of NFT ")
                        .pauseFor(1000)
                        .deleteAll(1)
                        .typeString("Novel Mint Experience")
                        .pauseFor(1500)
                        .deleteAll(1)
                        .typeString("Decide The Value Of NFTs By Yourself And...")
                        .pauseFor(1500)
                        .deleteAll(1)
                        .typeString('Let The World Know<br> Your <strong>Ridiculous</strong> Moment<br> And Save It Permanently<br> On The Blockchain')
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: false,
                    skipAddStyles: false,
                    cursor: "🍺"
                }}
            />
        </>
    )
}

export default HomeTypewriter