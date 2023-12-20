// import { useState, useEffect } from "react";
// import axios from 'axios'
// import previewCard from "./PreviewCard";
// import PreviewCard from "./PreviewCard";


// const CreateCard = ({ token, username }) => {

//     //Form State
//     const [front_text, setFrontText] = useState('');
//     const [back_text, setBackText] = useState('');
//     const [uploadImage, setUploadImage] = useState('');
//     const [background_color, setBackgroundColor] = useState('');
//     const [font, setFont] = useState('');
//     let labelClassName = "block mb-2 text-sm font-medium text-white-900 dark:text-white text-left";
//     let inputClassName = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-2";



//     const handlePublish = (e) => {
//         e.preventDefault()
//         const config = {
//             headers: { Authorization: `Token ${token}` }
//         };
//         axios
//             .post('https://social-cards.fly.dev/api/cards/', {
//                 "front_text": front_text,
//                 "back_text": back_text,
//                 "imageURL": uploadImage,
//                 "background_color": background_color,
//                 "font": font,
//             }, config)
//             .then((res) => console.log(res))
//     }

//     // console.log('front text is', frontText)


//     return (
//         <div>
//             <div className="makeACard">
//                 <div className="sidebarOptions">
//                     <div>
//                         <span className={labelClassName}>Front Text</span>
//                         <input type="text" onChange={(evt) => setFrontText(evt.target.value)} className={inputClassName} />
//                     </div>
//                     <div>
//                         <span className={labelClassName}>Back Text</span>
//                         <input type="text" onChange={(evt) => setBackText(evt.target.value)} className={inputClassName} />
//                     </div>
//                     <div>
//                         <span className={labelClassName}>Upload an image</span>
//                         <input type="text" className={inputClassName} />
//                     </div>
//                     <div>
//                         <label htmlFor="color" className={labelClassName}>Select a background color</label>
//                         <input name="color" type="color" />
//                     </div>
//                     <div>
//                         <label htmlFor="font" className={labelClassName}>Choose a font</label>
//                         <select name="font" onChange={e => {
//                             setFont(e.target.value)
//                         }} className={inputClassName}>
//                             <option value="Ariel"
//                             >Ariel</option>
//                             <option value="Helvetica">Helvetica</option>
//                             <option value="Times New Roman">Times New Roman</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="previewCard">
//                     <PreviewCard
//                         // username={username}
//                         font={font}
//                         frontText={front_text}
//                         backText={back_text}
//                         background_color={background_color}
//                         uploadImage={uploadImage}
//                         creator={this.creator}
//                         token={token}
//                     />
//                     <button type="button" onClick={handlePublish}>Publish</button>
//                 </div>
//             </div>
//         </div >
//     )


// }

import { useState, useEffect } from "react";
import axios from 'axios'
import FrontOfCard from "./FrontOfCard.jsx";
import BackOfCard from "./BackOfCard.jsx";

import { useParams } from 'react-router-dom';

const CreateCard = ({ token }) => {

    const { card_id } = useParams();


    //Form State
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');
    const [uploadImage, setUploadImage] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [font, setFont] = useState('Rubik Doodle Shadow');
    const [flip, setFlip] = useState(false)


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
            }, config);
        }

    }, [card_id])




    const selectColor = (e) => {
        setBackgroundColor(e.target.value)
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



        //if cardid exists - do edit (use patch) https://social-cards.fly.dev/api/cards/23/
        //if cardid does not exist - do create (use post )
        if (card_id) {
            axios.put(`https://social-cards.fly.dev/api/cards/${card_id}/`, {
                "front_text": frontText,
                "back_text": backText,
                "imageURL": uploadImage,
                "background_color": backgroundColor,
                "font": font,
            }, config)
                .then((res) => console.log(res))
        } else {
            axios.post('https://social-cards.fly.dev/api/cards/', {
                "front_text": frontText,
                "back_text": backText,
                "imageURL": uploadImage,
                "background_color": backgroundColor,
                "font": font,
            }, config)
                .then((res) => console.log(res))
            // do create 
        }
    }

    console.log(flip)
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
                        <span>Upload an image</span>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="color">Select a background color</label>
                        <input value={backgroundColor} name="color" type="color" onChange={selectColor} />
                    </div>
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
                            backText={backText}
                            backgroundColor={backgroundColor}
                            uploadImage={uploadImage}
                        />}
                    </div>
                    {flip && <div>
                        <BackOfCard
                            font={font}
                            backText={backText}
                            backgroundColor={backgroundColor}
                            uploadImage={uploadImage}
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