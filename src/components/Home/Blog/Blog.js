import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    return (
        <div className="col-3 shadow p-3 mb-5 bg-body rounded">
            <div className='d-flex align-items-center'>
                <div>
                    <img src={blog.img} alt="" />
                </div>
                <div className='ms-3'>
                    <h6 className='fw-bold'>{blog.name}</h6>
                    <small className='text-secondary'>{blog.date}</small>
                </div>
            </div>
            <div>
                <h5>{blog.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate, amet reprehenderit officia illo, aliquam a dolor odit provident, nam sunt dolorem expedita pariatur facilis.</p>
            </div>
        </div>
    );
};

export default Blog;