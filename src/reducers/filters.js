// This is the filters reducer
import moment from 'moment';

const filtersDefaultState = {
    text: '',
    startDate: '',
    endDate: ''
};
const filtersReducer = (state = filtersDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.newText
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default filtersReducer