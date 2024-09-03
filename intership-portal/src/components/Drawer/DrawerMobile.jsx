import { useAnimationControls, motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo-2.png'
import { IoIosArrowUp } from 'react-icons/io'
import DrawerLink from './DrawerLink'
import {
    BookmarkSquareIcon,
    BuildingOffice2Icon,
    ChartBarIcon,
    ChartPieIcon,
    DocumentCheckIcon,
    RectangleStackIcon,
    SpeakerWaveIcon,
    Square2StackIcon,
    UsersIcon,
} from "@heroicons/react/24/outline"
import { useSelector } from 'react-redux'

const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto" },
}

const containerVariants = {
    close: {
        height: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.1
        }
    },
    open: {
        height: "35rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.1
        }
    }
}

const DrawerMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useSelector(state => state.auth)

    const containerControls = useAnimationControls()

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isOpen])

    const handleClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <motion.nav
            variants={containerVariants}
            animate={containerControls}
            initial="close"
            className='bg-secondary flex flex-col z-10 gap-5 p-5 sticky top-0 left-0 w-full sm:hidden'
        >
            <div className='flex flex-row justify-between place-items-center'>
                <div className='flex w-10 h-10 bg-white rounded-md gap-3'>
                    <img src={logo} alt="" className='w-full' />
                    <p className='text-xl font-bold self-center text-white'>Orbitern</p>
                </div>
                <button className='w-12 h-12' onClick={handleClose}>
                    <IoIosArrowUp className={`text-3xl font-bold text-white mx-auto ${isOpen ? 'rotate-180' : ''} transition ease-in duration-200`} />
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="flex flex-col gap-5"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit={"hidden"}
                        transition={{ duration: 0.3 }}
                    >
                        {user && user.role === "admin" ? (
                            <>
                                <DrawerLink name="Dashboard" isOpen={isOpen} path={"/admin-dashboard"}>
                                    <ChartBarIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Account" isOpen={isOpen} path={"/admin-dashboard/create-account"}>
                                    <Square2StackIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Dosen Pembimbing" isOpen={isOpen} path={"/admin-dashboard/dosen-pembimbing"}>
                                    <DocumentCheckIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Laporan Magang" isOpen={isOpen} path={"/admin-dashboard/laporan-magang"}>
                                    <ChartPieIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Information" isOpen={isOpen} path={"/admin-dashboard/information"}>
                                    <SpeakerWaveIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Users" isOpen={isOpen} path={`/admin-dashboard/profile/${user && user.id}`}>
                                    <UsersIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                            </>
                        ) : (
                            <>
                                <DrawerLink name="Dashboard" isOpen={isOpen} path={"/company-dashboard"}>
                                    <ChartBarIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Internship" isOpen={isOpen} path={"/company-dashboard/internship"}>
                                    <BuildingOffice2Icon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Applicant" isOpen={isOpen} path={"/company-dashboard/applicant"}>
                                    <RectangleStackIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Logbook" isOpen={isOpen} path={"/company-dashboard/logbook"}>
                                    <BookmarkSquareIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                                <DrawerLink name="Users" isOpen={isOpen} path={`/company-dashboard/profile-company/${user && user.id}`}>
                                    <UsersIcon className="text-white min-w-8 w-8" />
                                </DrawerLink>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default DrawerMobile
