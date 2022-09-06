import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



function TaskForm() {

const[title,setTitle]= useState("");
const[description,setDescription]= useState("");
const {createTask} = useContext(TaskContext)




const handleSubmit = (e)=>{
    e.preventDefault();    
    createTask({
        title,
        description
    });
    setTitle('')
    setDescription('')

}

  return (
    <div className='max-w-lg mx-auto'>

        <form className='bg-gradient-to-r from-gray-800 to-slate-900 rounded-md p-10 mb-4 shadow-lg shadow-cyan-500/50 ...'  onSubmit={handleSubmit} >
            <h1 className='text-lime-100 text-2xl font-bold mb-3 text-center'>PLANEA TU NUEVA TAREA</h1>
            <hr className=' p-1 m-1'/>
            <input  className='bg-lime-100 p-3 w-full mb-2 rounded-md' type="text" placeholder="Escribe tu siguiente tarea"
            
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            autoFocus
            
            />
            <textarea 
            
            placeholder='Escribe la descripción de la tarea' 
            onChange={(e) => 
            setDescription(e.target.value)} 
            value={description}
            className='bg-lime-100 p-3 w-full mb-2 rounded-md'
            >
           </textarea>
            <button className='bg-lime-100 p-3 w-full mb-2 rounded-md text-neutral-600 hover:bg-neutral-700 hover:text-lime-200 '>
                Guardar
            </button>
        </form>
     </div>
  )
}

export default TaskForm