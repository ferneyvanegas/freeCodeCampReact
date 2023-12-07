import React, { useState } from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handlerChange = e => {
        setInput(e.target.value);
    };

    const handlerSend = e=> {
        e.preventDefault(); // Hace que no se recargue el formulario
        console.log(`Enviando formulario...`);
        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        }

        props.onSubmit(newTask);
    };

    return(
        <form className="task-form"
            onSubmit={handlerSend}>
            <input
                className="task-input"
                type="text"
                placeholder="Escribe una tarea"
                name="text"
                onChange={handlerChange}
            />

            <button className="task-button">
                Agregar Tarea
            </button>
        </form>
    );
}

export default TaskForm;