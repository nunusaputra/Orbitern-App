import React, { useEffect } from 'react'
import { IoIosStar } from "react-icons/io";
import Cards from '../../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getApply, getJob } from '../../redux/Action/ApplyJobAction';
import { HashLoader } from 'react-spinners';
import DataNotFound from '../../components/DataNotFound';
import { IoLocationSharp } from 'react-icons/io5';
import { FaMoneyCheck } from 'react-icons/fa';
import { PiBagFill } from 'react-icons/pi';

const color = {
    "applied": "bg-blue-500",
    "accepted": "bg-green-500",
    "rejected": "bg-third",
}

const Dashboard = () => {
    const dispatch = useDispatch()
    const { isLoading, applied } = useSelector(state => state.jobMhs)
    const { user } = useSelector(state => state.loginMhs)

    useEffect(() => {
        dispatch(getApply(user.token))
    }, [dispatch])

    return (
        <div className='p-4 md:w-[60%] lg:w-[68%] lg:p-8'>
            <div className='bg-neutral-500 rounded-lg drop-shadow-lg px-8 py-6'>
                <h1 className='text-2xl font-bold text-white'>Hallo, {user && user.name} !</h1>
                <p className='text-md mb-10 text-white'>These are your internship statistics, keep up the good work.</p>
                <div className='flex flex-col lg:flex-row gap-4 flex-wrap justify-between bg-white px-4 lg:px-6 py-4 rounded-lg'>
                    <div className='lg:w-[30%] flex gap-2 justify-between border-b-2 border-slate-400 lg:block lg:border-none'>
                        <div className='flex gap-2 lg:justify-between lg:border-b-2 lg:border-slate-400'>
                            <h1 className='text-md lg:text-lg font-semibold'>Total Applied</h1>
                            <IoIosStar className='text-lg mt-1' />
                        </div>
                        <h1 className='text-md lg:text-lg'><span className='text-lg lg:text-2xl font-bold'>{10}</span> Applied</h1>
                    </div>
                    <div className='lg:w-[30%] flex gap-2 justify-between border-b-2 border-slate-400 lg:block lg:border-none'>
                        <div className='flex gap-2 lg:justify-between lg:border-b-2 lg:border-slate-400'>
                            <h1 className='text-md lg:text-lg font-semibold'>Total Accepted</h1>
                            <IoIosStar className='text-lg mt-1' />
                        </div>
                        <h1 className='text-md lg:text-lg'><span className='text-lg lg:text-2xl font-bold'>10</span> Accepted</h1>
                    </div>
                    <div className='lg:w-[30%] flex gap-2 justify-between border-b-2 border-slate-400 lg:block lg:border-none'>
                        <div className='flex gap-2 lg:justify-between lg:border-b-2 lg:border-slate-400'>
                            <h1 className='text-md lg:text-lg font-semibold'>Total Rejected</h1>
                            <IoIosStar className='text-lg mt-1' />
                        </div>
                        <h1 className='text-md lg:text-lg'><span className='text-lg lg:text-2xl font-bold'>10</span> Rejected</h1>
                    </div>

                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>Internship Status</h1>
                <div className='mt-3 grid grid-cols-1 gap-4 xl:grid-cols-2 '>
                    {isLoading ? (
                        <div className='col-span-full mx-auto'>
                            <HashLoader size={50} color='#ce231c' />
                        </div>
                    ) : (
                        applied && applied.length > 0 ? (
                            applied.map(item => (
                                <div className='bg-[#F5F5F5] px-2 py-2 rounded-md drop-shadow-lg sm:flex sm:justify-between mb-2' key={item.id}>
                                    <div className='flex gap-2'>
                                        <div className='w-20 bg-white border-slate-300 rounded-md flex px-1'>
                                            <img src={item.User.profile === null ? "https://via.placeholder.com/150"
                                                : item.User.profile} alt={item.User.name} className='self-center'
                                            />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold'>{item.job.jobTitle}</h1>
                                            <div className='flex gap-2 flex-wrap'>
                                                <div className='flex gap-1'>
                                                    <IoLocationSharp className='text-sm mt-1' />
                                                    <h2 className='text-sm'>{item.User.alamat}</h2>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <FaMoneyCheck className='text-sm mt-1' />
                                                    <h2 className='text-sm'>{item.job.salary.toLocaleString('id-ID')}</h2>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <PiBagFill className='text-sm mt-1' />
                                                    <h2 className='text-sm'>{item.job.jobType}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`text-white px-4 py-1 rounded-lg mt-2 text-center font-semibold sm:h-8 self-center ${color[item.status]}`}>{item.status}</div>
                                </div>
                            ))
                        ) : (
                            <DataNotFound>
                                No Internship Applied
                            </DataNotFound>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
