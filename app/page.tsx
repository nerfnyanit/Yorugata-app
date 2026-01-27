"use client"

import SideBar from "./components/SideBar";
import TodoApp from "./components/TodoApp";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <TodoApp />
    </div>
    );
}
