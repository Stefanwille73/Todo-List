import { useEffect, useState } from 'react';
import './index.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';


export default function App() {
  //Hier wird der Zustand für die Todos definiert.
  //Die Todos werden aus dem LocalStorage geladen.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  })

  //Speichern der Todos im LocalStorage.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
    message?: string;
    date_created: string;
    notiz?: string;
  }

  function addTodo(title: string, notiz: string) {
    //Hier wird ein neues Todo-Item hinzugefügt.
    setTodos((currentTodos: TodoItem[]) => {
      let newtitle = title?.trim();
      let newNotiz = notiz?.trim();
      let currentDate = new Date().toLocaleDateString();
      //Hinzufügen eines neuen Todo-Items, 
      //wenn der Titel nicht leer ist und das Todo-Item mit dem Titel noch nicht existiert.
      if (newtitle?.length > 0 && !todos.some((t: TodoItem) => t.title === newtitle)) {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), 
            title, completed: false, 
            notiz: newNotiz,
            date_created: currentDate },
        ]
      }
      console.log("Todo already exists: ", newtitle);
      return currentTodos;
    })
  }

  //Hier wird ein bestehndes Todo-Item gelöscht.
  const handleDeleteItem = (id: string) => {
    setTodos((currentTodos: TodoItem[]) =>
      currentTodos.filter((todo: TodoItem) => todo.id !== id));
  };

  //Hier wird ein bestehndes Todo-Item auf bearbeitet gesetzt.
  function toggleTodo(id: string) {
    setTodos((currentTodos: TodoItem[]) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    })
  }

  const todos_completed = todos.filter((t: TodoItem) => t.completed).length;
  const todos_open = todos.length - todos_completed;

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDeleteItem={handleDeleteItem} />
      {todos.length > 0 && (
        <div className='footer'>
          <ul className='footer-list'>
            <li>Erledigt: {todos_completed}</li>
            <li>Offen: {todos_open}</li>
          </ul>
        </div>
      )}
    </>
  );
}
