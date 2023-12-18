import axios from "axios";
import { useState, useEffect } from "react";

const FollowUser = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://social-cards.fly.dev/api/follows/`)
            .then((res) => {
                console.log(res.data.results)
                setCards(res.data.results)
            })
    };

    return (
        <>
            <div>

            </div>
        </>
    )

}