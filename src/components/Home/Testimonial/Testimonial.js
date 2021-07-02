import React from 'react';

const Testimonial = ({ testimonial }) => {
    console.log(testimonial)
    return (
        <div className='col-md-3  shadow p-3 mb-5 bg-body rounded'>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus atque dolores velit sapiente, aspernatur non itaque a praesentium corrupti dignissimos porro quas, quod iste quaerat, dolorum molestias eius sit!</p>
            </div>
            <div className='d-flex my-3'>
                <img src={testimonial.img} alt="" />
                <div className='ms-3'>
                    <h4 style={{color:'#1cc7c1'}}>{testimonial.name}</h4>
                    <h6 className='text-secondary'>{testimonial.address}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;