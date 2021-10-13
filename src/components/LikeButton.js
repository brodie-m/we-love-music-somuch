import React, {useState, useEffect, useCallback} from 'react'
import { Button } from 'react-bootstrap'

export default function LikeButton() {
    const [liked, setLiked] = useState(false)
    const likeButtonHandler = useCallback(
        () => {
            setLiked(liked => !liked)
        }
    )
    
    const likedClass = 'likedClass'
    const notLikedClass = 'notLikedClass'

    return (
        
        <Button className = {liked ? likedClass : notLikedClass} onClick = {likeButtonHandler}>

            <i class="far fa-thumbs-up"></i>
        </Button>
    )
}
// 
//