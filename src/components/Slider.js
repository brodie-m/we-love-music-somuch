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
                    <p>MF Doom described Mm..Food as a concept album "about the things you find on a picnic, or at a picnic table".[1] The album's titles and lyrics contain references to different foods, some with common metaphors and double entendres in the "street world" and the "nutritional realm".[2]</p>
                    <h3>Click to show songs</h3>
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
                    <p>The album was recorded between 2002 and 2004. Madlib created most of the instrumentals during a trip to Brazil in his hotel room using minimal amounts of equipment: a Boss SP-303 sampler, a turntable, and a tape deck.[1] Fourteen months before the album was released, an unfinished demo version was stolen and leaked onto the internet. Frustrated, the duo stopped working on the album and returned to it only after they had released other solo projects.</p>
                    <h3>Click to show songs</h3>
                </Carousel.Caption>
                <Modal show={showFood} onHide={handleCloseFood}>
                <MmFoodSongsModal handleClose={handleCloseFood}/>
            </Modal>
            </Carousel.Item>
            
           
        </Carousel>

    )
}
