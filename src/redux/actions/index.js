import * as types from './types'

// action creators
// For Example :

export const archiveTask = (id) => ({ type: types.ARCHIVE_TASK, id })
export const toggleTask = (id) => ({ type: types.TOGGLE_TASK, id })
export const createTask = (id) => ({ type: types.CREATE_TASK, id })

export const setDisplayCriteria = (criteria) => ({ type: types.DISPLAY_CRITERIA, criteria })
