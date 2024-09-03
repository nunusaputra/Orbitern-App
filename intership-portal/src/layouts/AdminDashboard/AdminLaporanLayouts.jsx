import React, { useEffect, useState } from 'react'
import Drawer from '../../components/Drawer/Drawer'
import DrawerMobile from '../../components/Drawer/DrawerMobile'
import LaporanMagang from '../../pages/AdminDashboard/LaporanMagang'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/Action/LoginAction'
import Loading from '../../components/Loading'

const AdminLaporanLayouts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (user && user.role !== "admin") {
            navigate('/forbidden')
        }
    }, [user])

    useEffect(() => {
        dispatch(getUser())
        requestAnimationFrame(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        })
    }, [dispatch, isLoading])
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <DrawerMobile />
                    <main className='w-full min-h-screen'>
                        <div className='hidden sm:block'>
                            <Drawer />
                        </div>
                        <section className='sm:ml-20 sm:p-10'>
                            <LaporanMagang />
                        </section>
                    </main>
                </>
            )}
        </div>
    )
}

export default AdminLaporanLayouts
