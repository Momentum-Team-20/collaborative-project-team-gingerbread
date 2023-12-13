import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState(null)
  const [cards, setCards] = useState([])

  const setAuth = (username, token) => {
    setUsername(username)
    setToken(token)
  }

  useEffect(() => {
    axios
      .get('https://social-cards.fly.dev/api/cards/me', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCards(res.data)
      })
  }, [token])

  return (
    <>
      <h1>Social Cards</h1>
      <Login setAuth={setAuth} />
      {/* <Login /> */}
    </>
  )
}

export default App
