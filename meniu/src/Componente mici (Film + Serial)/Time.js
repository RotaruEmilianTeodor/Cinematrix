import React, { useState } from 'react'
import { AiOutlineClockCircle } from "react-icons/ai"

const Time = () => {
    let time = new Date().toLocaleTimeString()

    const [Ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(updateTime, 1000)

    return (
        <div>
            <h5 style = {{color: 'darkgray'}}><AiOutlineClockCircle style = {{marginTop: '-5px', marginRight: '5px'}}></AiOutlineClockCircle>{time}</h5>
        </div>
    )
}

export default Time
