import React, { useEffect, useState } from 'react'
import Drawer from '../../components/Drawer/Drawer'
import DrawerMobile from '../../components/Drawer/DrawerMobile'
import AdminProfile from '../../pages/AdminDashboard/AdminProfile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../redux/Action/LoginAction'
import MitraProfile from '../../pages/CompanyDashboard/MitraProfile'
import Loading from '../../components/Loading'

const MitraProfileLayouts = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

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
                    <main className='w-full min-h-screen '>
                        <div className='hidden sm:block'>
                            <Drawer />
                        </div>
                        <section className='sm:ml-20 sm:p-10'>
                            <MitraProfile />
                        </section>
                    </main>
                </>
            )}
        </div>
    )
}

export default MitraProfileLayouts
