import { useState } from 'react';
import axios from 'axios';
import { Route, Link, useNavigate } from 'react-router-dom';
import PasswordChecklist from "react-password-checklist";


const Registration = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    let labelClassName = "block mb-2 text-sm font-medium text-white-900 dark:text-white text-left";
    let inputClassName = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-2";


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form');
        console.log(username);
        console.log(password);
        axios
            .post('https://social-cards.fly.dev/api/auth/users/', {
                email: email,
                username: username,
                password: password,
            })
            .then(navigate(`/login`))
            // .then((res) => console.log(res))
            .catch((err) => setError(err.response.data.non_field_errors))


        return (
            <>
                {error && <p style={{ color: 'red' }}> {error} </p>}
                <h1>Register Account for Free!</h1>
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-controls">
                        <label htmlFor="email-field" className={labelClassName} >Email: </label>
                        <input
                            id="email-field"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClassName}
                        />
                    </div>
                    <div className="form-controls">
                        <label htmlFor="username-field" className={labelClassName}>Choose a Username: </label>
                        <input
                            id="username-field"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className={inputClassName}
                        />
                    </div>
                    <div className="form-controls">
                        <label htmlFor="password-field" className={labelClassName}>Choose Password: </label>
                        <input
                            id="password-field"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClassName}
                        />
                    </div>
                    <div className="form-controls">
                        <label htmlFor="password-again-field" className={labelClassName}>Enter Password Again: </label>
                        <input
                            id="password-again-field"
                            type="password"
                            onChange={(e) => setPasswordAgain(e.target.value)}
                            className={inputClassName}
                        />
                    </div>
                    <div className="form-submit">
                        <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mt-2">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Register Account
                            </span>
                        </button>
                    </div>

                    <PasswordChecklist
                        rules={["minLength", "specialChar", "number", "capital", "match"]}
                        minLength={8}
                        value={password}
                        valueAgain={passwordAgain}
                        onChange={(isValid) => { }}
                    />
                </form>
            </>
        );
    };
};
export default Registration;