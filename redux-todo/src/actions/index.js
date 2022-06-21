export const increment = num => {
    return {
        type: 'INCREMENT',
        payload: num || 1
    }
}