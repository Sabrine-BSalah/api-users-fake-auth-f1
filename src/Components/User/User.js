import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import './User.css'
import avatar from '../../Assets/avatar.png'
import axios from 'axios'


const User = ({ match, history, location }) => {

    const [user, setUser] = useState({});
    // console.log(location.state.user)


    const getUser = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}`
            const response = await axios.get(url)
            await setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUser()
        return () => {
            setUser([])
        };
        // eslint-disable-next-line
    }, []);


    return (
        <div>
            <h1>Welcome, this is the User page</h1>
            <img src={avatar} alt="avatar" />
            <h2>{user.name}</h2>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
            <h5>{user.phone}</h5>
            <Button variant="info" className="go-back-btn"
                onClick={() => history.goBack()}
            // onClick={() => history.push('/users')}
            >Go Back</Button>
        </div>
    )
}

export default User
