import * as types from './types'

// action creators
// For Example :

export const archiveTask = (id) => ({ type: types.ARCHIVE_TASK, id })
export const toggleCompletedTask = (id) => ({ type: types.TOGGLE_TASK_IS_COMPLETE, id })
export const createTask = (id) => ({ type: types.CREATE_TASK, id })

export const showAllTasks = () => ({type: types.DISPLAY_ALL_TASKS})
export const showTasksByArchived = ( criteria , criteriaValue ) => ({type: types.DISPLAY_TASKS_BY_ARCHIVED_STATUS, criteria, criteriaValue})
export const sortTasksByTitle = () => ({type: types.SORT_TASKS_BY_TITLE})
