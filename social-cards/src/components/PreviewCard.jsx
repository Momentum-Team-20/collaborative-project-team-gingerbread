import { useState } from 'react'
import axios from 'axios'

const PreviewCard = ({font, frontText, backText, uploadImage, backgroundColor }) => {
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
    <div className='backTextDisplay'>{`${backText}`}</div>
    </div>  
    )
}


export default PreviewCard


