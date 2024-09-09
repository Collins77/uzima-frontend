import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaEye, FaTrash } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Tooltip } from 'react-tooltip'
// const SERVER = "https://uzima-backe.vercel.app"
const SERVER = "http://localhost:5000"

const AdminCompanies = () => {
    const { company, token } = useSelector(state => state.auth);
    const [companies, setCompanies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [plans, setPlans] = useState([]);


    useEffect(() => {
        // Fetch the users for the company
        axios.get(`${SERVER}/api/admin/get-companies`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(async response => {
            const companiesData = await Promise.all(response.data.map(async (company) => {
                // Fetch members for each company based on companyId
                const membersResponse = await axios.get(`${SERVER}/api/company/${company._id}/users`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                return { ...company, members: membersResponse.data };
            }));
            setCompanies(companiesData);
            setFilteredCompanies(companiesData); // Initialize filtered companies
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });

        // Fetch all plans
        axios.get(`${SERVER}/api/admin/get-plans`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setPlans(response.data);
        })
        .catch(error => {
            console.error('Error fetching plans:', error);
        });
    }, [token]);

    useEffect(() => {
        // Filter users based on the search query
        setFilteredCompanies(
            companies.filter(company =>
                `${company.name}`.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, companies]);

    // Function to get the plan name by ID
    const getPlanName = (planId) => {
        const plan = plans.find(p => p._id === planId);
        return plan ? plan.name : 'Unknown Plan';
    };

  return (
    <div className='p-4'>
            <div className='mb-10 border-b pb-2'>
                <h1 className='font-bold text-2xl'>View Corporate Partners</h1>
                <p className='text-sm text-gray-500'>List of all onboarded corporates/companies/institutions</p>
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
                        <a href="/admin/add-corporate" className='bg-green-500 py-2 px-2 text-white text-center rounded-md hover:bg-green-700'>Enroll Corporate</a>
                    </div>
                </div>
                <div className='bg-slate-100 p-2'>
                    <table className='border bg-white p-4 rounded-sm w-full shadow-md'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Company Name</th>
                                <th className='px-4 py-2'>Email Address</th>
                                <th className='px-4 py-2'>Members</th>
                                <th className='px-4 py-2'>Plan</th>
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCompanies && filteredCompanies.map((company) => (
                                <tr key={company._id} className='border-b text-center'>
                                    <td className='px-4 py-3'>{company.name}</td>
                                    <td className='px-4 py-3'>{company.email}</td>
                                    <td className='px-4 py-3'>{company.members.length}</td>
                                    <td className='px-4 py-3 text-green-400'>{getPlanName(company.planSubscribedTo)}</td>
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

export default AdminCompanies