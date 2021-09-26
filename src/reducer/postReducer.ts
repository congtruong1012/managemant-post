import produce from 'immer';
import { Action } from 'redux';

const initialState = {
  data: [],
};
const postReducer = (draft = initialState, action: Action) =>
  produce(draft, (state) => {
    const { type } = action;
    switch (type) {
      case 'GET_POST':
        draft.data = state.data;
    }
  });

export default postReducer;
