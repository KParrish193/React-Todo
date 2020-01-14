import React, { Component }from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './Todo.css';

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

  deleteTodo = () => {
  const clearCompleted = this.state.todoList.filter(todo => {
    return todo.completed === false;
  })
  this.setState ({
    todoList : clearCompleted
  }) 
  console.log(clearCompleted);
  };

  render() {
    console.log('rendering...', this.state.todoList);

    return (
      <div className="App">
        <div className="header">
          <h2>To-Do List:</h2>
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

        <button className="clear-btn" onClick={this.deleteTodo}>
                Clear Completed To-Do's
        </button>
      </div>
    );
  }
}

export default App;