export interface TodoItemProps {
    completed: boolean;
    id: string;
    title: string;
    date_created: string;
    toggleTodo: (id: string) => void;
    handleDeleteItem: (id: string) => void;
}

export function TodoItem({ completed, id, title, date_created, toggleTodo, handleDeleteItem }: TodoItemProps) {
    return (
        <li>
            <label>
                <input type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                />
                {title} - {date_created}
            </label>
            <button
                className='btn btn-danger'
                onClick={() => handleDeleteItem(id)}>Löschen</button>
        </li>
    )
}