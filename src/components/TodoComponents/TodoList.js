import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log(props);

    const sortByCompletedList = props.todo.sort((a, b) => a.completed - b.completed);
    
    

    return (
    <div className="todo-list">
        {props.todo.map(todo => (
            <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
        ))}
    </div>
    );
};

export default TodoList;