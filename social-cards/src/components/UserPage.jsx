import { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewCard from './PreviewCard';

const UserPage = ({ isAuthenticated, token}) => {

    const [cards, setCards] = useState([]);
    console.log(token)

    useEffect(() => {
        axios
            .get("https://social-cards.fly.dev/api/cards/me/", {
              headers: {
                Authorization: `Token ${token}`,
              },


            })

            .then((res) => {
                console.log(res.data.results)
                setCards(res.data.results)
            })
    }, [token])

    return (
        <>
            
                <div>
                    <h1> Log in please</h1>
                    {cards.map((card) => {
                        return (
                            <PreviewCard
                                key={card.id}
                                font={card.font}
                                frontText={card.frontText}
                                backText={card.backText}
                                backgroundColor={card.background_color}
                                uploadImage={card.uploadImage}
                                creator={card.creator}
                            />
                        );
                    })}
                </div>
              
                
            
        </>
    )
}

export default UserPage;