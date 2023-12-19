import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FollowUser = ({ token, creator, creatorID }) => {

    const [isFollowing, setIsFollowing] = useState([]);
    const navigate = useNavigate();

    // get's list of followers
    useEffect(() => {
        axios
            .get("https://social-cards.fly.dev/api/users/followed", {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                // console.log("hello", response.data.results)
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
                // console.log("this is follower results", results);
                navigate("/");
                window.location.reload();
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
                window.location.reload();
            })
    }

    // checks to see if selected user is currently in following list
    const isUserFollowing = (creatorId) => {
        return isFollowing.some((user) => user.id === creatorId)
    }

    return (
        <div className='mt-4'>
            <div className='' >
                <div className='header flex my-2 '>
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex-none">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text-sm font-medium text-white-900 truncate dark:text-white flex grow ml-2">
                        <p >{`${creator}`}</p>
                    </div>
                    <div className='follow-icons flex-none'>
                        {!isUserFollowing(creatorID) ?
                            // follow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" onClick={() => handleFollow(creatorID)}>
                                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
                            </svg>
                            :
                            // delete/unfollow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" onClick={() => handleUnfollow(creatorID)} className='basis-1/5 ml-5'>
                                <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                            </svg>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUser;
