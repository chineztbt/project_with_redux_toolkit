import React, { useState } from 'react'

const Update = () => {
  const [uname, setuname] = useState('') 
  // cntrl+espace
   const [umail, setuemail] = useState('')
  return (
   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update users</h3>
        <form action="">
          <div>
            <label htmlFor="name">Name : </label>
            <input 
            type="text" 
            name='name'
            value={uname} 
            placeholder='Enter your name'
            className='form-control'
            onChange={(e)=>setuname(e.target.value)}
            required/>
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input 
            type="email" 
            name='email'
            value={umail} 
            placeholder='Enter your email'
            className='form-control'
            onChange={(e)=>setuemail(e.target.value)}
            required/>
          </div>
          <br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
    
  )
}

export default Update
