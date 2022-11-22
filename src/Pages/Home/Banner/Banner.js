import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgChair from '../../../assets/images/bg.png'
import PrimaryBtn from '../../../Components/PrimaryBtn';

const Banner = () => {
    return (
        <div className='lg:mt-10' style={{ background: `url(${bgChair})` }}>
            {/* style={{ background: `url(${chair})`, opacity: 0.2 }} */}
            <div className={`hero `}>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="rounded-lg shadow-2xl w-full lg:w-1/2" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;