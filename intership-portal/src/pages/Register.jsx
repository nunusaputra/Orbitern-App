import React from 'react'
import AuthLayouts from '../layouts/AuthLayouts'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import FormRegister from '../Fragments/FormRegister'

const Register = () => {
    return (
        <>
            <nav className='bg-white px-6 lg:px-24 py-3 sticky top-0 z-10'>
                <Link to={"/"}>
                    <div className='text-2xl font-extrabold'>Orbitern.</div>
                </Link>
            </nav>
            <div className='py-10'>
                <AuthLayouts title="Registration Account" type="Register">
                    <FormRegister />
                </AuthLayouts>
            </div>
        </>
    )
}

export default Register
