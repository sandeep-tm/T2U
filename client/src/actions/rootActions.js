
export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const rootActions = (() => {
    'use strict';

    let fetchPending = (QueryType) => {
        return {
            type: FETCH_PENDING,
            querytype: QueryType
        };
    };

    let fetchSuccess = (QueryType, Data) => {
        return {
            type: FETCH_SUCCESS,
            querytype: QueryType,
            data: Data
        };
    };

    let fetchFailure = (QueryType, Data) => {
        return {
            type: FETCH_FAILURE,
            querytype: QueryType,
            data: Data
        };
    };

    return {
        fetchPending: fetchPending,
        fetchSuccess: fetchSuccess,
        fetchFailure: fetchFailure
    };
})();