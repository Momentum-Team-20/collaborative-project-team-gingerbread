import { useState, useEffect } from "react";
import axios from 'axios'
import Card from "./Card.jsx";

import { useParams } from 'react-router-dom';

const CreateCard = ({ token, username }) => {

    const { card_id } = useParams();

    //Form State
    const [front_text, setFrontText] = useState('');
    const [back_text, setBackText] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [front_background_color, setFront_background_color] = useState('');
    const [back_background_color, setBack_background_color] = useState('');
    const [creator, setCreator] = useState('');
    const [creator_id, setCreator_id] = useState(0);
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
                setImageURL(data.imageURL);
                setFont(data.font)
                setFront_background_color(data.background_color);
                setBack_background_color(data.back_background_color);
                setCreator(data.creator)
                setCreator_id(data.creator_id)
            }, config);
        }

    }, [card_id])




    const selectFrontColor = (e) => {
        setFront_background_color(e.target.value)
    }

    const selectBackColor = (e) => {
        setBack_background_color(e.target.value)
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
                "front_text": front_text,
                "back_text": back_text,
                "imageURL": imageURL,
                "background_color": front_background_color,
                "back_background_color": back_background_color,
                "font": font,
            }, config)
                .then((res) => console.log(res))
        } else {
            axios.post('https://social-cards.fly.dev/api/cards/', {
                "front_text": front_text,
                "back_text": back_text,
                "imageURL": imageURL,
                "background_color": front_background_color,
                "back_background_color": back_background_color,
                "font": font,
            }, config)
                .then((res) => console.log(res))
            // do create 
        }
    }


    return (
        <div>
            <div className="makeACard">
                <div className="sidebarOptions">
                    <div>
                        <label className={labelClassName} htmlFor="front-text">Front Text</label>
                        <input type="text" name="front-text" value={front_text} onChange={(evt) => setFrontText(evt.target.value)} className={inputClassName} />
                    </div>
                    <div>
                        <label className={labelClassName} htmlFor="back-text">Back Text</label>
                        <input type="text" name='back-text' value={back_text} onChange={(evt) => setBackText(evt.target.value)} className={inputClassName} />
                    </div>
                    <div>
                        <label htmlFor="color">Select a background color for the FRONT of your card </label>
                        <input value={front_background_color} name="color" type="color" onChange={selectFrontColor} />
                    </div>
                    <label htmlFor="color">Select a background color for the BACK of your card </label>
                    <input value={back_background_color} name="color" type="color" onChange={selectBackColor} />
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
                <Card
                    // key={id}
                    font={font}
                    uploadImage={imageURL}
                    front_text={front_text}
                    back_text={back_text}
                    front_background_color={front_background_color}
                    back_background_color={back_background_color}
                    token={token}
                    creator={username}
                    creatorID={creator_id}
                />
                <button type="button" onClick={handlePublish}>Publish</button>
                {card_id && <button type="button" onClick={handleDelete}>Delete</button>}
            </div>
        </div>

    )


}





export default CreateCard