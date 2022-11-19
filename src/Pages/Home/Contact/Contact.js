import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn';

const Contact = () => {
    return (
        <div>

            <div className="hero " style={{ background: `url(${appointment})` }}>

                <div className="hero ">
                    <div className="card  w-full max-w-md ">
                        <div className="card-body mt-14 mb-14">
                            <div>
                                <h4 className="text-xl text-primary font-bold text-center">Testimonial</h4>
                                <h2 className='text-4xl text-white text-center'>Stay connected with us</h2>
                            </div>
                            <div className="form-control pb-5 mt-11">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className='pb-2'>
                                <textarea className='w-full max-w-md h-32 rounded-md px-2' placeholder='message' name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className=" mt-6 mx-auto">
                                <PrimaryBtn>Submit</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;