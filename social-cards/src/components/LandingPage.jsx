import { useState } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = ({ isAuthenticated }) => {
    console.log('token in the landing page ', isAuthenticated)
    return (
        <>
            {!isAuthenticated ?
                <h1> Log in please</h1>
                :
                <h1> you have been logged in</h1>
                // :

            }
        </>
    )
}

export default LandingPage;