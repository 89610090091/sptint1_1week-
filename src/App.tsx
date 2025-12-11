import './App.css'
import { TodoLisItems } from './TodolistItem'

export const App = () => {
  return (
    <div className="app">
      <TodoLisItems title="What to learn" />
      <TodoLisItems title="Songs" />
      <TodoLisItems title="Books" />
    </div>
  )
}





