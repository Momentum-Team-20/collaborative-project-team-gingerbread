import { useState } from 'react'
import axios from 'axios'

const FrontOfCard = ({font, frontText, uploadImage, backgroundColor }) => {
    return (
    <div className="frontCardPreview" style={{
        backgroundColor : backgroundColor,
        fontFamily : font
    }
        }>
        {`Front text goes here:
        ${font}
        ${backgroundColor}`}
    <div className='frontTextDisplay'>{`${frontText}`}</div>
    </div>  
    )
}


export default FrontOfCard


