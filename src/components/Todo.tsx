import {createContext, useEffect, useState} from "react";
import {TodoFilter, TodoItem} from "../model/todo.ts";
import TodoForm from "./Todo/TodoForm.tsx";
import TodoList from "./Todo/TodoList.tsx";
import TodosFilter from "./Todo/TodoFilter.tsx";

const INITIAL_TODOS_MOCK: TodoItem[] = [
    {id: "0", completed: false, title: "Implement Todo App"},
    {id: "1", completed: false, title: "Implement basic layout"},
    {id: "2", completed: false, title: "Start Coding"},
    {id: "3", completed: false, title: "Install Dependencies"},
    {id: "4", completed: true, title: "Create react project starter"},
]
export const TodoFilterContext = createContext<TodoFilter>(TodoFilter.all);

export default function Todo() {

    const [todos, setTodos] = useState<TodoItem[]>(() => {
        const savedTodos = localStorage.getItem("TODOLIST");
        return savedTodos ? JSON.parse(savedTodos) : INITIAL_TODOS_MOCK;
    });
    const [todosFilter, setTodosFilter] = useState(TodoFilter.all);

    useEffect(() => {
        localStorage.setItem("TODOLIST", JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id: string) {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    function addTodo(title: string) {
        setTodos([{id: crypto.randomUUID(), title, completed: false}, ...todos])
    }

    function filterTodos(filter: TodoFilter) {
        setTodosFilter(filter);
    }

    function filteredTodos(): TodoItem[] {
        switch (todosFilter) {
            case TodoFilter.completed:
                return todos.filter(t => t.completed)
            case TodoFilter.incomplete:
                return todos.filter(t => !t.completed)
            default:
                return [...todos];
        }
    }

    return (
        <TodoFilterContext.Provider value={todosFilter}>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <TodoList onToggle={toggleTodo} todos={filteredTodos()}></TodoList>
            <TodosFilter onFilterTodos={filterTodos}></TodosFilter>
        </TodoFilterContext.Provider>
    )
}
