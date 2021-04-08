import * as types from './types'

// action creators
// For Example :

export const archiveTask = (id) => ({ type: types.ARCHIVE_TASK, id })
export const toggleTask = (id) => ({ type: types.TOGGLE_TASK, id })
