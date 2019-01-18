import {combineReducers} from 'redux';
import todoRecucer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo:todoRecucer
})

export default rootReducer