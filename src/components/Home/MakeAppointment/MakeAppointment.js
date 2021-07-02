import React from 'react';
import doctor from '../../../img/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5 appointment-text">
                        <h5  className=' text-uppercase'>Appointment</h5>
                        <h1 className='my-4'>Make an appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab itaque quasi assumenda sint cumque.z</p>
                        <button className='custom-button'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;