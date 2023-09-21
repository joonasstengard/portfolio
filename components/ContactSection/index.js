import React from 'react';
import ContactForm from '../ContactFrom'

const ContactSection = () => {

    return(
        <section id="contact" className="tp-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="fi flaticon-mail"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email</h2>
                                            <p>joonas.stengard(at)gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="fi flaticon-pin"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Location</h2>
                                            <p>Espoo, Finland</p>
                                        </div>
                                    </div>
                                </div> 
                                
                            </div>
                        </div>
                        <div className="section-title section-title2 text-center">
                            <span>Contact</span>
                            <h2>Leave a message</h2>
                        </div>
                        <div className="tp-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="tp-contact-map-section">
                <div className="tp-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d253751.222298856!2d24.34548807117329!3d60.20669195925645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1694977115031!5m2!1sen!2sfi" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default ContactSection;
