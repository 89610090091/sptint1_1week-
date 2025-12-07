type Props = {
    title: string
    tasks: Task[]
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = (props: Props) => {
    const listItems = props.tasks.map(task => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {listItems}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}