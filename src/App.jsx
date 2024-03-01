import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef=useRef(null);

const generatePassword = useCallback(() => {
  let newPassword = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%&'()*+,-./:;<=>?@";
  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    newPassword += str.charAt(char);
  }
  setPassword(newPassword);
}, [length, numberAllowed, charAllowed]);



useEffect(() => {
  generatePassword();
  console.log(password,"password");
},[length, numberAllowed, charAllowed])

  return (
    <>
      <div>
        <h1 className="text-center bg-yellow-400 mt-4 p-4 ">
          Password Generator
        </h1>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="mt-10 p-10 w-128 h-64 bg-yellow-200 flex items-center justify-center">
          <input
            type=""
            className="bg-gray-300 m-4 p-4 border-2 border-black rounded-lg"
            placeholder="password"
            name="password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="bg-gray-300 m-4 p-4 border-2 border-black rounded-lg" >
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
        <input
          type="range"
          className="cursor-pointer "
          placeholder="password"
          min={6}
          max={20}
          name=""
          value={length}
          onChange={(e)=>setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1 m-4 p-4">
        <input
          type="checkbox"
          className="cursor-pointer "
          placeholder="password"
          defaultChecked={numberAllowed}
          min={6}
          max={20}
          name=""
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 m-4 p-4">
        <input
          type="checkbox"
          className="cursor-pointer "
          placeholder="password"
          defaultChecked={charAllowed}
          min={6}
          max={20}
          name=""
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
        />
        <label htmlFor="number">Characters</label>
      </div>
      </div>
     
    </>
  );}


export default App
