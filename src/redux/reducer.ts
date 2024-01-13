import { cardReducer } from './cardReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
