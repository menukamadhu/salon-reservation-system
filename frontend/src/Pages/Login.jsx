import React, {useState} from 'react';
import loginImg from '../Assets/Loginpic.jpg'
import backImg from '../Assets/backgroundImage.jpg'
import { Modal } from '../Components/Modal';

export default function Login() {
    const [openModal,setOpenModal] = useState(false);
    return (
        <div>
            
            <section class="items-center justify-center min-h-screen bg-gray-100 relative w-screen">
            <img className='hidden w-screen h-screen opacity-50 md:block' src={backImg} alt="" />
        {/* <!-- Login container --> */}
        <div class="flex items-center max-w-4xl bg-gray-200 shadow-lg rounded-2xl absolute top-36 md:left-48 left-20">
            {/* <!-- Login Form --> */}
            <div class="p-4 px-16 md:w-1/2">
                <h2 class="text-2xl font-bold text-teal-600">Login</h2>
                <p class="mt-4 text-sm text-teal-600">If you already a member, easily log in</p>
                <form action="" class="flex flex-col gap-4">
                    <input class="p-2 mt-8 border rounded-xl" type="email" name="email" placeholder="email" />
                    <div class="relative">
                        <input class="w-full p-2 border rounded-xl" type="password" name="password" placeholder="password" /> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="absolute duration-300 bi bi-eye top-1/3 right-3 hover:scale-110" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>
                    <button class="py-2 text-white duration-300 bg-teal-600 rounded-xl hover:scale-105">Login</button>
                </form>
                <div class="grid items-center grid-cols-3 mt-10 text-gray-500">
                    <hr class="border-gray-500" />
                    <p class="text-center">OR</p>
                    <hr class="border-gray-500" />
                </div>
                <button class="flex items-center justify-center w-full py-2 mt-4 text-sm duration-300 bg-white border rounded-xl mt5 hover:scale-105">
                    <svg class="mr-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    Login with Google
                </button>
                {/* <!-- <p class="py-4 mt-10 text-xs text-blue-700 border-b border-gray-400">Forgot your password?</p> --> */}
                <div class="py-4 mt-10 border-b border-gray-400">
                    <a class="text-xs text-blue-700" href="">Forgot your password?</a>
                </div>
                <div class="flex items-center justify-between mt-4 text-xs">
                    <p>Don't have an account?</p>
                    <button class="px-5 py-2 duration-300 bg-white border rounded-xl hover:scale-110" onClick={() => setOpenModal(true)}>Register</button>
                </div>
                {openModal ? <Modal open={openModal} setOpen={setOpenModal}/> : <></>}
            </div>
            {/* <!-- Image --> */}
            <div class="hidden w-1/2 p-5 md:block">
                <img class="hidden rounded-2xl sm:block" src={loginImg} alt="" />
            </div>
        </div>
    </section>
        </div>
    )
}
