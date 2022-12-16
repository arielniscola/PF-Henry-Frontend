import * as actions from "../actionTypes";

const initialState = {
  allComplexs: [],
  complexs: [],
  detail: {},
  currentUser: null,
  sports:[],
  services:[],
  favorites:[],
  allUsers:[],
  users:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_COMPLEX:
      return {
        ...state,
        allComplexs: action.payload.api,
        complexs: action.payload.borradoLogico,
      };
    case actions.GET_COMPLEX_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case actions.GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case actions.GET_ALL_SPORTS:
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
        favorites: action.payload,
      };
    case actions.GET_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites ,action.payload],
      };
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
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
        users:action.payload.borradoLogico
      };
    default:
      return state;
  }
};

export default rootReducer;

