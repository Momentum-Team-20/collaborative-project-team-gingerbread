import { useState, useEffect } from "react";
import axios from 'axios'
import previewCard from "./PreviewCard";
import PreviewCard from "./PreviewCard";


const CreateCard = ({token}) => {

//Form State
const [frontText, setFrontText] = useState('');
const [backText, setBackText] = useState('');
const [uploadImage, setUploadImage] = useState('');
const [backgroundColor, setBackgroundColor] = useState('');
const [font, setFont] = useState('Rubik Doodle Shadow');


const selectColor = (e) => {
    setBackgroundColor(e.target.value)
}


const handlePublish = (e) => {
    e.preventDefault()
    const config = {
        headers: { Authorization: `Token ${token}` }
    };
    axios  
        .post('https://social-cards.fly.dev/api/cards/', {
            "front_text": frontText,
            "back_text": backText,
            "imageURL": uploadImage,
            "background_color": backgroundColor,
            "font": font,
        }, config)
        .then((res) => console.log(res) )
}

// console.log('front text is', frontText)


    return (
        <div>
            <div className="makeACard">
            <div className="sidebarOptions">
            <div>
                <span>Front Text</span>
                <input type="text"  onChange={(evt) => setFrontText(evt.target.value)}/>
            </div>
            <div>
                <span>Back Text</span>
                <input type="text" onChange={(evt) => setBackText(evt.target.value)}/>
            </div>
            <div>
                <span>Upload an image</span>
                <input type="text"/>
            </div>
                <div>
                    <label htmlFor="color">Select a background color</label>
                    <input name="color" type="color" onChange={selectColor} />
                </div>
                <div>
                    <label htmlFor="font">Choose a font</label>
                    <select name="font" onChange={e => {
                        setFont(e.target.value)
                    }}>
                        <option value="Rubik Doodle Shadow">Rubik Doodle Shadow</option>
                        <option value="Open Sans">Open Sans</option>
                        <option value="Bebas Neue">Bebas Neue</option>
                        <option value="Playfair Display">Playfair Display</option>
                        <option value="Roboto">Roboto</option>

                    </select>
                </div>
            </div>

            <div className="previewCard">
                <PreviewCard 
                font={font}
                frontText={frontText}
                backText={backText}
                backgroundColor={backgroundColor}
                uploadImage={uploadImage}
                />
            <button type="button" onClick={handlePublish}>Publish</button>
            </div>
            </div>
        </div>
    )

        
}






export default CreateCard