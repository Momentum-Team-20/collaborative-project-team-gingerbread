import { useState } from "react";
import FollowUser from "./FollowUser";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const Card = ({ id, token, creator, creator_id, font, front_text, back_text, imageURL, back_background_color, front_background_color }) => {

    const [flip, setFlip] = useState(false)
    const flipCard = (e) => {
        setFlip(!flip)
    }

    return (
        <>
            <div className='cardContainer' onClick={flipCard}>
                <FollowUser
                    token={token}
                    creator={creator}
                    creatorID={creator_id}
                />

                {(!flip) ?
                    <FrontOfCard
                        key={id}
                        font={font}
                        frontText={front_text}
                        uploadImage={imageURL}
                        front_background_color={front_background_color}
                        token={token}
                        creator={creator}
                        creatorID={creator_id}
                    /> :
                    <BackOfCard
                        key={id}
                        font={font}
                        backText={back_text}
                        uploadImage={imageURL}
                        back_background_color={back_background_color}
                        token={token}
                        creator={creator}
                        creatorID={creator_id}
                    />}
            </div>

        </>
    )
}

export default Card;