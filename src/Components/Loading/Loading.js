import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div>
            <Spinner animation="border" variant="info"
                style={{ marginTop: '10%', width: "200px", height: '200px' }} />
        </div>
    )
}

export default Loading
