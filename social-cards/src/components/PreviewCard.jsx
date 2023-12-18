import { useState } from 'react'
import axios from 'axios'

const PreviewCard = ({ username, font, frontText, backText, uploadImage, backgroundColor }) => {

    return (
        <>
            <div className='header'>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <div className="text-sm font-medium text-white-900 truncate dark:text-white">
                    <p >Hello: {`${username}`}</p>
                </div>
            </div>

            <div className="previewDisplay">
                {`Here's your preview:
        ${font}
        ${backgroundColor}`}
                <div className='frontTextDisplay'>{`${frontText}`}</div>
                <div className='backTextDisplay'>{`${backText}`}</div>
            </div>
        </>
    )
}

export default PreviewCard