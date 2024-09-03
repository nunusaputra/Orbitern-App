import React, { useEffect, useState } from 'react'
import DrawerMobile from '../../components/Drawer/DrawerMobile'
import Drawer from '../../components/Drawer/Drawer'
import MitraDashboard from '../../pages/CompanyDashboard/MitraDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/Action/LoginAction'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'

const MitraDashboardLayouts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        })
    }, [isLoading])

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <DrawerMobile />
                    <main className='w-full min-h-screen flex flex-row relative'>
                        <div className='hidden sm:block'>
                            <Drawer />
                        </div>
                        <section className='sm:ml-20 p-10 w-full'>
                            <MitraDashboard />
                        </section>
                    </main>
                </>
            )}
        </div>
    )
}

export default MitraDashboardLayouts
