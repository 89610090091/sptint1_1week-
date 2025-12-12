
import './App.css'
import { TodolistItem } from './TodolistItem'

export const App = () => {
  return (
    <div className="app">
      <TodolistItem title="What to learn" subTitle={''} description={''} tasks={[]} />
      <TodolistItem title="Songs" subTitle={''} description={''} tasks={[]} />
      <TodolistItem title="Books" subTitle={''} description={''} tasks={[]} />
    </div>
  )
}

