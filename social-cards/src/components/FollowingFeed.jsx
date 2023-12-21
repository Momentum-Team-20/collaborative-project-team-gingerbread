import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";
import FollowUser from "./FollowUser";

const FollowingFeed = ({ token }) => {
    const [isFollowing, setIsFollowing] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get("https://social-cards.fly.dev/api/users/followed", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((results) => {
                console.log(
                    "this is followers results in following feed",
                    results.data.results
                );
                setIsFollowing(results.data.results);
            });

        axios.get("https://social-cards.fly.dev/api/cards").then((results) => {
            console.log(
                "this is cards results in Following feed",
                results.data.results
            );
            setCards(results.data.results);
        });
    }, [token]);

    const isUserFollowing = (creatorID) => {
        return isFollowing.some((user) => user.id === creatorID)
    }

    // remove after card component implemented
    const [flip, setFlip] = useState(false)
    const flipCard = (e) => {
        setFlip(!flip)
    }


    return (
        <>
            <h1 className="text-5xl text-white-900 dark:text-white">Welcome to the Collective</h1>
            <div className="flex flex-wrap flex-col md:flex-row gap-4">
                {cards.map((card) => {
                    return (
                        <>
                            {isUserFollowing(card.creator_id) ?
                                <>
                                    <div className='cardContainer' onClick={flipCard}>
                                        <FollowUser
                                            token={token}
                                            creator={card.creator}
                                            creatorID={card.creator_id}
                                        />

                                        {(!flip) ?
                                            <FrontOfCard
                                                key={card.id}
                                                font={card.font}
                                                frontText={card.front_text}
                                                uploadImage={card.imageURL}
                                                backgroundColor={card.background_color}
                                                token={token}
                                                creator={card.creator}
                                                creatorID={card.creator_id}
                                            /> :
                                            <BackOfCard
                                                key={card.id}
                                                font={card.font}
                                                backText={card.back_text}
                                                uploadImage={card.imageURL}
                                                backgroundColor={card.background_color}
                                                token={token}
                                                creator={card.creator}
                                                creatorID={card.creator_id}
                                            />}
                                    </div>
                                </>
                                :
                                <p></p>

                            }
                        </>
                    )
                }
                )}

            </div>
        </>

    )
};


export default FollowingFeed;