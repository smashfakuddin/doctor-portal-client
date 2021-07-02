import React from 'react';
import doctor from '../../../img/doctor.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        img: doctor
    },
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        img: doctor
    },
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        img: doctor
    },
]

const Doctors = () => {
    return (
        <section>
            <div className="text-center my-5">
                <h3 style={{ color: '#1cc7c1' }}>Our Doctors</h3>
            </div>
            <div className="row">
                {
                    doctorsData.map(doctor => <Doctor doctor={doctor} />)
                }
            </div>
        </section>
    );
};

export default Doctors;