import './qa.css'
import Faqcontent from './Faq'

const Qa = () => {
    return (
        <section className='QA__section section' id='qa'>
            <div className='qa__container'>
                <h1 className='qa__title'>FAQ</h1>
                <div className='qa__content'>
                    <Faqcontent className='ddd' />
                </div>
            </div>
        </section>
    )
}

export default Qa;