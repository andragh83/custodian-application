import { 
    DISPLAY_ALL_TASKS,
    DISPLAY_TASKS_BY_CRITERIA
  } from '../actions/types'

const initialState = { setDisplayCriteria: false, criteria: null, criteriaValue: null };

export default function displayTasks(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_ALL_TASKS:
            return { ...state, setDisplayCriteria: false, criteria: null }
        
        case DISPLAY_TASKS_BY_CRITERIA:
            return { ...state, setDisplayCriteria: true, criteria: action.criteria, criteriaValue: action.criteriaValue }
        
        default:
            return state
    }
}
