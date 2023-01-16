import React, {useState} from 'react'
import regiPic from '../Assets/register.jpg'
import backImg from '../Assets/backgroundImage.jpg'
import { RegiModal } from '../Components/RegiModal';

export default function RegiClient() {
    const[openModal,setOpenModal] = useState(false);
  return (
    <div>
        <section class="flex items-center justify-center min-h-screen bg-gray-100 w-screen relative">
            <img className='hidden w-screen h-screen opacity-50 md:block' src={backImg} alt="" />
            {/* <!-- Register container --> */}
            <div class="flex flex-col items-center justify-center max-w-3xl bg-gray-200 shadow-lg rounded-2xl absolute top-3 md:left-48 left-20">
                {/* <!-- Register form --> */}
                <div class="p-4 px-16 md:w-1/2">
                    <h2 class="items-center text-2xl font-bold text-teal-600">Register for Clients</h2>
                    <form action="" class="flex flex-col items-center justify-center gap-4 m-4">
                        <input class="py-2 pl-6 border pr-60 rounded-xl" type="text" name="firstname" placeholder="First Name" required/>
                        <input class="py-2 pl-6 border pr-60 rounded-xl" type="text" name="lastname" placeholder="Last Name" required/>
                        <input class="py-2 pl-6 border pr-60 rounded-xl" type="email" name="email" placeholder="E-mail Address" required/>
                        <div class="relative flex justify-start mr-20">
                            <label class="flex items-center justify-center mr-8 text-gray-500" for="">Gender</label>
                            <input class="sr-only peer" type="radio" name="male"/>
                            <div class="relative py-2 mx-1 text-gray-400 bg-white border w-28 rounded-2xl hover:shadow hover:text-teal-600">
                                <p class="flex justify-center font-bold">Male</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute bi bi-record-circle top-1/3 left-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                </svg>
                            </div>
                            <input class="sr-only peer" type="radio" name="male"/>
                            <div class="relative py-2 mx-1 text-gray-400 bg-white border w-28 rounded-2xl hover:shadow hover:text-teal-600">
                                <p class="flex justify-center font-bold">Female</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute bi bi-record-circle top-1/3 left-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                </svg>
                            </div>
                        </div>
                        <input class="py-2 pl-6 border pr-60 rounded-xl" type="text" name="contactnum" placeholder="contact Number" required/>
                        <input class="py-2 pl-6 border pr-60 rounded-xl" type="password" name="password" placeholder="Password" required/>
                        <div class="relative">
                            <input class="py-2 pl-6 border pr-60 rounded-xl" type="password" name="password" placeholder="confirm Password" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute duration-300 top-1/3 right-3 hover:scale-110" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                        </div>
                        <button class="p-2 px-10 duration-300 bg-teal-600 border rounded-xl hover:scale-105 hover:text-white" onClick={() => setOpenModal(true)}>Register</button>
                        {openModal ? <RegiModal open={openModal} setOpen={setOpenModal}/> : <></>}
                    </form>
                </div>
                {/* <!-- Image container --> */}
                <div class="hidden w-9/12 py-2 md:block">
                    <img class="hidden rounded-2xl sm:block" src={regiPic} alt=""/>
                </div>
            </div>
        </section>
    </div>
  )
}
