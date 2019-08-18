import { GET_API_DATA_SUCCESS } from './actions';

const initialState = {
    dataList: [],
}

export default (state = initialState, { type, payload }) => {
console.log(payload)
  switch (type) {
    case GET_API_DATA_SUCCESS:
      return {
        ...state,
        dataList: [...payload]
      }

    default:
      return state;
  }
};