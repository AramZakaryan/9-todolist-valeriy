import {TodolistType} from "../App";

export type ActionType = removeTaskActionType
    | addTaskActionType
    | changeTaskStatusActionType
    | changeTaskTitleActionType

export const tasksReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.payload.id)
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.payload.title, filter: "all"}]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.payload.id ? {...tl, filter: action.payload.filter} : tl)
        default:
            throw new Error('I don\'t understand this type')
    }
}