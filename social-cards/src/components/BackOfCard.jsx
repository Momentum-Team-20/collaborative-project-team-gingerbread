import { useState } from 'react'
import axios from 'axios'

const BackOfCard = ({ font, backText, uploadImage, backgroundColor }) => {

    return (
        // <div className="backCardPreview" style={{
        //     backgroundColor: backgroundColor,
        //     fontFamily: font
        // }
        // }>
        //     {`Back text goes here:
        // ${font}
        // ${backgroundColor}`}
        //     <div className='backTextDisplay'>{backText}</div>
        // </div>

        <div className="content back-card" style={{
            backgroundColor: backgroundColor,
            fontFamily: font,
        }}>
            {`Back text goes here: ${font} ${backgroundColor}`}
            <div>{backText}</div>
        </div>
    )
}

export default BackOfCard