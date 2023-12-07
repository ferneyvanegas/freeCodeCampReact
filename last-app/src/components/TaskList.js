import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/TaskList.css';

function TaskList(){

    const [chores, setChores] = useState([]);

    const addTask = task =>{
        if(task.text.trim()){
            task.text = task.text.trim();
            const choresUpdated = [task, ...chores];
            setChores(choresUpdated);
        }
    };

    const deleteTask = id => {
        const choresUpdated = chores.filter(task => task.id !== id);
        setChores(choresUpdated);
    };

    const completeTask = id => {
        const choresUpdated = chores.map(task => {
            if(task.id == id){
                task.complete = !task.complete;
            }
            return task;
        });
        setChores(choresUpdated);
    };

    return(
        <>
            <TaskForm onSubmit={addTask} />

            <div className="task-list-container">
                {
                    chores.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete}
                            completeTask = {completeTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;