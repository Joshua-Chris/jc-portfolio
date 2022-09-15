import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 flex justify-center items-center p-4 pb-0'>
        <form method='POST' action="https://getform.io/f/e9a2c4a7-5310-4746-886b-b2bff36c75e4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me at joshuadgreat04@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] bg-opacity-5 text-white p-2 rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] bg-opacity-5 text-white rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] bg-opacity-5 text-white p-2 rounded-lg' name="message" rows="3" placeholder='Message'></textarea>
            <button className='text-white rounded-lg border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact