import React from 'react';
import chair from '../../../img/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ height: '550px' }} className='row g-3 d-flex align-items-center  '>
            <div className="col-md-4 offset-md-1 offset-1 col-8 ">
                <h1>Your New Smile <br /> Start Here</h1>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Deleniti porro unde voluptatem cum iure perspiciatis
                    quos doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facilis repellat dolorem eius?</p>
                <button className="custom-button">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 ms-3  offset-2 col-10 ">
                <img src={chair} alt="" width='700' className='img-fluid' />
            </div>
        </main>

    );
};

export default HeaderMain;