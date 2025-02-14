import React, { useState } from 'react'

const App = () => {
  let [bg,changebg] = useState("black")
  let st= "border-2 border-black p-1 rounded-lg text-2xl";
  return (
    <>
    <div className='h-screen grid items-end justify-center body' style={{backgroundColor:bg}}>
          <ul className='text-white flex justify-around m-8 p-5 border-4 w-3xl rounded-2xl bg-indigo-300 border-black'>
            <li className={`${st} bg-red-500`} onClick={()=>{changebg("red")}}>Red</li>
            <li className={`${st} bg-blue-600`} onClick={()=>{changebg("blue")}}>Blue</li>
            <li className={`${st} bg-green-500`} onClick={()=>{changebg('green')}}>Green</li>
            <li className={`${st} bg-white text-black`} onClick={()=>{changebg("white")}}>White</li>
            <li className={`${st} bg-black`} onClick={()=>{changebg("black")}}>Black</li>
            <li className={`${st} bg-orange-500`} onClick={()=>{changebg("orange")}}>orange</li>
            <li className={`${st} bg-yellow-300`} onClick={()=>{changebg("yellow")}}>Yellow</li>
          </ul>  
    </div>
    </>
  )
}
export default App
