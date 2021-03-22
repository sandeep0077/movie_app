// {
//     type: 'ADD_MOVIES'
//     movies:[m, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }


// these variables are called action types
export const ADD_MOVIES = 'ADD_MOVIES'


// these functions are called action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES ,
        movies
      }
}