import {
    ${UNAME}_REQUEST_STARTED, ${UNAME}_REQUEST_SUCCEEDED, ${UNAME}_REQUEST_FAILED, ${UNAME}_REQUEST_CANCELLED,
} from "../constants/actionTypes";

const requestStarted${CNAME}Action = (query) => ({
    type: ${UNAME}_REQUEST_STARTED,
    payload: {query}
});

const requestSucceeded${CNAME}Action = ${NAME}Info => ({
    type: ${UNAME}_REQUEST_SUCCEEDED,
    payload: {${NAME}Info}
});

const requestFailed${CNAME}Action = (error) => ({
    type: ${UNAME}_REQUEST_FAILED,
    payload: {error}
});

const requestCancelled${CNAME}Action = query => ({
    type: ${UNAME}_REQUEST_CANCELLED,
    payload: {query}
});

export {requestStarted${CNAME}Action, requestSucceeded${CNAME}Action, requestFailed${CNAME}Action, requestCancelled${CNAME}Action};
