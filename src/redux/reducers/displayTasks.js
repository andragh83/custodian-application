import { 
    DISPLAY_CRITERIA
  } from '../actions/types'

const initialState = { displayCriteria: '' };

export default function displayTasks(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_CRITERIA:
            return { ...state, displayCriteria: action.criteria }
        
        default:
            return state
    }
}
