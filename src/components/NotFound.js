import React from 'react'
import {Container} from 'react-bootstrap'
import image from '../images/1462.jpeg'
export default function NotFound() {
    return (
        <Container className='d-flex flex-column'>
            <h1 className = 'text-white align-self-center'>Error 404: Not found</h1>
            <img src={image} className='scaled'/>
            
        </Container>
    )
}
