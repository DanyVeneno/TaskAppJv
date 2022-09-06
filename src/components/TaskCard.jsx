import {useContext}from 'react'
import {TaskContext} from '../context/TaskContext'



function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)


  return (
    
    <div className='bg-neutral-900 text-slate-50 p-4 rounded-md shadow-lg shadow-cyan-500/50 ...'>
        <h1 className='text-xl font-bold capitalize text-gray-200'>{task.title}</h1>
        <p className='text-lime-300' text-sm >{task.description}</p>
        <button  className='bg-neutral-600 rounded-sm p-1 mt-4 hover:bg-neutral-400' onClick={()=> deleteTask(task.id)}>
          Eliminar Tarea
        </button>
    </div>
    
  )
}

export default TaskCard