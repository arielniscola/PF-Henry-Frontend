import * as actions from "../actionTypes";

const initialState = {
  allComplexs: [],
  complexs: [],
  detail: {},
  currentUser: { 
    isLogged:false,
    isOwner: true 
  },
  sports:[],
  services:[],
  favorites:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_COMPLEX:
      return {
        ...state,
        allComplexs: action.payload,
        complexs: action.payload,
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
    default:
      return state;
  }
};

export default rootReducer;

