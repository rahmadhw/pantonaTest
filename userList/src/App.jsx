import { useState } from 'react'

// import './App.css'
import NavigasiBar from './components/NavigasBar';
import UserList from './components/UserList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigasiBar />
      <UserList />
    </>
  )
}

export default App
