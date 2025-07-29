import { useState } from 'react'
import './index.css'

export default function Typewriter() {
   let i=0;
  const [text,setText]=useState<string>('')
  const [disabled,setDisabled]=useState(false)
  const [textTypeWrite,setTextTypeWrite]=useState<string[]>([])
  const handleClick=()=>{
    if(!text|| disabled) return;
    setDisabled(true)
    setText('')
    setTextTypeWrite([])
    repeat()
  }
 
function repeat() {
  if(text.length>=i){
      setTextTypeWrite((t)=>[...t,text[i-1]])
      setTimeout(repeat,500);
    }else{
      setDisabled(false)
    }
  i++;
}
  return (
    <div className=' p-5'>
      <input className='w-2/7 border rounded-sm p-1' value={text} onChange={e=>setText(e.target.value) }/>
      <button className={`ml-5 border p-1 rounded-xl bg-gray-300 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handleClick}>Display with typewriter effect</button>
      {textTypeWrite ? <div className='flex flex-row '>
        
        {textTypeWrite}
      </div>:null}
    </div>
  )
}


