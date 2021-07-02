import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Testimonials.css';
import winson from '../../../img/winson.png';
import selena from '../../../img/selena.png';
import emma from '../../../img/emma.png';
import Testimonial from './../Testimonial/Testimonial';

const testimonialData = [
    {
        name: 'Winson Herry',
        img: winson,
        address: 'New York'
    },
    {
        name: 'Selena Wilson',
        img: selena,
        address: 'California'
    },
    {
        name: 'Emma Olivia',
        img: emma,
        address: 'Manchester'
    },
]

const Testimonials = () => {
    return (
        <section className='testimonial-section mt-5'>
            <div className='d-flex justify-content-between'>
                <div className='offset-md-1'>
                    <h5 className='mt-4'>TESTIMONIAL</h5>
                    <h2>What's Our Patients Says</h2>
                </div>
                <div>
                    <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-icon" />
                </div>
            </div>
            <div className='testimonial mt-5'>
                <div className="row d-flex justify-content-evenly align-center">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;