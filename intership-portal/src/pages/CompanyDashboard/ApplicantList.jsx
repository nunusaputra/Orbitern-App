import React, { useEffect, useState } from 'react'
import Tables from '../../components/Tables'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicant } from '../../redux/Action/ApplicantAction'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import DataNotFound from '../../components/DataNotFound'
import Pagination from '../../components/Pagination'
import { IoSearchOutline } from 'react-icons/io5'
import blank from '../../assets/img/blank.png'

const ApplicantList = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { isLoading, applicant } = useSelector(state => state.app)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const [search, setSearch] = useState('')

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = Array.isArray(applicant) ? applicant.slice(firstPostIndex, lastPostIndex) : [];
    useEffect(() => {
        dispatch(getApplicant(user.token))
    }, [dispatch])

    return (
        <div className='px-4'>
            <div className='bg-slate-50 drop-shadow-lg rounded-lg p-4'>
                <div className=''>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg font-bold'>Applicant List</h1>
                        <p className='text-sm text-slate-500'>You can see and manage all the applicant here.</p>
                    </div>
                    <label htmlFor="" className='relative block mt-3'>
                        <span className='sr-only'>Search</span>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <IoSearchOutline className='w-5 h-5' />
                        </span>
                        <input type="text" name="search" onChange={e => setSearch(e.target.value)} placeholder="Search for anything..." className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:w-80' />
                    </label>
                </div>
                {/* Table Section */}
                <div className='mt-5'>
                    <Tables>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>No Phone</th>
                                <th>Applicant For</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr className=''>
                                    <td colSpan={50} className='text-center' style={{ height: '100px', verticalAlign: 'middle' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                            <HashLoader color='#ce231c' />
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                currentPost.length > 0 ? (
                                    currentPost.filter(item => (
                                        search.toLowerCase() === '' ? item : item.Mahasiswa.name.toLowerCase().includes(search.toLowerCase())
                                    )).length > 0 ? (
                                        currentPost.filter(item => (
                                            search.toLowerCase() === '' ? item : item.Mahasiswa.name.toLowerCase().includes(search.toLowerCase())
                                        )).map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={item.Mahasiswa.profile_pict === null ? blank : item.Mahasiswa.profile_pict}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item.Mahasiswa.name}</div>
                                                            <div className="text-sm opacity-50">{item.Mahasiswa.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {item.Mahasiswa.no_hp === null ? "No Data" : item.Mahasiswa.no_hp}
                                                </td>
                                                <td>{item.job.jobTitle}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <Link to={`/company-dashboard/applicant/${item.id}`}>
                                                        details
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className=''>
                                            <td colSpan={50} className='text-center' style={{ height: '100px', verticalAlign: 'middle' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                    <DataNotFound>
                                                        Your search result not found
                                                    </DataNotFound>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr className=''>
                                        <td colSpan={50} className='text-center' style={{ height: '100px', verticalAlign: 'middle' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <DataNotFound>
                                                    Not Report Submission
                                                </DataNotFound>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Tables>
                    {!isLoading && (
                        <Pagination
                            totalPost={applicant && applicant.length}
                            postPerPage={postPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ApplicantList
