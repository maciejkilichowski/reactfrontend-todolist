import React, { Component } from 'react';
import TodolistService from '../services/TodolistService';

class TodolistComponent extends Component {
  constructor(props){
      super(props)

      this.state = {
        todolistEntities: []
      }
  }

componentDidMount(){
  TodolistService.getTododata().then((res) => {
      this.setState({todolistEntities: res.data});
  });
}

  render() {
    return (
      <div>
        <h2 className="text-center">To do list</h2>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task name</th>
                <th>Is task done?</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.todolistEntities.map(
                    todolistEntity =>
                    <tr key = {todolistEntity.id}>
                      <td>{todolistEntity.id}</td>
                      <td>{todolistEntity.title}</td>
                      <td>{String(todolistEntity.done)}</td>
                     
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TodolistComponent;