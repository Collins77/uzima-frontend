import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaEye, FaTrash } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Tooltip } from 'react-tooltip'
const SERVER = "https://backend.api.uzima.ai"
// const SERVER = "http://localhost:5000"

const AdminCounsellors = () => {
    const { admin, token } = useSelector(state => state.auth);
    const [counsellors, setCounsellors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCounsellors, setFilteredCounsellors] = useState([]);

    useEffect(() => {
        // Fetch the users for the company
        axios.get(`${SERVER}/api/admin/get-counsellors`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setCounsellors(response.data);
            setFilteredCounsellors(response.data); // Initialize filtered users
        })
        .catch(error => {
            console.error('Error fetching counsellors:', error);
        });
    }, [token]);
    useEffect(() => {
        // Filter users based on the search query
        setFilteredCounsellors(
            counsellors.filter(counsellor =>
                `${counsellor.firstName} ${counsellor.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, counsellors]);
  return (
    <div className='p-4'>
            <div className='mb-10 border-b pb-2'>
                <h1 className='font-bold text-2xl'>View Counsellors</h1>
                <p className='text-sm text-gray-500'>All system counsellors.</p>
            </div>
            <div>
                <div className='bg-slate-100 h-[70px] flex items-center justify-between px-4'>
                    <input
                        type="search"
                        placeholder='Search Name here'
                        className='border border-black outline-none rounded-md p-1'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div>
                        <a href="/admin/add-counsellor" className='bg-green-500 py-2 px-2 text-white text-center rounded-md hover:bg-green-700'>Enroll Counsellor</a>
                    </div>
                </div>
                <div className='bg-slate-100 p-2'>
                    <table className='border bg-white p-4 rounded-sm w-full shadow-md'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>First Name</th>
                                <th className='px-4 py-2'>Last Name</th>
                                <th className='px-4 py-2'>Email Address</th>
                                <th className='px-4 py-2'>Specialty</th>
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCounsellors && filteredCounsellors.map((counsellor) => (
                                <tr key={counsellor._id} className='border-b text-center'>
                                    <td className='px-4 py-3'>{counsellor.firstName}</td>
                                    <td className='px-4 py-3'>{counsellor.lastName}</td>
                                    <td className='px-4 py-3'>{counsellor.email}</td>
                                    <td className='px-4 py-3 text-green-400'>{counsellor.specialty}</td>
                                    <td className='px-4 py-3 flex gap-2 items-center justify-center'>
                                        <div>
                                            <FaEdit color='grey' data-tooltip-id="tooltip2" data-tooltip-content="Edit Staff Details" size={20} />
                                            <Tooltip id="tooltip2" />
                                        </div>
                                        <a href='/hr/staff-preview'>
                                            <FaEye color='grey' size={20} data-tooltip-id="tooltip3" data-tooltip-content="View Staff Report" />
                                            <Tooltip id="tooltip3" />
                                        </a>
                                        <div>
                                            <FaTrash color='red' data-tooltip-id="my-tooltip" data-tooltip-content="Remove Staff" size={20} />
                                            <Tooltip id="my-tooltip" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default AdminCounsellors