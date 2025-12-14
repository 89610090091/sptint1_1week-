import { Task } from "./App"
import { Button } from "./Button"

type Props = {
    title: string
    tasks: Task[]
    date?: string
}

export const TodolistItem = ({ title, tasks, date }: Props) => {
    // const { title, tasks, date } = props

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
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone} />
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
                {/* <button>All</button>
                <button>Active</button>
                <button>Completed</button> */}
            </div>

            <div>{date}</div>
        </div>
    )
}