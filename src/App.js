import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through': ''}}>
      {todo.text}
    </div>
  )
}

function TodoForm({ addToDo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return
    addToDo(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add ToDo!"onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ])

  const addToDo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addToDo={addToDo} />
      </div>
    </div>
  )
}

export default App