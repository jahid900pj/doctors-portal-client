import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())

        ////// same work using async await 
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/appointmentOptions`)
        //     const data = await res.json()
        //     return data
        // }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // Same work 
    //////////////////////////////////////////////////////////////  
    // const [appointmentOptions, setAppointmentOptions] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointmentOptions`)
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    ////////////////////////////////////////////////////////////

    return (
        <section className='mt-10 my-16'>
            <p className='text-center text-secondary font-bold'>Available Services on April {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)

                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;