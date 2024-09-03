import React, { useEffect, useState } from 'react'
import Drawer from '../../components/Drawer/Drawer'
import DrawerMobile from '../../components/Drawer/DrawerMobile'
import AdminProfile from '../../pages/AdminDashboard/AdminProfile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../redux/Action/LoginAction'
import Loading from '../../components/Loading'

const AdminProfileLayouts = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(getUser())
        requestAnimationFrame(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        })
    }, [dispatch])

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <DrawerMobile />
                    <main className='w-full min-h-screen '>
                        <div className='hidden sm:block'>
                            <Drawer />
                        </div>
                        <section className='sm:ml-20 sm:p-10'>
                            <AdminProfile />
                        </section>
                    </main>
                </>
            )}
        </div>
    )
}

export default AdminProfileLayouts
