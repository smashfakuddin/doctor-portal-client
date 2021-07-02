import React from 'react';
import InfoCard from './../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hour',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+0563897256',
        icon: faPhone,
        background: 'primary'
    },
]
const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row  mt-3 g-3">
                {
                    infosData.map(info => <InfoCard info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;