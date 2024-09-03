import React, { useState } from 'react'
import InputForm from '../element/InputForm/InputForm'
import Button from './Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import InputPassword from '../element/InputForm/InputPassword'

const FormChangePass = () => {
    const { id } = useParams()
    const { user } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        currentPassword: '',
        newPassword: '',
        confPassword: ''
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            user.role === 'admin' ?
                await axios.put(`${import.meta.env.VITE_API_URL_ADMIN}/change-pass/${id}`, input)
                : await axios.put(`${import.meta.env.VITE_API_URL_MITRA}/change-pass/${id}`, input)
            toast.success('Success Update Password')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            if (error.response) {
                const massage = error.response.data.message
                return toast.error(massage)
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <InputPassword
                    label={"Current Password"}
                    name={"currentPassword"}
                    id={"currentPassword"}
                    margin={"mb-6"}
                    value={input.currentPassword}
                    onChange={handleInput}
                />
                <InputPassword
                    label={"New Password"}
                    name={"newPassword"}
                    id={"newPassword"}
                    margin={"mb-6"}
                    value={input.newPassword}
                    onChange={handleInput}
                />
                <InputPassword
                    label={"Confirm New Password"}
                    name={"confPassword"}
                    id={"confPassword"}
                    margin={"mb-6"}
                    value={input.confPassword}
                    onChange={handleInput}
                />
                <div className='flex justify-end'>
                    <Button
                        styling='bg-[#CE231C] text-white'
                    >
                        {loading ? <HashLoader size={25} color='#fff' /> : 'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FormChangePass
