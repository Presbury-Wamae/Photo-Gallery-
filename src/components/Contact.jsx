import React, {useEffect} from "react";
import { useForm, ValidationError } from '@formspree/react';
import "../component css/Contact.css"
import NavBar from "./NavBar";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function Contact(){
    const [state, handleSubmit] = useForm('xjkwvlrg'); 

    useEffect(() => {
        if (state.succeeded) {
            setFormData({ name: '', email: '', message: '' });
        }
    }, [state.succeeded]);


    return(
    <section>
        <div className="navbar"> <NavBar /></div>
        <div className="contact">
                <div className="contact-title-section">
                    <h1 className="contact-title">Contact Us</h1><br></br>
                    <p className="contact-subtext">We'd love to hear from you! Send us a message.</p>
                    
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <p><strong>Phone:</strong> +254 712 345 678</p>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <p><strong>Email:</strong> info@phogalleria.com</p>
                        </div>
                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <p><strong>Office Hours:</strong> Mon - Fri: 8:00am - 5:00pm</p>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <p><strong>Location:</strong> 3rd Floor, Vision Plaza, Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name
            <input id="name"
                   type="text"
                   name="name"
                   placeholder="Your Name"/>
             <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors} /></label>
            
            <label htmlFor="email">Email
            <input id="email"
                   type="email"
                   name="email"
                   placeholder="Your Email"/>
             <ValidationError 
                  prefix="email" 
                  field="email"
                  errors={state.errors} /></label>


            <label htmlFor="message">Message
            <textarea id="message"
                   type="message"
                   name="message"
                   placeholder="Your Message"/>
             <ValidationError 
                  prefix="message" 
                  field="message"
                  errors={state.errors} /></label>
                
              
                
                <button type="submit" disabled={state.submitting} >
                    {state.submitting ? 'Sending...' : 'Send'}
                    </button>

                    {state.succeeded && (<p className="success-message">
                    Message sent successfully! We'll respond shortly. </p>
                    )}
            </form>
        </div>
     </div> 
    </section>   
    )
} 

export default Contact
