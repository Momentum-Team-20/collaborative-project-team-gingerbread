import axios from "axios";
import { useState } from "react";


const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('username: ', username)
        console.log(`password: ${password}`)

        axios.post('https://social-cards.fly.dev/api/auth/token/login/', {
            username: username,
            password: password,
        })
            .then((res) => setAuth(username, res.data.auth_token))
            .then((res) => console.log(res))


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-controls">
                    <label htmlFor="username">username</label>
                    <input id='username' type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-controls">
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-submit">
                    <button type="submit">Log In</button>
                </div>
                <div>
                    {/* <button onClick={<Registration setAuth={setAuth} />}>Register</button> */}

                    {/* <Registration setAuth={setAuth} /> */}
                </div>

            </form>

        </>
    )

}

// const Registration = ({ setAuth }) => {




//     return (
//         <>
//             <form>

//             </form>
//         </>
//     )
// }




export default Login
