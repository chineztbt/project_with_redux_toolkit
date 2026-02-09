import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchUsers } from '../redux/userSlice';

const Home = () => {
const {list:users,status,error}=useSelector((state)=>state.users);
console.log(users,'users');

const dispatch = useDispatch() 
useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchUsers())
    }
}, [dispatch,status])

  return (
    <div className='container'>
    <h2>CRUD app avec redux toolkit</h2>
    <Link to='/add' className='btn btn-success my-3'>Ajouter</Link>
    <h3>Liste des utilisateurs</h3>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
             { users.map((user)=> (
             <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <Link to={`/edit/${user.id}`} className='btn btn-primary btn-sm'>Modifier</Link>
                <button className='btn btn-danger btn-sm ms-2'>Supprimer</button> 
                </td>
            </tr>
            )
        )}
        </tbody>
    </table>
    </div>
  )
}


export default Home
