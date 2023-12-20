import { useState } from 'react'
import axios from 'axios'

const BackOfCard = ({font, backText, backBackgroundColor }) => {
    return (
    <div className="backCardPreview" style={{
        backgroundColor : backBackgroundColor,
        fontFamily : font
    }
        }>
        {`Back text goes here:
        ${font}
        ${backBackgroundColor}`}
    <div className='backTextDisplay'>{backText}</div>
    </div>  
    )
}

export default BackOfCard