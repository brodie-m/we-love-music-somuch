import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'


export default function Slider() {
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)
    return (
        <Carousel variant="dark" className = "w-50 text-dark" fade="true">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg"
                    alt="First slide"
                    onClick={()=>handleOpen()}
                />
                <Carousel.Caption>
                    <h3>MM.. FOOD</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.png"
                    alt="Second slide"
                    onClick={()=>handleOpen()}
                />
                <Carousel.Caption>
                    <h3>Madvillainy</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
