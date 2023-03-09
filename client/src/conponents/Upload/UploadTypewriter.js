import Typewriter from 'typewriter-effect';

const UploadTypewriter = () => {

    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2000)
                        .changeDelay(50)
                        .typeString("Upload Your Data ")
                        .start()
                }}
                options={{
                    autoStart: true,
                    loop: false,
                    skipAddStyles: false,
                    cursor: "📑"
                }}
            />
        </>
    )
}

export default UploadTypewriter