import React from 'react';
import fluoride from '../../../img/fluoride.png';
import cavity from '../../../img/cavity.png';
import whitening from '../../../img/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        img: whitening
    },
]
const Services = () => {
    return (
        <section className='services-container'>
            <div className='text-center my-5'>
                <h6 className='text-brand'>OUR SERVICES</h6>
                <h3>Services We Provide</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="w-75 row  mt-3 g-3">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;