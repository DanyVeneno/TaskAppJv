import TaskCard from "./TaskCard"
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {


const {tasks} = useContext(TaskContext)

    if (tasks.length === 0){
      return <h1 className="text-neutral-600 text-4xl font-bold text-center  ">NO HAY TAREAS POR HACER</h1>
    }
  return (
      <div className="grid grid-cols-1 gap-2 auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-4 ">
          {tasks.map((task) =>(
            <TaskCard key={task.id} task={task} />          
         ))}
      </div>
  )
}

export default TaskList