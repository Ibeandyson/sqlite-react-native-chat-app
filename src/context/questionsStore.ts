import Store from './Store';

const initial_state = {
  questions: {},
  options: [],
  count: 1,
  loading: false,
   end: false
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

      case actions.SET_END:
      return {
        ...state,
        end: action.payload,
      };
    case actions.GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case actions.GET_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case actions.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export const { Provider, useStore, useDispatch } = Store(
  initial_state,
  reducer,
);

export const actions = {
  GET_QUESTIONS: 'GET_QUESTIONS',
  GET_OPTIONS: 'GET_OPTIONS',
  SET_COUNT: 'SET_COUNT',
  SET_LOADING: 'SET_LOADING',
  SET_END: 'SET_END'
};
