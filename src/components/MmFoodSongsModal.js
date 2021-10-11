import React from 'react'
import {ListGroup} from 'react-bootstrap'

const songs = ["Beef Rapp","Hoe Cakes","Potholderz","One Beer","Deep Fried Frenz","Poo-Putt Platter","Fillet-O-Rapper","Gumbo","Fig Leaf Bi-Carbonate","Kon Karne","Guinnesses","Kon Queso","Rapp Snitch Knishes","Vomitspit","Kookies"]
export default function MmFoodSongsModal() {
    return (
        <ListGroup>
        {songs.map(song=> (
            <ListGroup.Item>
                {song}
            </ListGroup.Item>
        ))}
    </ListGroup>
    )
}

