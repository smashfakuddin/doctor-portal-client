import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import Navbar from './../../Shared/Navbar/Navbar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate}/>
        </>
    );
};

export default Appointment;