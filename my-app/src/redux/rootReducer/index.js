import * as actions from "../actionTypes";

const initialState = {
  allComplexs: [],
  allReviews:[],
  complexs: [],
  detail: {},
  currentUser: null,
  sports:[],
  services:[],
  favUser:[],
  allUsers:[],
  users:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_COMPLEX:
      return {
        ...state,
        allComplexs: action.payload.data,
        complexs: action.payload.logic,
      };
    case actions.GET_COMPLEX_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
      case actions.GET_USER_DETAIL:
        return {
          ...state,
          currentUser: action.payload
        };
    case actions.GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case actions.GET_ALL_TYPECOURT:
      return {
        ...state,
        sports: action.payload,
      };
    case actions.FILTER_BY_SPORT:
      return {
        ...state,
        complexs: action.payload,
      };
    case actions.FILTER_BY_SERVICE:
      return {
        ...state,
        complexs: action.payload,
      };
    case actions.FILTER_BY_AZ:
      return {
        ...state,
        complexs: action.payload,
      };
    case actions.SEARCH_BY_CITY:
      return {
        ...state,
        complexs: action.payload,
      };
    case actions.ADD_FAVORITE:
      return {
        ...state,
        favUser: action.payload,
      };
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:{...action.payload,rol:"admin"}
      };
    case actions.LOGOUT_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case actions.CHECK_USER_SESSION:
      return {
        ...state,
        currentUser: action.payload,
      };
    case actions.GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload.api,
        users:action.payload.logic
      };
    case actions.GET_ALL_REVIEW:
      return {
        ...state,
        allReviews: action.payload,
      };
    case actions.UPDATE_FAVORITES:
      return {
        ...state,
        currentUser: {...state.currentUser, favorites:[...state.currentUser.favorites, ...action.payload]},
      };
    case actions.UPDATE_FAVORITES_DEL:
      return {
        ...state,
        currentUser: {...state.currentUser, favorites:action.payload},
      };

    default:
      return state

  }
};

export default rootReducer;

