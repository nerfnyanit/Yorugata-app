"use client"

import { useRef, useState } from "react"

type useAddButtonReturn = {
  open: boolean
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  openInput: () => void
  addTodo: (onAdd: (text:string) => void) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useAddButton = ():useAddButtonReturn => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const openInput = () => {
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(),0)
  }

  const addTodo = (onAdd: (text: string) => void) => {
    if(!text.trim()) return
    onAdd(text)
    setText("")
    setOpen(false)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return {
    open,
    text,
    setText,
    inputRef,
    openInput,
    addTodo,
    handleChange
  }
}
