import {combineReducers} from "redux";
import TodosReducers from './MyTodos/reducers/';

export default combineReducers({
    Todos: TodosReducers
});
