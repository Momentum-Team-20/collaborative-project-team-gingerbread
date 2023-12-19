import { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewCard from './PreviewCard';

const LandingPage = ({ isAuthenticated, token }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get(`https://social-cards.fly.dev/api/cards/`)
            .then((res) => {
                console.log(res.data.results)
                setCards(res.data.results)
            })
    }, [])

    return (
        <>
            <div>
                {cards.map((card) => {
                    return (
                        <PreviewCard
                            key={card.id}
                            font={card.font}
                            frontText={card.front_text}
                            backText={card.back_text}
                            backgroundColor={card.background_color}
                            uploadImage={card.uploadImage}
                            token={token}
                            creator={card.creator}
                            creatorID={card.creator_id}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default LandingPage;