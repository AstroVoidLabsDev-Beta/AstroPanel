import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login(){
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:5000/api/auth/login', { emailOrUsername, password })
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    }catch(err){
      alert(err.response?.data?.message || 'Login failed')
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
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={submit} className="space-y-4">
            <input value={emailOrUsername} onChange={e=>setEmailOrUsername(e.target.value)} placeholder="Email or username" className="w-full p-3 rounded border" />
            <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 rounded border" />
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">Login</button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/register" className="underline">Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}