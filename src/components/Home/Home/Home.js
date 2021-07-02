import React from 'react';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import Doctors from './../Doctors/Doctors';


const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact/>
        </>
    );
};

export default Home;