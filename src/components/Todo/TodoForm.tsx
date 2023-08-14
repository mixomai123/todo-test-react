import {FormEvent, useState} from "react";

export interface Props {
    onSubmit: (newItem:string) => void;
}

export default function TodoForm({onSubmit}: Props) {

    const [newItem, setNewItem] = useState("")

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(newItem);
        setNewItem('');
    }

    return (
        <form className="new-item-form" onSubmit={e => submit(e)}>
            <div className="form-row"></div>
            <input
                type="text"
                minLength={3}
                required={true}
                id="newTodoInput"
                placeholder="Add new action item"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button className="btn btn-block" type="submit"> ADD</button>
        </form>
    )
}
