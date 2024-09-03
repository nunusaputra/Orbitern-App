import React, { useEffect, useState } from 'react'
import DrawerMobile from '../../components/Drawer/DrawerMobile'
import Drawer from '../../components/Drawer/Drawer'
import AddNewLoker from '../../pages/CompanyDashboard/AddNewLoker'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/Action/LoginAction'
import Loading from '../../components/Loading'

const AddNewLokerLayouts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (user && user.role !== "mitra") {
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
                            <AddNewLoker />
                        </section>
                    </main>
                </>
            )}
        </div>
    )
}

export default AddNewLokerLayouts
