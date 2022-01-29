import Store from './Store';

const initial_state = {
  answer: ""
}

const reducer = (state: any, action: any) => {
  switch (action.type) {

    case actions.GET_ANSWER:
      return {
        ...state,
        answer: action.payload,
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
  GET_ANSWER: 'GET_ANSWER',
};
