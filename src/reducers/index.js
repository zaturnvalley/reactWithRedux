import { combineReducers } from 'redux';
import BooksReducer from './recuder_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
