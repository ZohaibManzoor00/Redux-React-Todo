let todos = [];

export const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case 'ADDTODO':
            fetch('http://localhost:8000/todos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload),
            })
        default:
            return state
    }
}