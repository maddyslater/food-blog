import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheet.css'
import { addPost } from './services/datastore'

function App() {
  const [count, setCount] = useState(0);

  const createNewPost = (event) => {
    const fields = {
      name: "Test1",
    }
    addPost(fields);
    console.log('we made it');
  }

  return (
    <>
      <div>
        <body>
          <div className="home-container">
            <h1 onClick={createNewPost} className="home-title">We're Hungry.</h1>
            <h3 className="home-subtitle">Come along on our food adventures</h3>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
