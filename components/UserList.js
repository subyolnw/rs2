import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function UserList() {
  const [users, setusers] = useState([])

  const fetchusers = async () => {
    const res = await axios.get(URL)

    setusers(res.data)
  }

  useEffect(() => {
    fetchusers()
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
