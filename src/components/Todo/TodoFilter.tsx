import {TodoFilter} from "../../model/todo.ts";
import {useContext} from "react";
import {TodoFilterContext} from "../Todo.tsx";

export interface Props {
    onFilterTodos: (filter: TodoFilter) => void,
}


export default function TodosFilter({onFilterTodos}: Props) {
    const filter = useContext(TodoFilterContext);
    function filterTodos(filter: TodoFilter) {
        onFilterTodos(filter);
    }

    return (
        <div className="filters">
            <button className={`btn ${ filter===TodoFilter.all && 'active'}`}  onClick={() => filterTodos(TodoFilter.all)}>All</button>
            <button className={`btn ${ filter===TodoFilter.completed && 'active'}`}  onClick={() => filterTodos(TodoFilter.completed)}>Completed</button>
            <button className={`btn ${ filter===TodoFilter.incomplete && 'active'}`}  onClick={() => filterTodos(TodoFilter.incomplete)}>Incomplete</button>
        </div>
    )
}
