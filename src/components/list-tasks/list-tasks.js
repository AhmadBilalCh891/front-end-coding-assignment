import React from "react"
import './index.css';

export function ListTasks(props)
{
    return (props.tasks.length ? <div className="card-container">
        {
            props.tasks.map((task, i) => (
                <div className="card">
                <h3>Name:{task.name}</h3>
                <p>Id:{task.id}</p>
            </div>
            ))
        }
        </div>:<h2 className="card-container">There is no task present here</h2>);
}