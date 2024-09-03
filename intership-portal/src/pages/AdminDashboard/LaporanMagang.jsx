import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import Tables from '../../components/Tables'
import axios from 'axios'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'
import { FaTrashAlt } from 'react-icons/fa'
import DataNotFound from '../../components/DataNotFound'
import { foramterDate } from "../../utils/formaterDate"
import Pagination from '../../components/Pagination'
import { useSelector } from 'react-redux'

const LaporanMagang = () => {
    const { user } = useSelector((state) => state.auth)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const [search, setSearch] = useState('')

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = Array.isArray(list) ? list.slice(firstPostIndex, lastPostIndex) : [];

    useEffect(() => {
        setIsLoading(true)
        const getList = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL_ADMIN}/laporan`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                })
                setList(response.data.data)
            } catch (error) {
                if (error.response) {
                    const message = error.response.data.message
                    return message
                }
            } finally {
                setIsLoading(false)
            }
        }
        getList()
    }, [])
    return (
        <div className='px-4'>
            <div className='bg-slate-50 drop-shadow-xl rounded-lg p-4'>
                <div className='flex flex-col gap-2'>
                    <div className=''>
                        <h1 className='text-lg font-semibold'>Laporan Magang Mahasiswa</h1>
                        <p className='text-xs sm:text-sm'>You can see all student internship report here.</p>
                    </div>
                </div>
                <label htmlFor="" className='relative block mt-3'>
                    <span className='sr-only'>Search</span>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        <IoSearchOutline className='w-5 h-5' />
                    </span>
                    <input type="text" name="search" onChange={e => setSearch(e.target.value)} placeholder="Search for anything..." className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:w-80' />
                </label>
                <div className='mt-3'>
                    <Tables>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>NPM</th>
                                <th>Dosen Pembimbing</th>
                                <th>Created At</th>
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
                                        search.toLowerCase() === '' ? item : item.nama.toLowerCase().includes(search.toLowerCase())
                                    )).length > 0 ? (
                                        currentPost.filter(item => (
                                            search.toLowerCase() === '' ? item : item.nama.toLowerCase().includes(search.toLowerCase())
                                        )).map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item.nama}</div>
                                                            <div className="text-sm opacity-50">{item.Mahasiswa.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {item.npm}
                                                </td>
                                                <td>{item.dosen_pembimbing}</td>
                                                <td>{foramterDate(item.createdAt)}</td>
                                                <th className=''>
                                                    <div className='w-6 h-6 rounded-md bg-secondary text-white flex items-center cursor-pointer'>
                                                        <FaTrashAlt className='text-sm mx-auto' />
                                                    </div>
                                                </th>
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
                            totalPost={list.length}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            postPerPage={postPerPage}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LaporanMagang
