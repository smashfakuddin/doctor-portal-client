import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className='col-4 text-center'>
            <img src={doctor.img} alt="" height='350'/>
            <h4 className='mt-4'>{doctor.name}</h4>
            <small className='text-secondary'><FontAwesomeIcon  icon={faPhone}/> {doctor.phone}</small>
        </div>
    );
};

export default Doctor;