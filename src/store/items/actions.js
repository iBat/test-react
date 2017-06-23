import { CALL_API } from 'redux-api-middleware';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function fetchUsers() {
    return {
        [CALL_API]: {
            endpoint: 'http://beta.json-generator.com/api/json/get/EynpIuEXX',
            method: 'GET',
            types: [FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE]
        }
    }
}

export function addEmployee(employee) {
    return {
        type: ADD_EMPLOYEE,
        payload: employee
    }
}
