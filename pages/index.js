import { useState } from 'react'

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.input}</li>
      ))}
    </ul>
  )
}

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('')
  const changeInput = event => setInput(event.target.value)

  const submit = () => onSubmit(input)

  return (
    <>
      <input type="text" onChange={changeInput} />
      <button onClick={submit}>Add</button>
    </>
  )
}

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = input => setTodos([{ id: +new Date(), input }, ...todos])

  return (
    <>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </>
  )
}

export default App
