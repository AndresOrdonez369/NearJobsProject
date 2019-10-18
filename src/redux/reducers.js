import { combineReducers } from 'redux';

import Auth from '../screens/AuthScreen/reducer';
import Likes from '../screens/DeckScreen/likes_reducer';

const appReducers = combineReducers({
    Likes,
    Auth
  });

export default appReducers;