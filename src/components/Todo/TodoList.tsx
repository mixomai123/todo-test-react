import {TodoItem} from "../../model/todo.ts";

export interface Props {
    onToggle: (id: string) => void,
    todos: TodoItem[],
}

export default function TodoList({onToggle, todos}: Props) {


    function toggleTodo(id: string): void {
        onToggle(id);
    }


    return (
        <ul className="list">
            {todos.length === 0 && "No more items in this filter"}
            {todos.map(todo => {
                return (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.title}
                    </li>
                )
            })}
        </ul>
    )
}
