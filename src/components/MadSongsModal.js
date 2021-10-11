import React from 'react'
import { ListGroup, Modal, Button } from 'react-bootstrap'
const songs = ["The Illest Villains", "Accordion", "Meat Grinder", "Bistro", "Raid", "America's Most Blunted", "Sickfit", "Rainbows",
    "Curls", "Do Not Fire!", "Money Folder", "Shadows of Tomorrow", "Operation Lifesaver aka Mint Test", "Figaro", "Hardcore Hustle", "Strange Ways", "Fancy Clown",
    "Eye", "Supervillain Theme", "All Caps", "Great Day", "Rhinestone Cowboy"]
    const links = songs.map(song=> `https://open.spotify.com/search/${song.split(' ').join('%20')}`)
export default function MadSongsModal() {
    return (
        <>
            <Modal.Header>
                <Modal.Title>Songs from Madvillainy</Modal.Title>
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
