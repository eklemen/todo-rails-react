import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getTodos, toggleTodoFunc} from './actions/TodoActions';
import {TodoItem} from './components/';
export class MyTodos extends Component {
    componentWillMount() {
        this.props.dispatch(getTodos());
    }
        

    render() {
    	const {todos=[], dispatch} = this.props;
        const todoItems = todos.map( todo => {
            const toggleTodo = toggleTodoFunc(todos, todo);
            return <TodoItem key={todo.id} todo={todo} handleClick={toggleTodo} />
        })
        
        return (
            <div>
                My Todos
                {todoItems}
            </div>
        );
    }
}

export const mapStateToProps = state => {
	return {
		todos: state.Todos.todoView.data.todos
	}
}

export default connect(mapStateToProps)(MyTodos);


