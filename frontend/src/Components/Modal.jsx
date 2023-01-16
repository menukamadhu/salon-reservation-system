import React from 'react'
import { Link } from 'react-router-dom'

export const Modal = ({open, setOpen}) => {
    if(!open) return null
    return(
        <div class="">
            <div className="modalContainer">
                {/* Popup Modal */}
                <div class="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30">
                    <div class="bg-gray-300 rounded-xl">
                        <div class="flex justify-end p-1" onClick={()=>setOpen(false)}>
                            <svg class="w-6 h-6 duration-300 opacity-60 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="relative flex flex-col items-center justify-between px-10 pb-6">
                            <Link to="/RegiClient">
                                <button class="p-2 px-16 m-2 text-sm duration-300 bg-white border hover:bg-teal-600 rounded-xl hover:scale-105 hover:text-white">register as a client</button>
                            </Link>
                            <Link to="/RegiSalon">
                                <button class="p-2 px-16 m-2 text-sm duration-300 bg-white border hover:bg-teal-600 rounded-xl hover:scale-105 hover:text-white">register as a salon</button>
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
