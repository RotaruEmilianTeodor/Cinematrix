import React, { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import useLocalStorage from '../context/useLocalStorage'

const StarRating = () => {
    const [rating, setRating] = useLocalStorage('ratingValue', null)
    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                <label>
                    <input type="radio" name="rating" value = {ratingValue} onClick = {() => setRating(ratingValue)}/>
                    <FaRegStar className = 'star' color = {ratingValue <= (hover || rating) ? 'ffc107' : 'white'} size ={30} onMouseEnter = {() => setHover(ratingValue)} onMouseLeave = {() => setHover(null)}></FaRegStar>
                </label>
                )
            })}
        </div>
    )
}

export default StarRating
