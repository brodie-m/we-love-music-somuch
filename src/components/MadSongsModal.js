import React from 'react'
import {ListGroup, Modal} from 'react-bootstrap'
const songs = [	"The Illest Villains","Accordion","Meat Grinder",	"Bistro",	"Raid","America's Most Blunted",	"Sickfit", 	"Rainbows",
"Curls", "Do Not Fire!" ,	"Money Folder",	"Shadows of Tomorrow",	"Operation Lifesaver aka Mint Test","Figaro","Hardcore Hustle","Strange Ways","Fancy Clown",
"Eye","Supervillain Theme",	"All Caps","Great Day","Rhinestone Cowboy"]

export default function MadSongsModal() {
    return (
            <>
            <Modal.Header>
                    <Modal.Title>Songs from Madvillainy</Modal.Title>
                </Modal.Header>
          <ListGroup>
            {songs.map(song=> (
                <ListGroup.Item>
                    {song}
                </ListGroup.Item>
            ))}
        </ListGroup>  
        </>
        
    )
}
