import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#1d1d26] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/2bf2b82e-82bc-4a85-b20e-91059f25cdc3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-200'>Contacts</p>
                <p className='py-6 text-gray-400'>// Submit The Form below Or Shoot Me An Email - mbfawwaz@gmail.com</p>
            </div>
            <input className='p-2' type="text" name='name' placeholder='Name' />
            <input className='p-2 my-4' type="email" name="email" placeholder="Email"/>
            <textarea name="message" className='p-2' placeholder='Message' rows="7"></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-black' type="submit"> 
                Let's Collaborate
            </button>
        </form> 
    </div>
  )
}

export default Contact