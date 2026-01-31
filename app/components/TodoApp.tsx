import { useEffect, useState } from "react"
import AddButton from "./AddButton"
import TodoList from "./TodoList"

type Todo = {
  id: string
  text: string
  done: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  // 初回レンダリングでlocalStorageから読み込む
  useEffect(() => {
    const saved = localStorage.getItem("todos")
    if(saved) {
      setTodos(JSON.parse(saved))
    }
  },[])
  // todosが変わるたびに localStorageに保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

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
    <div className="relative">
      <div className="fixed bottom-12 right-12">
      <AddButton onAdd={handleAdd} />
      </div>
      
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}
