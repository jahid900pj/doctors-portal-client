import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bgChair from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // const [selectedDate, setSelectedDate] = useState(new Date);

    // let footer = <p>Please pick a day.</p>;
    // if (selectedDate) {
    //     footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    // }
    return (
        <header className='my-6'>
            <div className="hero"
                style={{ background: `url(${bgChair})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-32">
                    <img src={chair} alt='' className="w-full  md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='rounded-lg shadow-md p-2'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        // footer={footer}
                        />
                        {/* <p>You have selected Data : {format(selectedDate, 'PP')}.</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;