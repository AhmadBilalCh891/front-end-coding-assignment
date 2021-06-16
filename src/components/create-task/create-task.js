import React from "react"
import { Redirect } from "react-router-dom";
import './index.css';


export class CreateTask extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.create  = this.create.bind(this);
        this.onNameChange  = this.onNameChange.bind(this);
        this.state = {
            taskName : '',
            redirect:false
        }
    }

    onNameChange(event)
    {
        this.setState({taskName: event.target.value});
    }
    
    create(event)
    {
        let state = this.state;
        debugger
        if(state.taskName !== '')
        {
            state.redirect = true
            let taskName = state.taskName
            let taskId = this.props.tasks.length + 1;
            this.props.createTask({id:taskId, name:taskName});
            this.setState(state);
        }
    }
    render()
    {
        if(this.state.redirect)
        {
            return <Redirect to='/list-tasks' />
        }
    return (
        <div class="form__group">
            <label for="name" class="form__label">Task Name</label>
            <input type="text" class="form__input" id="name" placeholder="Enter Task Name"  onChange={this.onNameChange} />
            <input type="button" className="form__button" id="button" value="Submit" onClick={this.create}/>
        </div>
        // <div>
        //     <label>Enter Task Name
        //     <input type="text" name="name" onChange={this.onNameChange}/>
        //     </label>
        //     <input type="button" value="Submit" onClick={this.create}/>
        // </div>
        )
    }
}