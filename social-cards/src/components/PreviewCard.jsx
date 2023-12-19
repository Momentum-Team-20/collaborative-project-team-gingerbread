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
    const [isFollowing, setIsFollowing] = useState([]);
    const navigate = useNavigate();

    // get's list of followers
    useEffect(() => {
        axios
            .get("https://social-cards.fly.dev/api/users/followed", {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                console.log("hello", response.data.results)
                setIsFollowing(response.data.results);
            });
    }, [token]);

    // handles user clicking follow button. adds selected user to followers list and posts to api
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
                navigate("/");
                // window.location.reload();
                // setIsFollowing(true)
            });
    };

    // handles unfollowing user. removes selected user from followers list and deletes from DB
    const handleUnfollow = (creatorID) => {

        axios.delete(`https://social-cards.fly.dev/api/unfollow/${creatorID}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => {
                // setIsFollowing(false)
                navigate('/');
                // window.location.reload();
            })
    }

    const isUserFollowing = (creatorId) => {
        return isFollowing.some((user) => user.id === creatorId)
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
                    {/* {!isUserFollowing(creatorID) ? (
                        <button
                            onClick={() => handleFollow(creatorID)}
                            className='follow-button'
                        >
                            Follow
                        </button>
                    ) : (
                        <button
                            onClick={() => handleUnfollow(creatorID)}
                            className='unfollow-button'
                        >
                            Unfollow
                        </button>
                    )}
                </div> */}
                    <div>
                        {!isUserFollowing(creatorID) ?
                            // follow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" onClick={() => handleFollow(creatorID)} className='basis-1/5 ml-5'>
                                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                            </svg>
                            :
                            // delete/unfollow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" onClick={() => handleUnfollow(creatorID)} className='basis-1/5 ml-5'>
                                <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
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
        </div >
    )
}

export default PreviewCard;