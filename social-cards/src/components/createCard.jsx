import { useState, useEffect } from "react";
import axios from 'axios'
import previewCard from "./PreviewCard";
import PreviewCard from "./PreviewCard";


const CreateCard = ({ token, username }) => {

    //Form State
    const [front_text, setFrontText] = useState('');
    const [back_text, setBackText] = useState('');
    const [uploadImage, setUploadImage] = useState('');
    const [background_color, setBackgroundColor] = useState('');
    const [font, setFont] = useState('');
    let labelClassName = "block mb-2 text-sm font-medium text-white-900 dark:text-white text-left";
    let inputClassName = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-2";



    const handlePublish = (e) => {
        e.preventDefault()
        const config = {
            headers: { Authorization: `Token ${token}` }
        };
        axios
            .post('https://social-cards.fly.dev/api/cards/', {
                "front_text": front_text,
                "back_text": back_text,
                "imageURL": uploadImage,
                "background_color": background_color,
                "font": font,
            }, config)
            .then((res) => console.log(res))
    }

    // console.log('front text is', frontText)


    return (
        <div>
            <div className="makeACard">
                <div className="sidebarOptions">
                    <div>
                        <span className={labelClassName}>Front Text</span>
                        <input type="text" onChange={(evt) => setFrontText(evt.target.value)} className={inputClassName} />
                    </div>
                    <div>
                        <span className={labelClassName}>Back Text</span>
                        <input type="text" onChange={(evt) => setBackText(evt.target.value)} className={inputClassName} />
                    </div>
                    <div>
                        <span className={labelClassName}>Upload an image</span>
                        <input type="text" className={inputClassName} />
                    </div>
                    <div>
                        <label htmlFor="color" className={labelClassName}>Select a background color</label>
                        <input name="color" type="color" />
                    </div>
                    <div>
                        <label htmlFor="font" className={labelClassName}>Choose a font</label>
                        <select name="font" onChange={e => {
                            setFont(e.target.value)
                        }} className={inputClassName}>
                            <option value="Ariel"
                            >Ariel</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Times New Roman">Times New Roman</option>
                        </select>
                    </div>
                </div>

                <div className="previewCard">
                    <PreviewCard
                        // username={username}
                        font={font}
                        frontText={front_text}
                        backText={back_text}
                        background_color={background_color}
                        uploadImage={uploadImage}
                        creator={this.creator}
                    />
                    <button type="button" onClick={handlePublish}>Publish</button>
                </div>
            </div>
        </div >
    )


}





export default CreateCard