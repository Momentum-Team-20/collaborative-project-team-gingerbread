import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import FollowUser from './FollowUser';
import FrontOfCard from './FrontOfCard';
import BackOfCard from './BackOfCard';

const LandingPage = ({ isAuthenticated, token }) => {

    const [cards, setCards] = useState([]);
    const navigate = useNavigate();


    //api for cards/me {PROFILE page}
    useEffect(() => {
        axios
            .get(`https://social-cards.fly.dev/api/cards/me/`)
            .then((res) => {
                console.log(res.data.results)
                setCards(res.data.results)
            })
    }, [])
