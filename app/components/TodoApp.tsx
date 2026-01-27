import { useState } from "react"
import AddButton from "./AddButton"
import TodoList from "./TodoList"

type Todo = {
  id: string
  text: string
  done: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <AddButton onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}
