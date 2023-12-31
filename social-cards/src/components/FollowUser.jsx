import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FollowUser = ({ token, creator, creator_id, username }) => {

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
    const handleFollow = (creator_id) => {
        const followedUserId = parseInt(creator_id);

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
    const handleUnfollow = (creator_id) => {

        axios.delete(`https://social-cards.fly.dev/api/unfollow/${creator_id}`, {
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
    const isUserFollowing = (creator_id) => {
        return isFollowing.some((user) => user.id === creator_id)
    }

    return (
        <div className='mt-4'>
            <div className='card-content' >
                <div className='header flex my-2 '>


                    <div className='follow-icons'>
                        {!isUserFollowing(creator_id) ?
                            // follow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" onClick={() => handleFollow(creator_id)}>
                                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
                            </svg>
                            :
                            // delete/unfollow symbol
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" onClick={() => handleUnfollow(creator_id)} className='basis-1/5 ml-5'>
                                <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                            </svg>

                        }

                    </div>
                    <div className="media-content ml-2">
                        {/* <div className="media-left">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div> */}
                        <p className="title is-4">{creator}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUser;



