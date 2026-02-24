import { useState } from "react"

export const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title.trim()) return

        addTask(title)
        setTitle('')
    }

  return (
    <>

    <form onClick={handleSubmit} className="task-form">
        <input 
            type="text" 
            placeholder="Enter Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
        />
        <button type="submit" >ADD</button>
    </form>

    </>
  )
}

