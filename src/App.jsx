import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

import {useEffect,useState} from 'react'

function App() {

  return (
    <main className="bg-slate-900 w-full h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
      
    </main>
  )
}

export default App