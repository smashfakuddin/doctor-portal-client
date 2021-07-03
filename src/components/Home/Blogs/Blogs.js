import React from 'react';
import caudi from '../../../img/winson.png';
import Blog from './../Blog/Blog';

const blogsData = [
    {
        name: 'Dr. Caudi',
        img: caudi,
        date: '23 April 2019',
        title: '2 times of brush in a day can keep you healthy'
    },
    {
        name: 'Dr. Caudi',
        date: '23 April 2019',
        img: caudi,
        title: '2 times of brush in a day can keep you healthy'
    },
    {
        name: 'Dr. Caudi',
        date: '23 April 2019',
        img: caudi,
        title: '2 times of brush in a day can keep you healthy'
    },
]
const Blogs = () => {
    return (
        <section className='blogs'>
            <div className="text-center my-5">
                <h6 className='text-brand'>OUR BLOG</h6>
                <h4>From Our Blog News</h4>
            </div>
            <div className='row d-flex justify-content-evenly'>
                {blogsData.map(blog => <Blog blog={blog} />)}
            </div>
        </section>
    );
};

export default Blogs;