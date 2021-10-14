import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [tasks, setTasks] = useState([{
            id: 1,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2:30pm',
        reminder: false
    }])

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {
      id: id,
      ...task
    }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header showTaskForm={showTaskForm} onAdd={() => setShowTaskForm(!showTaskForm)}/>
      {showTaskForm && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}></Tasks> : 'No Tasks To Show'}
      
    </div>
  );
}

export default App;
