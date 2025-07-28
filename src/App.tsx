import { useState } from 'react'
import './index.css'

function App() {
  const [text,setText]=useState<string>('')
  const [textTypeWrite,setTextTypeWrite]=useState<string[]>()
  const handleClick=()=>{
    setTextTypeWrite(text.split(''))
    setText('')
  }

  return (
    <div className=' p-5'>
      <input className='w-2/7 border rounded-sm p-1' value={text} onChange={e=>setText(e.target.value) }/>
      <button className='ml-5 border p-1 rounded-xl bg-gray-300 cursor-pointer' onClick={handleClick}>Display with typewriter effect</button>
      {textTypeWrite ? <div className='flex flex-row '>
        
        {textTypeWrite.map((t)=>{
          return <span>{t}</span>
        })}
      </div>:null}
    </div>
  )
}

export default App
