import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setToken={setToken} token={token} username={username} />
      {/* <Navbar token={token} setToken={setToken} /> */}
      <Routes>
        <Route
          path='/'
          element={<LandingPage isAuthenticated={isAuthenticated} token={token} />} />
        {/* <Route
            path='/home'
          element={<Gallery token={token} />} /> */}
        <Route
          path='/registration'
          element={<Registration />} />
        <Route
          path='/login'
          element={<Login setAuth={setAuth} />} />
        {/* <Route
            path='/profile'
            element={<Profile token={token} />} /> */}
        <Route
          path='/newCard'
          element={<CreateCard token={token} username={username} />} />
        <Route
          path='/editCard/:card_id'
          element={<CreateCard token={token} username={username} />} />
        {/* <Route
          path='/logout'
          element={
            <PrivateRoute
              setToken={setToken}
              setUsername={setUsername}
              username={username}
            >
              <Logout setUsername={setUsername} setToken={setToken} />
            </PrivateRoute>
          } */}
        {/* ></Route> */}
      </Routes >
    </>
  )
}

export default App
