const initialState = {
	fetching: false,
	fetched: false,
	error: null,
	data: []
}

export function todoView(state = initialState, action) {
	switch (action.type) {

		case "GET_TODOS_PENDING":
			return {
				...state,
				fetching: true,
				fetch: false,
				data: [],
				error: null
			}
		case "GET_TODOS_FULFILLED":
			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				data: action.payload
			}
		case "GET_TODOS_REJECTED":
			return {
				...state,
				fetching: false,
				fetched: true,
				data: [],
				error: action.payload
			}
		case 'TEST':
			return {...state}
		default:
			return state
	}
}