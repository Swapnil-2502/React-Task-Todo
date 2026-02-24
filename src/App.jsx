
import { useEffect, useState } from 'react'
import './App.css'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {
  const [filter,setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks")
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const addTask = (title) =>{
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }

    setTasks([...tasks,newTask])
  }

  const EditTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => task.id===id ? {...task, title: newTask} : task )
    )
  }

  const DeleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  const ToggleTask = (id) => {
    setTasks(
      tasks.map((task) => (
        task.id === id ? {...task, completed: !task.completed} : task
      ))
    )
  }

  
  return (
    <div className='app'>
      <h1>Task Management App</h1>

      <TaskForm addTask={addTask} />

      <div className='search-bar'>
        <input 
          type="text"
          placeholder='Search tasks...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
        />
      </div>

      <div className='filters'>
        <button className={filter === 'all' ? 'active': ''} onClick={() => setFilter("all")}>All</button>
        <button className={filter === 'completed' ? 'active': ''} onClick={() => setFilter("completed")}>Completed</button>
        <button className={filter === 'pending' ? 'active': ''} onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <TaskList 
        tasks={tasks} 
        editTask={EditTask}
        deleteTask={DeleteTask}
        toggleTask={ToggleTask}
        filter={filter}
        searchTerm={searchTerm}
      />  

    </div>
    
  )

 
}

export default App


{/* {
        tasks.map((task) => (
          <div>
            <span>{task.id}</span>
            <span>{task.title}</span>
            <span>{task.completed.toString()}</span>
          </div>
        ))
      } */}