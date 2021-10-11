import React from 'react'
import {ListGroup, Modal} from 'react-bootstrap'

const songs = ["Beef Rapp","Hoe Cakes","Potholderz","One Beer","Deep Fried Frenz","Poo-Putt Platter","Fillet-O-Rapper","Gumbo","Fig Leaf Bi-Carbonate","Kon Karne","Guinnesses","Kon Queso","Rapp Snitch Knishes","Vomitspit","Kookies"]
const links = songs.map(song=> `https://open.spotify.com/search/${song.split(' ').join('%20')}`)
export default function MmFoodSongsModal() {
    return (
        <>
            <Modal.Header>
                <Modal.Title>Songs from MM.. FOOD</Modal.Title>
            </Modal.Header>
            <ListGroup>
                {songs.map((song,index) => (
                    <ListGroup.Item>
                        <a href={links[index]}>{song}</a>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

