import './App.css';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/addTask';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Work',
          day: 'April 7th at 7:00am',
          reminder: true
      },
      {
          id: 2,
          text: 'Gym',
          day: 'April 7th at 4:00pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Giving attention to girlfriend',
          day: 'April 7th at 7:00pm',
          reminder: false
      }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : <h3>There is no tasks</h3> }
    </div>
  );
}

export default App;
