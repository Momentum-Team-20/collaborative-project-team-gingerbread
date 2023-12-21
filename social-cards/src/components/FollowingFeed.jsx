import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";

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



    return (
        <>
            <h1 className="text-5xl text-white-900 dark:text-white">Welcome to the Collective</h1>
            <div className="flex flex-wrap flex-col md:flex-row gap-4">
                {cards.map((card) => {
                    return (
                        <>
                            {isUserFollowing(card.creator_id) ?
                                <Card
                                    key={card.id}
                                    font={card.font}
                                    uploadImage={card.imageURL}
                                    front_text={card.front_text}
                                    back_text={card.back_text}
                                    front_background_color={card.background_color}
                                    back_background_color={card.back_background_color}
                                    token={token}
                                    creator={card.creator}
                                    creator_id={card.creator_id}

                                />
                                :
                                <></>

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