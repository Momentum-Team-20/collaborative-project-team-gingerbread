import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Registration from './Registration';
import PreviewCard from './PreviewCard';

const LandingPage = ({ isAuthenticated }) => {

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
                        return (
                            <PreviewCard
                                key={card.id}
                                font={card.font}
                                frontText={card.frontText}
                                backText={card.backText}
                                backgroundColor={card.backgroundColor}
                                uploadImage={card.uploadImage}
                            />
                        );
                    })}
                </div>
                :
                <div>
                    <h1> you have been logged in</h1>
                    {cards.map((card) => {
                        return (
                            <PreviewCard
                                key={card.id}
                                font={card.font}
                                frontText={card.frontText}
                                backText={card.backText}
                                backgroundColor={card.backgroundColor}
                                uploadImage={card.uploadImage}
                            />
                        );
                    })}
                </div>
                // :

            }


            <h1 >hello</h1>
        </>
    )
}

export default LandingPage;