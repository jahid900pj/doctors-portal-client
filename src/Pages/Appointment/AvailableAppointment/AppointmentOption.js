import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card w-full md:w-11/12  shadow-xl mx-auto">
            <div className="card-body text-center">
                <h2 className=" text-center text-primary text-xl font-bold">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day.'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    {/* <button htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</button> */}
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                    > Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;