import Link from 'next/link'

import useFetch from '../../../lib/useFetch'

export default function TodoList() {
  const todos = useFetch('/todos')

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
