import { useState } from 'react';

interface NewTodoFormProps {
    onSubmit: (title: string, notiz: string) => void;
}

//Über die Props wird die Funktion onSubmit übergeben.
export function NewTodoForm({ onSubmit } : NewTodoFormProps) {
    const [newItem, setNewItem] = useState('');
    const [newNotice, setNewNotice] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        //Hier wird überprüft, ob das Eingabefeld leer ist.
        if (newItem.trim() === '') {
            return;
        }
        
        //Hier wird ein neues Todo-Item hinzugefügt.
        onSubmit(newItem, newNotice);

        //Nach dem Absenden des Formulars wird das Eingabefeld geleert.
        setNewItem('')
        
        if (newNotice.trim() === '') {
            return;
        }

        //Nach dem Absenden des Formulars wird das Eingabefeld geleert.
        setNewNotice('')
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className='form-row'>
                <label className='header'>Neue Aufgabe</label>
                <label htmlFor="newItem">Titel</label>
                <input id="newItem"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} 
                />
            </div>
            <div className="form-row">
                <label htmlFor="newNotice">Beschreibung</label>
                <input id="newNotice" 
                    value={newNotice} 
                    onChange={(e) => setNewNotice(e.target.value)} 
                />
            </div>
            <button className='btn' type="submit">Hinzufügen</button>
            
        </form>
    )
}
