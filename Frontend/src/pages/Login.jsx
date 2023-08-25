import React from 'react'
import logo from "../Assets/media/white-logo.svg"
import google from "../Assets/media/google.svg"
import facebook from "../Assets/media/facebook.svg"
import apple from "../Assets/media/apple.svg"
import "../Assets/css/style.css"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <>
            <div className=' login-page w-full' >
                <header className='flex items-center p-5 w-full bg-black' >
                    <div className="logo-parent">
                        <img src={ logo } alt="" className='header-logo' />
                    </div>
                    POSTIFY
                </header>
                <div className="login-page  bg-black my-6  max-w-full sm:max-w-xl mx-auto py-5 px-9 rounded-xl ">
                    <div className="continer-sm mx-auto" >
                        <h1 className='my-8 text-4xl font-bold' >Login to Postify</h1>
                        <div className="google my-3  justify-center text-md p-3  flex items-center
                     border border-slate-500 rounded-3xl hover:border-current cursor-default">
                            <img src={ google } alt="" className='h-6 mx-3' />
                            Continue With Google
                        </div>
                        <div className="facebook my-3 justify-center text-md p-3 flex items-center
                     border border-slate-500 rounded-3xl hover:border-current cursor-default">
                            <img src={ facebook } alt="" className='h-7 mx-3' />
                            Continue With Facebook
                        </div>

                        <div className="apple my-3 justify-center text-md p-3 flex items-center 
                     border border-slate-500 rounded-3xl hover:border-current cursor-default">
                            <img src={ apple } alt="" className='h-7 mx-3' />
                            Continue With apple
                        </div>
                        <div className="apple my-3 text-center text-md p-3
                     border border-slate-500 rounded-3xl hover:border-current cursor-default">
                            Continue With Phone Number
                        </div>
                    </div>
                    <div className="hr border-t border-gray-600 mx-auto my-4 w-3/4 "></div>
                    <div className="login-form ">
                        <form action="" className='leading-8 text-center'>
                            <div className=" px-auto">
                                <label htmlFor="name" className="pt-1.5"> Email or username</label> <br />
                                <input type="text" placeholder='Email or username' name='name'
                                    className=' w-80 bg-zinc-900 py-1 px-3 border border-slate-500 rounded ' /> <br />

                                <label htmlFor="password" className="pt-1.5">Password</label> <br />
                                <input type="password" placeholder='Password' name='password'
                                    className=' w-80 bg-zinc-900 py-1 px-3 border border-slate-500 rounded ' /><br />

                            </div>


                            <div className="remember my-3 flex items-center gap-x-2 justify-center">
                                <label class="switch ">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <span className='text-sm' >Remember me</span>
                            </div>

                            <button type="submit" className='text-black bg-green-500 my-3 px-6 py-2 w-full
                        rounded-3xl font-bold hover:scale-105' >Log In</button>
                        </form>
                        <div className="link text-center">
                            <span className="underline hover:text-green-500 cursor-pointer">Forgot your password?</span>
                        </div>
                    </div>
                    <div className="hr border-t border-gray-600 mx-auto my-4 w-3/4 "></div>
                    <div className="go-to-signup">
                        <span>
                            Don't have an account? <Link className='underline hover:text-green-500 text-md' >Sign up for Spotify</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login