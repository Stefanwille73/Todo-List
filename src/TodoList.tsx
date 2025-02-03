import { TodoItem, TodoItemProps } from "./TodoItem";

interface TodoListProps {
    todos: TodoItemProps[];
    toggleTodo: (id: string) => void;
    handleDeleteItem: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, handleDeleteItem }: TodoListProps) {    
    const currentDate = new Date().toLocaleDateString();
    return (
        <ul className='list'>
            {/* Hier wird die Todo-Liste angezeigt. */}
            {todos.length === 0 && <li><h1>Nichts zu tun 😊</h1></li>}
            {todos.map((todo) => { 
                return (
                    <TodoItem {...todo} 
                        key={todo.id}
                        date_created={currentDate}
                        toggleTodo={toggleTodo}
                        handleDeleteItem={handleDeleteItem}                         
                />
                )
            })}
        </ul>
    )
}