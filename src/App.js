import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  } from "react-router-dom";
import {ListTasks} from './components/list-tasks/list-tasks';
import {BulkDelete} from './components/bulk-delete/bulk-delete';
import {CreateTask} from './components/create-task/create-task';

class App extends Component {
  constructor(props, context)
  {
    super(props, context)
    this.createTask = this.createTask.bind(this)
    this.bulkDelete = this.bulkDelete.bind(this)
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : []
    }
  }
  createTask(task)
  {
    let state = this.state;
    state.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    this.setState(state);
  }

  bulkDelete(tasks)
  {
    let state = this.state;
    state.tasks = tasks
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    this.setState(state);
  }

  render() {
  return (
    <div className="App">
      <Router>
      <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/list-tasks">List Tasks</a>
        <a href="/create-task">Create Task</a>
        <a href="/bulk-delete">Bulk Delete</a>
      </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/list-tasks"/>
          </Route>
          <Route exact path="/list-tasks" render={() => <ListTasks tasks={this.state.tasks}/>}/>
          <Route exact path="/create-task" render={() => <CreateTask createTask={this.createTask} tasks={this.state.tasks}/>}/>
          <Route exact path="/bulk-delete" render={() => <BulkDelete bulkDelete={this.bulkDelete} tasks={this.state.tasks}/>}/>
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
