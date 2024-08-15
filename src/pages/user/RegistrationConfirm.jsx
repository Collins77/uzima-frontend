import React from 'react'

const RegistrationConfirm = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Registration is Successful. Kindly verify your email then proceed to login page.</h1>
        <p>If your email is already verified you can follow this <a href="/signin" className='underline text-blue-500'>link</a> to login to your account.</p>
    </div>
  )
}

export default RegistrationConfirm