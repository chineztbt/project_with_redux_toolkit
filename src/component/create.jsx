import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addUsers({name,email}))
    navigate("/")
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add users</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name : </label>
            <input 
            type="text" 
            name='name'
            value={name} 
            placeholder='Enter your name'
            className='form-control'
            onChange={(e)=>setname(e.target.value)}
            required/>
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input 
            type="email" 
            name='email'
            value={email} 
            placeholder='Enter your email'
            className='form-control'
            onChange={(e)=>setemail(e.target.value)}
            required/>
          </div>
          <br />
          <button className='btn btn-info'>Send</button>
        </form>
      </div>
    </div>
  )
}
