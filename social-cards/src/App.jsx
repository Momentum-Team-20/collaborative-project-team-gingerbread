import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CreateCard from './components/createCard';


function App() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useLocalStorageState("Token", "");
  const isAuthenticated = token !== "";
  const [cards, setCards] = useState([]);

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
    console.log(token);
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setToken={setToken} token={token} username={username} />
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

      </Routes >
    </>
  )
}

export default App
