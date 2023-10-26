import React, { useState } from 'react'
import logo from "../Assets/media/white-logo.svg"
import "../Assets/css/style.css"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from 'react-query'
import axios from 'axios'
import Cookies from "js-cookie"
import baseUrl from '../BaseUrl'

const Signup = () => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState( {
        name: "",
        email: "",
        password: "",
        gender: "",
    } )

    const mutation = useMutation( userData => {
        return axios.post( `${ baseUrl }user/signup`, userData );
    }, {
        onSuccess: ( data ) => {
            console.log( "successfully", data )
            Cookies.set( "theme", data?.data?.userToken )
            navigate( '/' );
            setUserData( {
                name: "",
                email: "",
                password: "",
                gender: "",
            } )
        }
    } )
    return (
        <>
            <div className=' login-page w-full' >
                <header className='flex items-center p-5 w-full bg-black' >
                    <div className="logo-parent">
                        <img src={ logo } alt="" className='header-logo' />
                    </div>
                    SPOTIFY
                </header>
                <div className="login-page  bg-black my-6  max-w-full sm:max-w-xl mx-auto py-5 px-9 rounded-xl ">
                    <h1 className='my-8 text-4xl font-bold text-center' >SignUp to Spotify</h1>
                    <div className="hr border-t border-gray-600 mx-auto my-4 w-3/4 "></div>
                    <div className="login-form ">
                        <form action="" className='leading-8 text-center'
                            onSubmit={ ( e ) => {
                                e.preventDefault();
                                if ( userData?.email && userData?.password ) {
                                    mutation.mutate( userData )
                                    console.log( "login API called" )
                                }
                            } }
                        >
                            <div className=" px-auto">
                                <label htmlFor="name" className="pt-1.5"></label>
                                <br />
                                <input type="text" placeholder='Username' name='name'
                                    className=' w-80 bg-zinc-900 py-1 px-3 border border-slate-500 rounded '
                                    value={ userData?.name }
                                    onChange={ ( e ) => { setUserData( { ...userData, name: e.target.value } ) } }
                                /> <br />
                                <label htmlFor="name" className="pt-1.5"></label>
                                <br />
                                <input type="text" placeholder='Email' name='name'
                                    className=' w-80 bg-zinc-900 py-1 px-3 border border-slate-500 rounded '
                                    value={ userData?.email }
                                    onChange={ ( e ) => { setUserData( { ...userData, email: e.target.value } ) } }
                                /> <br />

                                <label htmlFor="password" className="pt-1.5"></label> <br />
                                <input type="password" placeholder='Password' name='password'
                                    className=' w-80 bg-zinc-900 py-1 px-3 border border-slate-500 rounded '
                                    value={ userData?.password } onChange={ ( e ) => { setUserData( { ...userData, password: e.target.value } ) } }
                                /><br />
                                {/*  */ }
                                <div className="flex flex-wrap justify-center gap-4 my-6">
                                    <div className="flex items-center mr-4">
                                        <input id="male" type="radio" value="male" name="gender" className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 checked:bg-green-500 focus:ring-green-500"
                                            checked={ userData?.gender === "male" }
                                            onChange={ ( e ) => { setUserData( { ...userData, gender: e.target.value } ) } }
                                        />
                                        <label for="male" className="ml-2 text-sm font-medium cursor-pointer">Male</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id="female" type="radio" value="female" name="gender" className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300  focus:ring-green-500"
                                            checked={ userData?.gender === "female" }
                                            onChange={ ( e ) => { setUserData( { ...userData, gender: e.target.value } ) } } />
                                        <label for="female" className="ml-2 text-sm font-medium cursor-pointer">Female</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id="others" type="radio" value="other" name="gender" className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300  focus:ring-green-500"
                                            checked={ userData?.gender === "other" }
                                            onChange={ ( e ) => { setUserData( { ...userData, gender: e.target.value } ) } } />
                                        <label for="others" className="ml-2 text-sm font-medium cursor-pointer">Something else</label>
                                    </div>
                                </div>
                                {/*  */ }
                                <div className="remember my-3 flex items-center gap-x-2 sm:ml-24">
                                    <label class="switch ">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                    <span className='text-sm select-none'>Remember me</span>
                                </div>
                            </div>
                            <button type="submit" className='text-black bg-green-500 my-3 px-6 py-2 w-full
                        rounded-3xl font-bold hover:scale-105'
                            >Signup In</button>
                        </form>
                        <div className="link text-center">
                            <span className="underline hover:text-green-500 cursor-pointer">Forgot your password?</span>
                        </div>
                    </div>
                    <div className="hr border-t border-gray-600 mx-auto my-4 w-3/4 "></div>
                    <div className="go-to-signup">
                        <span>
                            Don't have an account? <Link className='underline hover:text-green-500 text-md' to={ `/login` } >Login to Spotify</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup