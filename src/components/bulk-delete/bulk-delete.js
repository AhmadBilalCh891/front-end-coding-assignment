import React from "react"
import './index.css';


export class BulkDelete extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.delete  = this.delete.bind(this);
        this.onCheckBoxChange  = this.onCheckBoxChange.bind(this);
        this.state = {
            tasksToBeDeleted: props.tasks,
        }
    }

    delete()
    {
        this.props.bulkDelete(this.state.tasksToBeDeleted);
    }
    onCheckBoxChange(task, event)
    {
        let state = this.state;
        state.tasksToBeDeleted = state.tasksToBeDeleted.filter(t => t.id !== task.id)
        this.setState(state);
    }

    render()
    {
        return( this.props.tasks.length ? <div className="card-container">
        {
            this.props.tasks.map((task, i) => (
                <div className="inner-container">
                <input type="checkbox" className="checkbox" id={i} onChange={(event) => this.onCheckBoxChange(task, event)}/>
                 <div className="card">
                <h3>Name:{task.name}</h3>
                <p>Id:{task.id}</p>
                 </div>
                </div>
            ))
        }
        <input type="button" className="button" value="Submit" onClick={this.delete}/>
        </div>:<h2 className="card-container">There is no Task present here</h2>)
    }
}