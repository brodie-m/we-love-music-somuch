import React from 'react'
import { ListGroup } from 'react-bootstrap'
const fans = localStorage.getItem('MF-DOOM-data') 
const fansData = JSON.parse(fans) || ['placeholder','something']

function Fans() {
    return (
        <div className="w-20 d-flex flex-column justify-content-center ms-4">
            <h1 className="text-white">Fan Comments!</h1> 
            <ListGroup>
                {fansData.map((data, index) => (
                    <ListGroup.Item>
                    <div className="d-block justify-content-between">
                        <h1>{data[0]}</h1>
                        <h2>{data[1]}</h2>
                        <p>{data[2]}</p>
                        
                    </div>

                </ListGroup.Item>
                ))}
            </ListGroup>
                
            </div>
            )
        
    
}

export default Fans
