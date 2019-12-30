import {
    ${UNAME}_REQUEST_STARTED,
    ${UNAME}_REQUEST_SUCCEEDED,
    ${UNAME}_REQUEST_FAILED,
    ${UNAME}_REQUEST_CANCELLED
} from "../constants/actionTypes";


const INITIAL_STATE = {
    error: null,
    isLoading: true,
};

const applyRequestStarted${CNAME} = () => ({
    isLoading: true,
    cancelled: false,
    cancelSource: null,
});


const applyRequestSucceeded${CNAME} = (state, action) => ({
    isLoading: false,
});

const applyRequestFailed${CNAME} = (state, action) => ({
    isLoading: false,
    error: action.payload.error
});

const applyRequestCancelled${CNAME} = (state, action) => ({
    isLoading: true,
    cancelled: true,
    error: null,
});

function ${NAME}Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ${UNAME}_REQUEST_STARTED:
            return applyRequestStarted${CNAME}(state, action);
        case ${UNAME}_REQUEST_SUCCEEDED:
            return applyRequestSucceeded${CNAME}(state, action);
        case ${UNAME}_REQUEST_FAILED:
            return applyRequestFailed${CNAME}(state, action);
        case ${UNAME}_REQUEST_CANCELLED:
            return applyRequestCancelled${CNAME}(state, action);
        default:
            return state;
    }
}

export default ${NAME}Reducer;

