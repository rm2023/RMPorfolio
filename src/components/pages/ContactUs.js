import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import  "../css/contact.css"

export const ContactUs = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_htlzwu8', 'template_wxqw0bb', form.current, 'A4kKArm36ET7PsdzL')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: '',
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='Box'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                />
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <input type="submit" value="Send" />
            </form>
            
            {messageSent && (
                <div className="message-sent-popup">
                    Message sent successfully!
                </div>
            )}
        </div>
    );
};