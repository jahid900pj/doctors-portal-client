import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName, email, phone, slot
        }
        console.log(booking)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Conform')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-1">{name}</h3>

                    <form onSubmit={handleBooking} className='grid gap-2'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name="slot" className="select select-bordered w-full ">

                            {
                                slots.map((slot, i) => <option value={slot} key={i} >{slot}</option>)
                            }
                        </select>

                        <input defaultValue={user?.displayName} disabled name='name' type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input defaultValue={user?.email} disabled type="text" placeholder="email" name='email' className="input input-bordered w-full" />
                        <input type="text" placeholder="phone" name='phone' className="input input-bordered w-full" />
                        <input className='btn btn-accent input input-bordered w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;