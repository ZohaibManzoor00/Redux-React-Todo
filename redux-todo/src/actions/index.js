export const addTodo = description => {
    return {
        type: 'ADDTODO',
        payload: description
    }
}

export const getToDos = (list) => {
    return {
        type: 'GETTODOS',
        payload: list
    }
}