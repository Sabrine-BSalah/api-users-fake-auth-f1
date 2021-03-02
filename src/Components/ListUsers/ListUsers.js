import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './ListUsers.css'
import UserCard from '../UserCard/UserCard'
import Loading from '../Loading/Loading'


const ListUsers = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to get list of users
  const getUsers = () => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => { setUsers(json); setIsLoading(false) })
      .catch(error => console.log(`This is an error ${error}`))
  }

  useEffect(() => {
    getUsers()
  }, []);


  return (

    <div>
      <h1>Welcome, this is the Users List page</h1>
      
      {<div className="users-list" >
          {!isLoading ?
            users.map(user =>
              <Link
                // to={`/users/user/${user.id}`}
                to={{ pathname: `/users/user/${user.id}`, state: { user: user } }}
                key={user.id} style={{ margin: '2%' }}
              >
                <UserCard user={user} />
              </Link>
            )
            : <Loading />}
        </div>
      }
    </div>
  )
}

export default ListUsers
