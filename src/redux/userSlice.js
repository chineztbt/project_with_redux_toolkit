import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiUrl = 'http://localhost:3001/users'
export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
 const response= await fetch(apiUrl)
return await response.json()
})
export const addUsers = createAsyncThunk('users/addUsers',async(user)=>{
 const response= await fetch(apiUrl,{
    method:'POST',
    headers:{
        'Content-type':'application/json',
    },
     body: JSON.stringify(user)
 })
return await response.json()
})

const userSlice = createSlice({
    name : 'users',
    initialState : {
        list : [],
        error : null,
        status : 'idle' 
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
             state.status= 'loading' 
            // EnAttente
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status = 'succesful'
            state.list = action.payload
             // succes
        })
       .addCase(fetchUsers.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
       })
       .addCase(addUsers.fulfilled,(state,action)=>{
            state.status = 'succesful'
            state.list.push(action.payload)
             // succes
        })
       
    }
})
export default userSlice.reducer
// point darret
// les bebliotheques