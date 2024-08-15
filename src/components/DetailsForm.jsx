import React from 'react'

const DetailsForm = ({user}) => {
    return (
        <div className='w-[500px] p-2'>
            <form action="" className='w-full'>
                <div className='flex items-center gap-2 justify-between mb-4 w-full'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={user?.firstName} className='border px-2 py-1 rounded-sm w-full' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={user?.lastName} className='border px-2 py-1 rounded-sm w-full' />
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="">Email Address</label>
                    <input type="email" className='border px-2 py-1 rounded-sm' value={user?.email} />
                </div>
                <input type="button" className='bg-blue-500 text-white px-2 py-1 rounded-md' value="Save" />
            </form>
        </div>
    )
}

export default DetailsForm