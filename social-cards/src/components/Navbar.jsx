import { Link, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import styled from "styled-components";

const Navbar = ({ isAuthenticated, setToken }) => {

    const navigate = useNavigate();
    // const Navbar = { isAuthenticated, setToken } => {
    console.log('navbar is showing');

    const handleLogout = () => {
        setToken("");
        navigate('/');
    };
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://st.depositphotos.com/1008709/4676/i/380/depositphotos_46768767-stock-illustration-hands-in-art-logo.jpg" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Collective</span>
                </a>
                <div className="flex items-center  rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(800) 867-5309</a>
                    <Link to="/registration">
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-3">Sign Up</button>
                    </Link>
                    <Link to="/newCard">
                        <button type="button">Make a new Card</button>
                    </Link>
                    {!isAuthenticated ?
                        // {token === "" ?
                        < Link to="/login">
                            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                        </Link> :
                        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleLogout}>Log Out</button>
                        // :


                    }
                </div>
            </div>
        </nav >
    )
};


export default Navbar;