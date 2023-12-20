import { useState, useEffect } from "react";
import axios from 'axios'
import FrontOfCard from "./FrontOfCard.jsx";
import BackOfCard from "./BackOfCard.jsx";

import { useParams } from 'react-router-dom';

const CreateCard = ({ token, username }) => {

    const { card_id } = useParams();

    //Form State
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');
    const [uploadImage, setUploadImage] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [backBackgroundColor, setBackBackgroundColor] = useState('');
    const [font, setFont] = useState('Rubik Doodle Shadow');
    const [flip, setFlip] = useState(false)
    let labelClassName = "block mb-2 text-sm font-medium text-white-900 dark:text-white text-left";
    let inputClassName = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-2";


    useEffect(() => {
        if (card_id) {
            const config = {
                headers: { Authorization: `Token ${token}` }
            };
            axios.get(`https://social-cards.fly.dev/api/cards/${card_id}/`).then((res) => {
                const { data } = res;
                setFrontText(data.front_text);
                setBackText(data.back_text);
                setUploadImage(data.imageURL);
                setFont(data.font)
                setBackgroundColor(data.background_color);
                setBackBackgroundColor(data.back_background_color);
            }, config);
        }

    }, [card_id])




    const selectFrontColor = (e) => {
        setBackgroundColor(e.target.value)
    }

    const selectBackColor = (e) => {
        setBackBackgroundColor(e.target.value)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const config = {
            headers: { Authorization: `Token ${token}` }
        };

        axios.delete(`https://social-cards.fly.dev/api/cards/${card_id}/`, config).then((res) => {
            console.log('deleted')
        })
    }

    const handlePublish = (e) => {
        e.preventDefault()
        const config = {
            headers: { Authorization: `Token ${token}` }
        };

        //if cardid exists - do edit (use PUT) https://social-cards.fly.dev/api/cards/23/
        //if cardid does not exist - do create (use post )
        if (card_id) {
            axios.put(`https://social-cards.fly.dev/api/cards/${card_id}/`, {
                "front_text": frontText,
                "back_text": backText,
                "imageURL": uploadImage,
                "background_color": backgroundColor,
                "back_background_color": backBackgroundColor,
                "font": font,
            }, config)
                .then((res) => console.log(res))
        } else {
            axios.post('https://social-cards.fly.dev/api/cards/', {
                "front_text": frontText,
                "back_text": backText,
                "imageURL": uploadImage,
                "background_color": backgroundColor,
                "back_background_color": backBackgroundColor,
                "font": font,
            }, config)
                .then((res) => console.log(res))
            // do create 
        }
    }

    console.log(flip, 'is flippe')
    const flipCard = (e) => {
        setFlip(!flip)
    }


    // console.log('front text is', frontText)


    return (
        <div>
            <div className="makeACard">
                <div className="sidebarOptions">
                    <div>
                        <span>Front Text</span>
                        <input type="text" value={frontText} onChange={(evt) => setFrontText(evt.target.value)} />
                    </div>
                    <div>
                        <span>Back Text</span>
                        <input type="text" value={backText} onChange={(evt) => setBackText(evt.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="color">Select a background color for the FRONT of your card</label>
                        <input value={backgroundColor} name="color" type="color" onChange={selectFrontColor} />
                    </div>
                    <label htmlFor="color">Select a background color for the BACK of your card</label>
                    <input value={backBackgroundColor} name="color" type="color" onChange={selectBackColor} />
                    <div>
                        <label htmlFor="font">Choose a font</label>
                        <select value={font} name="font" onChange={e => {
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
                <div className="PreviewContainer" onClick={flipCard}>
                    <div>
                        {(!flip) && <FrontOfCard
                            font={font}
                            frontText={frontText}
                            backgroundColor={backgroundColor}
                            token={token}
                        />}
                    </div>
                    {flip && <div>
                        <BackOfCard
                            font={font}
                            backText={backText}
                            backBackgroundColor={backBackgroundColor}
                        />
                    </div>
                    }
                </div>

                <button type="button" onClick={handlePublish}>Publish</button>
                {card_id && <button type="button" onClick={handleDelete}>Delete</button>}
            </div>
        </div>

    )


}





export default CreateCard