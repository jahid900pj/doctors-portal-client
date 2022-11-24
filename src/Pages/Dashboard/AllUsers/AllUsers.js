import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    toast.success('Admin make successfully')
                    refetch()
                }
            })
    }
    return (
        <div>
            <div>
                <h3 className='text-3xl'>All users</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Make Admin</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) =>
                                    <tr key={user._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Admin</button>}</td>
                                        <td><button className='btn btn-xs btn-danger'>DELETE</button></td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;