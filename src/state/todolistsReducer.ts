import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
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


export type ActionType = removeTodolistActionType
    | addTodolistActionType
    | changeTodolistTitleActionType
    | changeFilterrActionType

type removeTodolistActionType = ReturnType<typeof removeTodolistAC>
const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

type addTodolistActionType = ReturnType<typeof addTodolistAC>
const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}

type changeTodolistTitleActionType = ReturnType<typeof changeTodolistTitleAC>
const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id, title}
    } as const
}

type changeFilterrActionType = ReturnType<typeof changeFilterAC>
const changeFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {id, filter}
    } as const
}


// function changeFilter(value: FilterValuesType, todolistId: string) {
//     let todolist = todolists.find(tl => tl.id === todolistId);
//     if (todolist) {
//         todolist.filter = value;
//         setTodolists([...todolists])
//     }
// }