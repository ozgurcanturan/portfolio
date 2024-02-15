import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    return (
        <section className='contact-container' id='contact'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard iconUrl="https://img.icons8.com/ios-filled/50/000000/mail.png" text="dersimcoder@gmail.com" />
                    <ContactInfoCard iconUrl="https://img.icons8.com/ios-filled/50/000000/github.png" text="https://github.com/ozgurcanturan62" />
                    <ContactInfoCard iconUrl="https://img.icons8.com/ios-filled/50/000000/linkedin.png" text="https://www.linkedin.com/ozgurcanturan/" />

                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe