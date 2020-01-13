/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */

import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
        todoText: ''
        };
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        
    };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            
            <input
                type="text"
                name="todo"
                value={this.state.todoText}
                onChange={this.handleChanges}
            />
            <button>Add To-Do Item</button>

            <button className="clear-btn" onClick={this.props.clearCompleted}>
                Clear Completed To-Do's
            </button>
        </form>
    );
    }
}

export default TodoForm;