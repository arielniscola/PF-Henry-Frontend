import * as actions from '../actionTypes'

const initialState = {
    allComplex: [],
    complexs: [],
    detail:{}

}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
    case actions.GET_ALL_COMPLEX:
            return{
                ...state,
                allComplex: action.payload,
                complexs: action.payload
            }
    case actions.GET_COMPLEX_DETAIL:
        return{
            ...state,
            detail: action.payload
        }
        default: return state
    }

}

export default rootReducer