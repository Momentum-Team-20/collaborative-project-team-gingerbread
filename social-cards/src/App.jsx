import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState(null);
  // const [token, setToken] = useLocalStorageState("Token", "");
  const isAuthenticated = token !== null;
  const [cards, setCards] = useState([]);

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
    console.log(token);
  }

  console.log('showing token outside of Auth: ', token);
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setToken={setToken} />
      {/* <Navbar token={token} setToken={setToken} /> */}
      <Routes>
        <Route
          path='/'
          element={<LandingPage isAuthenticated={isAuthenticated} />} />
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
        {/* <Route
            path='newCard'
            element={<NewCard token={token} />} /> */}
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


  );

};

export default App;
