import { useState } from 'react'

const TaskItem = ({task,editTask,deleteTask,toggleTask}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(task.title)

    const handleEditing = () => {
        editTask(task.id,newTitle)
        setIsEditing(false)
    }

  return (
    <>
        <div className={`task-item ${task.completed ? 'completed': ''}`}>
            {
                isEditing ? (
                    <>
                        <input
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <button onClick={handleEditing}>Save</button>
                    </>
                ):
                (
                    <>
                        <span onClick={() => toggleTask(task.id)}>{task.title}</span>
                        <div className='actions'>
                            {task.completed ? ("") : (<button onClick={() => setIsEditing(true)}>Edit</button>)}
                            
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    </>
                )
            }
        </div>
    </>
  )
}

export default TaskItem