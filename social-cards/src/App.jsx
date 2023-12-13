import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import Login from './components/Login';
import Registration from './components/Registration';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState(null);
  const [cards, setCards] = useState([]);

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
    console.log(token);
  }


  return (
    <>
      <div className='App'>
        <Routes>
          {/* <Route
            path='/'
            element={<Gallery token={token} />} /> */}
          <Route
            path='/login'
            element={<Login setAuth={setAuth} />} />
          {/* <Route
            path='/profile'
            element={<Profile token={token} />} /> */}
          {/* <Route
            path='newCard'
            element={<NewCard token={token} />} /> */}
        </Routes>
      </div>
    </>


  );


  //   return (
  //     <>
  //       <h1>Social Cards</h1>
  //       <Login setAuth={setAuth} />
  //       {/* <Registration /> */}
  //     </>
  //   )
};

export default App;
