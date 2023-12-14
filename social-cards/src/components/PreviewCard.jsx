import { useState } from 'react'
import axios from 'axios'

const PreviewCard = ({font, frontText, backText, uploadImage, backgroundColor }) => {
    return (<div className="previewDisplay">
        {`Here's your preview: ${font} ${frontText}`}
    </div>)
}

export default PreviewCard