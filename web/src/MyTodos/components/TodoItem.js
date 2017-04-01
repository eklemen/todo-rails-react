import React, { Component } from 'react';

export class TodoItem extends Component {

    render() {
    	const { todo, handleClick } = this.props;
    	const isCompleted = todo.is_completed 
    		? <p>complete</p> 
    		: <p>incomplete</p>;
        return (
            <div>
                <span>{todo.task}</span>

                <span>{isCompleted}</span>
                <button onClick={handleClick}>Click to complete</button>
            </div>
        );
    }
}

export default TodoItem;