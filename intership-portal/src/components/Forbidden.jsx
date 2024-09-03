import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../redux/Action/LoginAction'

const Forbidden = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="font-semibold text-secondary text-7xl">403</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Forbidden
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, you do not have access to this page
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    {user && user.role === "mitra" ? (
                        <Link
                            to={"/company-dashboard"}
                            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        >
                            Go back home
                        </Link>
                    ) : (
                        <Link
                            to={"/admin-dashboard"}
                            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        >
                            Go back home
                        </Link>
                    )}
                    <Link href="/contact" className="text-sm font-semibold text-gray-900">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Forbidden
