import React from 'react'
import { Card } from 'react-bootstrap'

import './UserCard.css'

const UserCard = ({ user }) => {
  return (
    <Card className="mb-2"  >
      <Card.Header>{user.id}</Card.Header>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <span>{user.usermane}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCard
