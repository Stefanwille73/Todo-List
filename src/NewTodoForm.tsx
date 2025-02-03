import { useState } from 'react';

interface NewTodoFormProps {
    onSubmit: (title: string) => void;
}

//Über die Props wird die Funktion onSubmit übergeben.
export function NewTodoForm({ onSubmit } : NewTodoFormProps) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        //Hier wird überprüft, ob das Eingabefeld leer ist.
        if (newItem.trim() === '') {
            return;
        }
        
        //Hier wird ein neues Todo-Item hinzugefügt.
        onSubmit(newItem)

        //Nach dem Absenden des Formulars wird das Eingabefeld geleert.
        setNewItem('')
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className='form-row'>
                <label htmlFor="newItem">Neuer Eintrag</label>
                <input id="newItem"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} />
            </div>
            <button className='btn' type="submit">Hinzufügen</button>
            
        </form>
    )
}
