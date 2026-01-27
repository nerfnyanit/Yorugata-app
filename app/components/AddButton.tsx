"use client"

import { useAddButton } from "../hooks/useAddButton"

type AddButtonReturn = {
    onAdd: (text:string) => void
}

export default function AddButton({ onAdd }:AddButtonReturn) {
  const {
    open,
    text,
    setText,
    inputRef,
    openInput,
    addTodo,
    handleChange
  } = useAddButton()

  return (
    <div className="mt-8 text-center">
      {!open ? (
        <button
          onClick={openInput}
          className="
            text-4xl font-light
            text-indigo-500
            hover:scale-110
            transition
          "
        >
          ＋
        </button>
      ) : (
        <div className="flex gap-2 justify-center">
          <input
            ref={inputRef}
            value={text}
            onChange={handleChange}
            onKeyDown={(e) =>
              e.key === "Enter" && addTodo(onAdd)
            }
            placeholder="今夜やること..."
            className="
              px-3 py-2 w-64
              border rounded-lg
              focus:outline-none focus:ring
            "
          />
          <button
            onClick={() => addTodo(onAdd)}
            className="
              px-4 rounded-lg
              bg-indigo-500 text-white
            "
          >
            追加
          </button>
        </div>
      )}
    </div>
  )
}
