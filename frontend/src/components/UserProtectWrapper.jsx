import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const[isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/users/login')
        }
        axios.get(`${import.meta.env.VITE_API_URL}/api/v1/users/Profile`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status === 200){
                setUser(response.data.user)
                setIsLoading(false)
                navigate('/cart')
                
            }
        }).catch((err)=>{
            console.log(err)
            localStorage.removeItem('token')
            navigate('/users/login')
        })
    },[token])
    if(isLoading){
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper
