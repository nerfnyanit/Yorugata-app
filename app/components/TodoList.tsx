type Todo = {
  id: string
  text: string
  done: boolean
}

type TodoListProps = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="mt-8 space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            <span className={todo.done ? "line-through text-gray-400" : ""}>
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:underline"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  )
}
