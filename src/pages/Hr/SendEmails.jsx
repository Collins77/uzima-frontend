import React from 'react'

const SendEmails = () => {
    return (
        <div className='p-4'>
            <div className='mb-10 border-b pb-2'>
                <h1 className='font-bold text-2xl'>Send Emails to Staff</h1>
                <p className='text-sm text-gray-500'>You can choose to send emails to a specific employee or all employees</p>
            </div>
            <div>
                <form action="" className='w-[40%]'>
                    <div className='mb-4'>
                        <label htmlFor="">Choose email</label><br/>
                        <select className='border border-black rounded-md p-2 w-full' name="" id="">
                            <option value="">All</option>
                            <option value="">collins@cotek.com</option>
                            <option value="">collins@cotek.com</option>
                            <option value="">collins@cotek.com</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Message Content</label>
                        <textarea name="" id="" rows={8} className='w-full border outline-none rounded-md border-black'></textarea>
                    </div>
                    <button className='bg-green-500 w-full py-2 text-center text-white rounded-sm hover:bg-green-700'>Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default SendEmails