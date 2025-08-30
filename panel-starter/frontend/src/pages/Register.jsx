import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) =>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password })
      alert('Registered! Now login.')
      navigate('/')
    }catch(err){
      alert(err.response?.data?.message || 'Register failed')
    }
  }

  return (
    <div>
      <div className="bg-video-wrap">
        <video autoPlay loop muted playsInline>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className="container-center p-6">
        <div className="w-full max-w-md bg-white/90 dark:bg-slate-900/80 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={submit} className="space-y-4">
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full p-3 rounded border" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded border" />
            <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 rounded border" />
            <button type="submit" className="w-full p-3 bg-green-600 text-white rounded">Register</button>
          </form>
          <div className="mt-4 text-center">
            <a href="/" className="underline">Back to login</a>
          </div>
        </div>
      </div>
    </div>
  )
}