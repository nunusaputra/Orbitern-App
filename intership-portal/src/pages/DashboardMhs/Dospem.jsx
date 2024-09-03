import React from 'react'
import FormDospem from '../../Fragments/FormDospem'

const Dospem = () => {
    return (
        <div className='p-4 md:w-[60%] lg:w-[68%] lg:p-8'>
            <div className='border border-slate-300 rounded-md px-4 py-2'>
                <h1 className='text-lg font-bold'>Pengajuan Dosen Pembimbing</h1>
                <p className='text-sm text-slate-500'>You can apply for an internship supervisor here.</p>
                {/* Form Section */}
                <div className='mt-5'>
                    <FormDospem />
                </div>
            </div>
        </div>
    )
}

export default Dospem
