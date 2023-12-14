import { useState, useEffect } from "react";
import axios from 'axios'


const CreateCard = ({token}) => {

//Form State
const [frontText, setFrontText] = useState('');
const [backText, setBackText] = useState('');
const [uploadImage, setUploadImage] = useState('');
const [backgroundColor, setBackgroundColor] = useState('');
const [font, setFont] = useState('');



//console.log('front text is', frontText)

    
//     const [cards, setCards] = useState([])
//     const [cardIndex, setCardIndex] = useState(0)
//     const [loading, setLoading] = useState(true)

// useEffect(() => {
//     axios
//         .get('', {
//             headers: {
//                 Authorization: `Token ${token}`,
//             },
//         })
//         .then((res) => {
            

//         })
// })

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
                <input type="text"/>
            </div>
            <div>
                <span>Upload an image</span>
                <input type="text"/>
            </div>
                <div>
                    <label htmlFor="color">Select a background color</label>
                    <input name="color" type="color" />
                </div>
                <div>
                    <label htmlFor="font">Choose a font</label>
                    <select name="font">
                        <option value="Ariel">Ariel</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
            </div>

            <div className="previewCard">
            <button type="button">Publish</button>
            </div>
            </div>
        </div>
    )
 

}

export default CreateCard