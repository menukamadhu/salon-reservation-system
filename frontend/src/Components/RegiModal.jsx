import React from 'react'
import {Link} from 'react-router-dom'

export const RegiModal = ({open,setOpen}) => {
    if(!open) return null
  return (
    <div>
      <div className="modalContainer">
        {/* Popup Modal */}
                <div class="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30">
                    <div class="bg-gray-300 rounded-xl">
                        <div className='flex items-center justify-center px-10 mt-4'>
                            <h2 className='font-bold text-teal-600'>Registered Successfully</h2>
                        </div>
                        <div class="relative flex flex-col items-center justify-between w-full">
                            <Link to="/">
                                <button class="p-2 px-10 m-4 text-sm duration-300 bg-white border hover:bg-teal-600 rounded-xl hover:scale-105 hover:text-white">Done</button>
                            </Link> 
                        </div>
                    </div>
                </div>
      </div>
    </div>
  )
}
