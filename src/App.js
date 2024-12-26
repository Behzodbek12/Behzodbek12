import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[smile, setSmile]= useState(null)
  const [label, setLaber]=useState("")
  const hondleEmojiClick= (emoji, lebel)=>{
    setSmile(emoji)
    setLaber(lebel)
  }
  return (
    <div className='wrapper'>
      <h1>Kayfiyatingizni tanlang!</h1>
    <div className='block'>
      <button onClick={()=>hondleEmojiClick("😂", "Quvonchli")}>😂</button>
      <button onClick={()=>hondleEmojiClick("😡", "Jahirdor")}>😡</button>
      <button onClick={()=>hondleEmojiClick("🥰", "Mehribon")}>🥰</button>
      <button onClick={()=>hondleEmojiClick("🥱", "Charchagon")}>🥱</button>
    </div>
    <div className='choose'>
      <h1>siz taladingiz!</h1>
      <p>
        {smile}
      </p>
      <h6>{label}</h6>
    </div>
    </div>
  )
}

export default App
