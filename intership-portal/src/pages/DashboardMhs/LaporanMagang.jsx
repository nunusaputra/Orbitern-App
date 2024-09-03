import React from 'react'
import FormLaporan from '../../Fragments/FormLaporan'

const LaporanMagang = () => {
  return (
    <div className='p-4 md:w-[60%] lg:w-[68%] lg:p-8'>
      <div className='border border-slate-300 rounded-md px-4 py-2'>
        <h1 className='text-lg font-bold'>Laporan Magang</h1>
        <p className='text-sm text-slate-500'>Upload your magang report here.</p>
        {/* Form Section */}
        <div className='mt-5'>
          <FormLaporan />
        </div>
      </div>
    </div>
  )
}

export default LaporanMagang
