import { combineReducers } from "redux";
import { ADD_TASK } from "../actions";

const taskReducers = (state = [], action) => {
    switch(action.type){
        case ADD_TASK:
            state = state.concat(action.payload)
            break;
        default:
            return state;
    }
    return state;
}

const reducers = combineReducers({
    tasks: taskReducers
})

export default reducers;