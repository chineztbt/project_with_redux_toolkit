import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
            <tr>
                <td>1</td>
                <td>TABTI</td>
                <td>chahinez@gmail.com</td>
                <Link to='/edit/:id' className='btn btn-primary btn-sm'>Modifier</Link>
                <button className='btn btn-danger btn-sm ms-2'>Supprimer</button>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Home
