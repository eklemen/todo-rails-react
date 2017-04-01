import axios from 'axios';

export function getTodos(){
	return dispatch => {
		dispatch({type: 'GET_TODOS_PENDING'});
		axios.get('http://localhost:3000/todos')
			.then( response => {
				dispatch({
					type: 'GET_TODOS_FULFILLED',
					payload: response.data
				});
			})
			.catch( err => {
				dispatch({
					type: 'GET_TODOS_REJECTED',
					payload: err
				})
			})
	}
}

export function toggleTodoFunc(todos, todo){
	return () => {
		console.log(todos)
		console.log(todo)
		
	}
}

// export function getTodos(){
// 	return dispatch => {
// 		dispatch({type: 'GET_TODOS_PENDING'});
// 		axios.get('http://localhost:3000/todos')
// 			.then( response => {
				// dispatch({
				// 	type: 'GET_TODOS_FULFILLED',
				// 	payload: response.data
				// });
// 			})
// 			.catch(function (error) {
// 		    	dispatch({
// 		    		type: 'GET_TODOS_REJECTED',
// 		    		payload: error
// 		    	});
// 		  	});	
// 	}
// }

export function handleClick(e){
	return dispatch => {
		dispatch({type: 'TEST', payload: 'banana'});
	}
}