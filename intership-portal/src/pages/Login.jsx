import React from 'react'
import AuthLayouts from '../layouts/AuthLayouts'
import FormLogin from '../Fragments/FormLogin'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <nav className='bg-white px-6 lg:px-24 py-3 sticky top-0'>
                <Link to={"/"}>
                    <div className='text-2xl font-extrabold'>Orbitern.</div>
                </Link>
            </nav>
            <AuthLayouts title="Login To Orbitern" type="Login">
                <FormLogin />
            </AuthLayouts>
        </>
    )
}

export default Login
