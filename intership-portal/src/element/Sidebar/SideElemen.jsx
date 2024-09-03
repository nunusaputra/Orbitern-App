import React from 'react'
import { FaElementor, FaHouseUser, FaUser } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { IoIosBookmarks } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const SideElemen = () => {
    return (
        <div className='flex flex-col gap-2 md:items-center md:mt-5'>
            <NavLink to="/dashboard"
                end
                className={({ isActive }) => `flex gap-2 w-full p-4 drop-shadow-md md:w-[80%] md:rounded-lg 
                ${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white cursor-pointer`}>
                <FaHouseUser className='text-xl mt-1' />
                <h1 className='text-lg font-semibold'>Dashboard</h1>
            </NavLink>
            <NavLink to={"/dashboard/profile"}
                className={({ isActive }) => `flex gap-2 w-full p-4 drop-shadow-md md:w-[80%] md:rounded-lg 
                ${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white cursor-pointer`}
            >
                <FaUser className='text-xl mt-1' />
                <h1 className='text-lg font-semibold'>Profile</h1>
            </NavLink>
            <NavLink to={"/dashboard/logbook"}
                className={({ isActive }) => `flex gap-2 w-full p-4 drop-shadow-md md:w-[80%] md:rounded-lg 
                ${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white cursor-pointer`}
            >
                <IoIosBookmarks className='text-xl mt-1' />
                <h1 className='text-lg font-semibold'>Logbook Magang</h1>
            </NavLink>
            <NavLink to={"/dashboard/laporan-magang"}
                className={({ isActive }) => `flex gap-2 w-full p-4 drop-shadow-md md:w-[80%] md:rounded-lg 
                ${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white cursor-pointer`}
            >
                <TbNotes className='text-xl mt-1' />
                <h1 className='text-lg font-semibold'>Laporan Magang</h1>
            </NavLink>
            <NavLink to={"/dashboard/dosen-pembimbing"}
                className={({ isActive }) => `flex gap-2 w-full p-4 drop-shadow-md md:w-[80%] md:rounded-lg 
                ${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white cursor-pointer`}
            >
                <FaElementor className='text-xl mt-1' />
                <h1 className='text-lg font-semibold'>Dosen Pembimbing</h1>
            </NavLink>
        </div>
    )
}

export default SideElemen
