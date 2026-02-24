import TaskItem from "./TaskItem"

export const TaskList = ({tasks,editTask,deleteTask,toggleTask,filter,searchTerm}) => {
    const filterTasks = tasks.filter((task) => {
        if(filter === 'completed') return task.completed
        if(filter === 'pending') return !task.completed
        return true
    })
    .filter((task) => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (filterTasks.length === 0) {
        return <p style={{ textAlign: "center", color: "#888" }}>No tasks found.</p>;
    }

  return (
    <div className="task-list">
        {
            filterTasks.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task} 
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            ))
        }
        
    </div>
  )
}
