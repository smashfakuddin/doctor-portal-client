import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-container my-5">
            <div className="text-center">
                <h5>CONTACT US</h5>
                <h2>Always Connect With Us</h2>
            </div>
            <div className="col-md-9 mx-auto mt-5">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *" />
                    </div>
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="Subject *" />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"/>
                    </div>
                    <div className="form-group text-center mt-2">
                        <button type="button" className="custom-button"> Submit </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;