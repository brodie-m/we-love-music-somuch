import React, {useState} from 'react'
import { Carousel, Modal } from 'react-bootstrap'
import MadSongsModal from './MadSongsModal'
import MmFoodSongsModal from './MmFoodSongsModal'


export default function Slider() {
    const [showMad, setShowMad] = useState(false)
    const [showFood, setShowFood] = useState(false)

    const handleCloseFood = () => setShowFood(false)
    const handleCloseMad = () => setShowMad(false)
    const handleOpenFood = () => setShowFood(true)
    const handleOpenMad = () => setShowMad(true)
    return (
        <Carousel variant="dark" className = "w-50 text-dark" fade="true">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg"
                    alt="First slide"
                    onClick={()=>handleOpenFood()}
                />
                <Carousel.Caption>
                    <h3>MM.. FOOD</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                <Modal show={showMad} onHide={handleCloseMad}>
                <MadSongsModal handleClose={handleCloseMad}/>
            </Modal>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.png"
                    alt="Second slide"
                    onClick={()=>handleOpenMad()}
                />
                <Carousel.Caption>
                    <h3>Madvillainy</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                <Modal show={showFood} onHide={handleCloseFood}>
                <MmFoodSongsModal handleClose={handleCloseFood}/>
            </Modal>
            </Carousel.Item>
            
           
        </Carousel>

    )
}
