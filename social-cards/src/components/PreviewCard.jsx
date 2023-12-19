import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import FollowUser from "./FollowUser"

const PreviewCard = ({ font, frontText, backText, uploadImage, backgroundColor, creator, creatorID, token }) => {

    console.log('font: ', font)
    console.log('front_text: ', frontText)
    const styles = {
        backgroundColor: `${backgroundColor}`,
        fontFamily: `${font}, "sans-seriff"`
    }
    const [follow, setFollow] = useState(false);
    const navigate = useNavigate();

    const handleFollow = (creatorID) => {
        const followedUserId = parseInt(creatorID);

        axios
            .post("https://social-cards.fly.dev/api/follows/", {
                status: 1,
                followed_user: followedUserId,
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
            });
    };

    const handleUnfollow = (creatorID) => {

        axios.delete(`https://social-cards.fly.dev/api/unfollow/${creatorID}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => {
                navigate("/");
            })
    }


    console.log(`creator: ${creator}`)
    return (
        <div className='border'>
            <div className='header mt-2 flex flex-row mb-2 ' >
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 basis-1/5">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <div className="text-sm font-medium text-white-900 truncate dark:text-white basis-3/5 ml-2">
                    <p >{`${creator}`}</p>
                </div>
                <div>
                    {!follow ?
                        // follow symbol
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" onClick={() => handleFollow(creatorID)} className='basis-1/5'>
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                        </svg>
                        :
                        // check symbol
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" onClick={() => handleUnfollow(creatorID)}>
                            <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                        </svg>
                    }
                </div>
            </div>

            <div className={`${backgroundColor} previewDisplay mb-4`} style={styles}>
                {`Here's your preview:
                    ${font}
                    ${backgroundColor}`}
                <div className='frontTextDisplay' >front text: {`${frontText}`}</div>
                <div className='backTextDisplay'>back text: {`${backText}`}</div>
            </div >
        </div>
    )
}

export default PreviewCard