import React, { Component }from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
//CSS?//

const todo = [
  {
    name: 'Clean Garage',
    id: 123,
    completed: false
  },
  {
    name: 'Apply for Developer Job',
    id: 124,
    completed: false
  },
  {
    name: 'Build Portfolio Site',
    id: 1235,
    completed: false
  },
  {
    name: 'Get Gym Membership',
    id: 1246,
    completed: false
  },
  {
    name: 'Study Advanced React Concepts',
    id: 1237,
    completed: false
  },
];

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoList: todo,
    };
  }

  toggleTodo = id => {

    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    this.setState({
        todoList: newTodoList
      });
    };

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h2>To-Do List App!</h2>
        </div>
      
        <div className="form">
          <TodoForm addTodo={this.addTodo} />
        </div>
      
        <div className="list">
          <TodoList 
            todo={this.state.todoList}
            toggleTodo={this.toggleTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;