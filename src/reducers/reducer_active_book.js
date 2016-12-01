// state arg is not application state,
// only the state this reducer is responsible for

//if arg comes in undefined, set state to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //if no book selected, return state on intial bootup
  return state;
}