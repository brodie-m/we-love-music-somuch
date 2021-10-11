import React from 'react'
import {ListGroup} from 'react-bootstrap'
const songs = [	"The Illest Villains","Accordion","Meat Grinder",	"Bistro",	"Raid","America's Most Blunted",	"Sickfit"]

export default function MadSongsModal() {
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
