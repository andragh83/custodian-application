import { combineReducers } from 'redux'
import tasks from './tasks'
import displayTasks from './displayTasks';

const rootReducer = combineReducers({ tasks, displayTasks });
export default rootReducer
