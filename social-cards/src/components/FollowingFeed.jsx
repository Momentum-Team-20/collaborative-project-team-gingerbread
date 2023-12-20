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

    console.log("This is following feed");
    return (
        <>
            <h1 className="instagreetTitle">Following Feed</h1>
            {isFollowing.map((user) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div >
                        {cards.map((card) => {
                            if (user.username === card.creator)
                                return (
                                    <>
                                        <FollowUser
                                            token={token}
                                            creator={card.creator}
                                            creatorID={card.creator_id}
                                        />

                                        <FrontOfCard
                                            key={card.id}
                                            font={card.font}
                                            frontText={card.front_text}
                                            uploadImage={card.imageURL}
                                            backgroundColor={card.background_color}
                                            token={token}
                                            creator={card.creator}
                                            creatorID={card.creator_id}
                                        />
                                        <BackOfCard
                                            key={card.id}
                                            font={card.font}
                                            backText={card.back_text}
                                            uploadImage={card.imageURL}
                                            backgroundColor={card.background_color}
                                            token={token}
                                            creator={card.creator}
                                            creatorID={card.creator_id}
                                        />
                                    </>
                                );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default FollowingFeed;