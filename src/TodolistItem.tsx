import { Task } from "./App"

type Props = {
    title: string
    tasks: Task[]
    date?: string
}

export const TodolistItem = ({ title, tasks, date }: Props) => {

    // const { title, tasks } = props

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {tasks.map(task => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone} />
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>

            // old code example
            {/* <ul>
                <li>
                    <input type="checkbox" checked={tasks[0].isDone} />
                    <span>{tasks[0].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[1].isDone} />
                    <span>{tasks[1].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[2].isDone} />
                    <span>{tasks[2].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[3].isDone} />
                    <span>{tasks[3].title}</span>
                </li>
            </ul> */}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>{date}</div>
        </div>
    )
}