import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos'

export default function TodoList() {
  const [todos, settodos] = useState([])

  const fetchtodos = async () => {
    const res = await axios.get(URL)

    settodos(res.data)
  }

  useEffect(() => {
    fetchtodos()
  }, [])

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
