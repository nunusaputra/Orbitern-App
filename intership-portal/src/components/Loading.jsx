import React from 'react'
import logo from '../assets/img/logo-univ.png'
import { HashLoader } from 'react-spinners'
const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-60 h-60 flex items-center justify-center'>
                {/* <HashLoader color='#c3231c' size={100} className='self-center' /> */}
                <div className="loader">Everything, <span className='block'>Is Gonna</span> Be Okay 😊</div>
            </div>
        </div>
    )
}

export default Loading
