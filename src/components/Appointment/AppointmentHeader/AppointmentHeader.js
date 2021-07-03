import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../img/chair.png';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '550px' }} className='row g-3 d-flex align-items-center  '>
            <div className="col-md-4 offset-md-1 offset-1 col-8 ">
                <h1 className='text-brand'>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 ms-3  offset-2 col-10 ">
                <img src={chair} alt="" width='700' className='img-fluid' />
            </div>
        </main>
    );
};

export default AppointmentHeader;