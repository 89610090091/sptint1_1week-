import './App.css'
import { TodolistItem } from './TodolistItem'
import { Task } from './TodolistItem'

export const App = () => {

  const tasks_1: Task[] = [
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JS & TS", isDone: true },
    { id: 3, title: "REACT", isDone: false },
    { id: 3, title: "REDUX", isDone: false },
  ]

  const tasks_2: Task[] = [
    { id: 1, title: "Beer", isDone: true },
    { id: 2, title: "Meat", isDone: true },
  ]

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks_1} />
      <TodolistItem title="Songs" tasks={tasks_2} />
      {TodolistItem({
        title: 'Book',
        tasks: []
      })}
    </div>
  )
}