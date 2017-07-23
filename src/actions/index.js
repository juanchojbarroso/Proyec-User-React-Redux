export const SHOW_USER = 'SHOW_USER'


export function showUsers() {
    
    const users =  [
        {id: 1, name: 'Juan Barroso'},
        {id: 2, name: 'Jose Gimenez'}
    ]
    
    return {
        type: SHOW_USER ,
        payload: []
    }
}