import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import FollowUser from './FollowUser';
import FrontOfCard from './FrontOfCard';
import BackOfCard from './BackOfCard';

const Profile = ({ isAuthenticated, token }) => {

    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
    const [flip, setFlip] = useState(false)
    const [expanded, setExpanded] = useState(false);
    const [showFollowers, setShowFollowers] = useState([]);
    const navigate = useNavigate();

    const flipCard = (e) => {
        setFlip(!flip)
    }

    const handleFollowerListExpandedClick = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        axios
            .get("https://social-cards.fly.dev/api/users/followers", {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                console.log("hello", response.data.results)
                setShowFollowers(response.data.results);
                setCount(response.data.count);
            });
    }, [token]);

    // let count = isFollowing.length [for follower count number]



    //api for cards/me {PROFILE page}
    useEffect(() => {
        
        axios
        .get("https://social-cards.fly.dev/api/cards/me/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => {
                console.log(res)
                setCards(res.data)
            })
    }, [])

return (
    <>
        <section>
        <button onClick={handleFollowerListExpandedClick}>
                    {expanded ? "Hide Following:" : "Show Following" } </button>
                    
                        {expanded && (
                            <div className="followerList">
                            {showFollowers.map((follower) => (
                                <div key={follower.id}>
                                {follower.username}
                                </div>))}
                            </div>   
                             )}
        </section>
        <div className='flex flex-wrap flex-col md:flex-row gap-4'>
            <div className="border my-4">
                <Link to={{ pathname: '/newCard' }} >
                    <svg className='flex new-card ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" >
                        <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
                    </svg>
                </Link>
            </div>
            {cards.map((card) => {
                return (
                    <>
                        <div className='cardContainer' onClick={flipCard}>
                            <div> 
                            {(!flip) && <FrontOfCard
                                key={card.id}
                                font={card.font}
                                frontText={card.front_text}
                                uploadImage={card.imageURL}
                                backgroundColor={card.background_color}
                                token={token}
                                creator={card.creator}
                                creatorID={card.creator_id}
                            />}
                            </div>
                            {flip && <div><BackOfCard
                                key={card.id}
                                font={card.font}
                                backText={card.back_text}
                                uploadImage={card.imageURL}
                                backgroundColor={card.background_color}
                                token={token}
                                creator={card.creator}
                                creatorID={card.creator_id}
                            />
                            </div>}
                            <Link key={card.id} to={`/editCard/${card.id}`}>
                                <button>Edit Card</button>
                            </Link>
                        </div>
                    </>
                );
            })}
        </div >
    </>
)}


export default Profile;