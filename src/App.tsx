
import './App.css'
import { TodolistItem } from './TodolistItem'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

// export const App = () => {
//   const tasks1: Task[] = [
//     { id: 1, title: 'HTML&CSS', isDone: true },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'ReactJS', isDone: false },
//     { id: 4, title: 'Redux', isDone: false },
//     { id: 5, title: 'Typescript', isDone: false },
//     { id: 6, title: 'RTK query', isDone: false },
//   ]

//   const tasks2: Task[] = [
//     { id: 1, title: 'Hello world', isDone: true },
//     { id: 2, title: 'I am Happy', isDone: true },
//     { id: 3, title: 'Yo', isDone: false },
//   ]

//   return (
//     <div className="app">
//       <TodolistItem title="What to learn" tasks={tasks1} date="24.012027" />
//       <TodolistItem title="Songs" tasks={tasks2} />
//     </div>
//   )
// }

/** 1 вариант */
export const Component1 = () => {
  return (
    <>
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
    </>
  )
}
/** 2 вариант */
export const Component2 = () => {
  return (
    <Fragment>
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
    </Fragment>
  )
}

// example of Fragment usage

// function Blog() {
//   return posts.map(post =>
//     <Fragment key={post.id}>
//       <PostTitle title={post.title} />
//       <PostBody body={post.body} />
//     </Fragment>
//   );
// }

// You can inspect the DOM to verify that there are no wrapper elements around the Fragment children:

// import { Fragment } from 'react';

// const posts = [
//   { id: 1, title: 'An update', body: "It's been a while since I posted..." },
//   { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
// ];

// export default function Blog() {
//   return posts.map(post =>
//     <Fragment key={post.id}>
//       <PostTitle title={post.title} />
//       <PostBody body={post.body} />
//     </Fragment>
//   );
// }

// function PostTitle({ title }) {
//   return <h1>{title}</h1>
// }

// function PostBody({ body }) {
//   return (
//     <article>
//       <p>{body}</p>
//     </article>
//   );
// }
