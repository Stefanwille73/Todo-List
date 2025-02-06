export interface TodoItemProps {
    completed: boolean;
    id: string;
    title: string;
    date_created: string;
    notiz?: string;
    toggleTodo: (id: string) => void;
    handleDeleteItem: (id: string) => void;
}

export function TodoItem({ completed, id, title, date_created, notiz, toggleTodo, handleDeleteItem }: TodoItemProps) {
    return (
        <li>
            <label>
                
                <div className="todo-item">
                    <input type="checkbox"
                        checked={completed}
                        onChange={() => toggleTodo(id)}
                    />
                    <span>{title} - {date_created}</span>
                    {notiz && <p>{notiz}</p>}
                </div>
            </label>
            <button
                className='btn btn-danger'
                onClick={() => handleDeleteItem(id)}>Löschen</button>
        </li>
    )
}