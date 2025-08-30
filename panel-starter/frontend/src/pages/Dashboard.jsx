import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard(){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:5000/api/auth/me', { headers: { Authorization: 'Bearer ' + token } })
        setUser(res.data.user)
      }catch(err){ console.error(err) }
    }
    fetch()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded bg-white shadow">Users<br/>{user?.username || '—'}</div>
        <div className="p-4 rounded bg-white shadow">Nodes<br/>0</div>
        <div className="p-4 rounded bg-white shadow">Servers<br/>0</div>
      </div>
    </div>
  )
}