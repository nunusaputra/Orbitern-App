import React from 'react'
import FormChangePass from '../../Fragments/FormChangePass'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

const ChangePassword = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <div className='px-4'>
      <div className='bg-slate-50 drop-shadow-xl rounded-md px-4 py-2'>
        <div>
          <Link to={user && user.role === 'admin' ? `/admin-dashboard/profile/${user.id}` : `/company-dashboard/profile-company/${user.id}`}>
            <div className='flex gap-2 mb-5 group underline-hover cursor-pointer relative sm:hover:font-bold w-[60%] lg:w-[20%] xl:w-[18%]'>
              <IoIosArrowRoundBack className='text-3xl group-hover:-rotate-45 transition ease-in-out duration-200' />
              <h1 className='text-sm self-center'>Back to previous page</h1>
            </div>
          </Link>
        </div>
        <h1 className='text-lg font-bold'>Change Password</h1>
        <div className='mt-3'>
          <FormChangePass />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
