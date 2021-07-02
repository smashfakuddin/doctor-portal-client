import React from 'react';
import featured from '../../../img/featured.png';

const FeaturedService = () => {
    return (
        <section className='d-flex mt-5 pt-5 mx-auto'>
                <div className="col-md-5 col-12 offset-1 text-center">
                    <img src={featured} alt="" height='500' />
                </div>
                <div className="col-md-7 col-12 w-75 mt-3">
                    <h3>Exceptional Dental Care, <br /> on Your Terms</h3>
                    <p className='w-50 my-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium cupiditate fugiat alias id iste voluptate debitis maiores dicta dolorum tempore minus ab deserunt sapiente similique consequuntur excepturi cum, velit non deleniti quia harum officiis aliquid nostrum. Sequi, laborum explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat natus optio molestiae, blanditiis maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti quos iusto dolor qui facilis.</p>
                    <button className='custom-button'> Learn More</button>
                </div>
        </section>
    );
};

export default FeaturedService;