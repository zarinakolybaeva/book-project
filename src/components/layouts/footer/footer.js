import React from 'react';
import './footer.styles.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () =>{
    const form=useRef();
    const templateId="template_uxs227y";
    const serviceId="service_jfw6ae4";
    const publicKey="SIrHJCG8Hogll_cY9";


    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response)=>{
            console.log(response.text);
        })
        .catch((error)=>{
            console.log(error.text);
        })
        e.target.reset();
        

    }

    return(
        <section className='footer-container'>
            <div className='container'>
                <h2>If you have any questions feel free to ask</h2>

                <form onSubmit={handleSubmit} ref={form} className='footer-form'>
                    <div className='form-group'>
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input type='text' name="user_name" id="name" className='form-input' placeholder='Enter your name'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email' className='form-label' >Email: </label>
                        <input type='email' name="user_email" id="email" className='form-input' placeholder='Enter your email'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='Question' className='form-label'>Question: </label>
                        <textarea className='form-input' name="message" id="Question" placeholder='Type your Question'>

                        </textarea>
                    </div>

                    <div className='form-group'>
                         <input type="submit" value="Submit" className='form-submit' placeholder='Submit'/>
                    </div>
                </form>
                <p>&copy; 2023 BookStore. All Rights Reserved</p>

            </div>
        </section>
    )
}

export default Footer;
