

import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
 
  const handlechange = (event) => {
    setInputValue(event.target.value);

  }
  const handlesubmit = () => {
    alert(`hello ${inputValue}`)
  }

     return (
    <>
    <form className="App" onSubmit={handlesubmit}>
      <input className="input" onChange={handlechange} type='text' placeholder='name'/>
      <input className="input" onChange={handlechange} type='text' placeholder='Title'/>
      <input className="input" onChange={handlechange} type='text' placeholder='Text'/>
      <button className='button' type='submit' >send</button>
    </form>
    </>
  )
}

export default App
