import { useState } from 'react';
import axios from 'axios';
import { Route, Link, useNavigate } from 'react-router-dom';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


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
    };

    return (
        <>
            {error && <p style={{ color: 'red' }}> {error} </p>}
            <form onSubmit={handleSubmit}>
                <div className="form-controls">
                    <label htmlFor="email-field">Email: </label>
                    <input
                        id="email-field"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-controls">
                    <label htmlFor="username-field">Username: </label>
                    <input
                        id="username-field"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-controls">
                    <label htmlFor="password-field">Password: </label>
                    <input
                        id="password-field"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-submit">
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </>
    );
};

export default Registration;