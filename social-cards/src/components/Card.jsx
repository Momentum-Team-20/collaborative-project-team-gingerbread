import { useState } from "react";
import FollowUser from "./FollowUser";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const Card = ({ id, token, creator, creator_id, font, front_text, back_text, imageURL, back_background_color, front_background_color, username }) => {

    const [flip, setFlip] = useState(false)
    const flipCard = (e) => {
        setFlip(!flip)
    }

    return (
        <>
            <div className='cardContainer' >
                <FollowUser
                    token={token}
                    creator={creator}
                    creator_id={creator_id}
                />
                <div onClick={flipCard}>
                    {(!flip) ?
                        <FrontOfCard
                            key={id}
                            font={font}
                            frontText={front_text}
                            uploadImage={imageURL}
                            front_background_color={front_background_color}
                            token={token}
                            creator={creator}
                            creator_id={creator_id}
                        /> :
                        <BackOfCard
                            key={id}
                            font={font}
                            backText={back_text}
                            uploadImage={imageURL}
                            back_background_color={back_background_color}
                            token={token}
                            creator={creator}
                            creator_id={creator_id}
                        />}
                </div>
            </div>
        </>
    )
}

export default Card;