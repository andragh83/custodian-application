import * as types from './types'

// action creators
// For Example :

export const archiveTask = (id) => ({ type: types.ARCHIVE_TASK, id })
export const toggleCompletedTask = (id) => ({ type: types.TOGGLE_TASK_IS_COMPLETE, id })
export const createTask = (event) => ({ type: types.CREATE_TASK, event})

export const showAllTasks = () => ({type: types.DISPLAY_ALL_TASKS})
export const displayTasksByCriteria = ( criteria , criteriaValue ) => ({type: types.DISPLAY_TASKS_BY_CRITERIA, criteria, criteriaValue})
export const sortTasksByTitle = () => ({type: types.SORT_TASKS_BY_TITLE})
