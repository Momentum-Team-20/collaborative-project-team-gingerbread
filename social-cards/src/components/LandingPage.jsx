import { useState, useEffect } from 'react';
import axios from 'axios';
import FrontOfCard from './FrontOfCard';
import { Link } from 'react-router-dom';
import FollowUser from './FollowUser';

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
            {!isAuthenticated ?
                <div>
                    <h1> Log in please</h1>
                    {cards.map((card) => {
                        return (<>
                        <FollowUser
                                    token={token}
                                    creator={card.creator}
                                    creatorID={card.creator_id}
                                />
                            <FrontOfCard
                                font={card.font}
                                frontText={card.frontText}
                                backText={card.backText}
                                backgroundColor={card.backgroundColor}
                                uploadImage={card.uploadImage}
                            />
                            <Link key={card.id} to={`/editCard/${card.id}`}>
                                <button>Edit Card</button>
                            </Link>
                            </>
                        );
                    })}
                </div>
                :
                <div>
                    <h1> you have been logged in</h1>
                    {cards.map((card) => {
                        return (<>
                        <FollowUser
                                    token={token}
                                    creator={card.creator}
                                    creatorID={card.creator_id}
                                />
                            <FrontOfCard
                                key={card.id}
                                font={card.font}
                                frontText={card.front_text}
                                backText={card.back_text}
                                backgroundColor={card.background_color}
                                uploadImage={card.imageURL}
                                token={token}
                                creator={card.creator}
                                creatorID={card.creator_id}
                            />
                            <Link key={card.id} to={`/editCard/${card.id}`}>
                                <button>Edit Card</button>
                            </Link>
                            </>
                        );
                    })}
                </div>
                // :
            }
        </>
    )
}

export default LandingPage;