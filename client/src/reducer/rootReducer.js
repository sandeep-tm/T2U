import { FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/rootActions';

const initalState = {
    requestPending: false,
    users: [],
    error: null
};

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            
            break;

        case FETCH_PENDING:

            break;

        case FETCH_FAILURE:

            break;

        default:
            return state;
    }
};

export default rootReducer;