import React ,{useState} from 'react'
import { ListGroup } from 'react-bootstrap'
const fans = localStorage.getItem('MF-DOOM-data') 
const fansData = JSON.parse(fans) || ['placeholder','something']

function Fans({title}) {
    const [fansData,setFansData] = useState(JSON.parse(localStorage.getItem('MF-DOOM-data'))|| [['hello','test','test'
    ]])
    return (
        <div className="w-20 d-flex flex-column justify-content-center ms-4 change-width">
            
            <ListGroup id="fancomments">
            <h1 className="text-white">{title}</h1> 
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
