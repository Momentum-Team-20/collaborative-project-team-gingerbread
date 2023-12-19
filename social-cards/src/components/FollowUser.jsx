import axios from "axios";
import { useState, useEffect } from "react";

const FollowUser = ({ token }) => {

    const [follow, setFollow] = useState(false);

    const handleFollow = ({ token, creatorID }) => {
        axios
            .post("https://social-cards.fly.dev/api/follows/", {
                status: 1,
                followed_user: creatorID,
            },
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            )
            .then((results) => {
                console.log("this is follower results", results);
                setFollow(true)
            }, []);

        return (
            <>
                {follow ?
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                    </svg>
                }
            </>
        )
    };



    return (
        <>
            <div>

            </div>
        </>
    )

}

export default UnfollowUser = ({ token, followedUserPK }) => {

    const [unfollow, setUnfollowUser] = useState(false);

    useEffect(() => {
        axios.delete(`https://social-cards.fly.dev/api/unfollow/${followedUserPK}/`)
    })
}