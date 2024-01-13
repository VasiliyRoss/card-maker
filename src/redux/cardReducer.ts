import { CardData } from '../types/content';
import { getInitCardData } from '../utils/appUtils';
import { CardActions, Action } from '../redux/actions';

const initCardData: CardData = getInitCardData();
const cardReducer = (state: CardData = initCardData, action: Action) => {
    switch (action.type) {
        case CardActions.CHANGE_CANVAS_SIZE: {
            const newSize = action.payload;
            return (state.canvas = newSize);
        }
        default:
            return state;
    }
};

export { cardReducer };
