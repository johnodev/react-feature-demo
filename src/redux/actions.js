export const GET_API_DATA_REQUEST = 'GET_API_DATA_REQUEST';
export const getApiDataRequest = () => ({ type: GET_API_DATA_REQUEST });

export const GET_API_DATA_SUCCESS = 'GET_API_DATA_SUCCESS';
export const getApiDataSuccess = dataList => ({ type: GET_API_DATA_SUCCESS, payload: dataList });
