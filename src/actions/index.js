export const SHOW_USERS = 'SHOW_USERS'

export function showUsers() {
    const users =  [
        { id: 1, name: 'Juan Barroso' },
        { id: 2, name: 'Jose Gimenez' }
    ]
    return {
        type: SHOW_USERS ,
        payload: users
    }
}