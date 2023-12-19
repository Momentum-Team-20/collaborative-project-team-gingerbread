import { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewCard from './PreviewCard';
import FollowUser from './FollowUser';
import Sidebar from './Sidebar'

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
            <div className='flex flex-wrap flex-col md:flex-row gap-4'>
                {cards.map((card) => {
                    return (
                        <>
                            <div className='cardContainer'>
                                <FollowUser
                                    token={token}
                                    creator={card.creator}
                                    creatorID={card.creator_id}
                                />
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
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default LandingPage;