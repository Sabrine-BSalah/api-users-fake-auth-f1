import React from 'react'

const Admin = ({ message }) => {
  return (
    <div>
      <h1>Welcome, this is the Admin Area page</h1>
      <h3>{message}</h3>
    </div>
  )
}

export default Admin