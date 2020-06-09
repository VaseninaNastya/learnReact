import { combineReducers} from 'redux'
import userReducer from './userReducer'
import counterReducer from './counterReducer';
import cardListReduser from './cardListReduser';
import resetReduser from './resetReduser';

export default combineReducers({
    user: userReducer,
    counter: counterReducer,
    cardList: cardListReduser,
    reset: resetReduser
});