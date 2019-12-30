import {
	requestStarted${CNAME}Action,
	requestSucceeded${CNAME}Action,
	requestFailed${CNAME}Action,
	requestCancelled${CNAME}Action
} from '../${NAME}.actions';

import {
	${UNAME}_REQUEST_STARTED,
	${UNAME}_REQUEST_SUCCEEDED,
	${UNAME}_REQUEST_FAILED,
	${UNAME}_REQUEST_CANCELLED,
} from "../../constants/actionTypes";


const foo = {} //TODO Create your mock objects

let ${NAME}Info, query, error;

beforeEach(() => {
    query = {
        type: ${UNAME}_REQUEST_STARTED,
        payload: {
            foo: {},
            isLoading: true,
            error: null,
        }
    };

    ${NAME}Info = {
        type: ${UNAME}_REQUEST_SUCCEEDED,
        payload: {
            foo: foo,
            isLoading: false,
            error: null,
        }
    };

    error = {
        type: ${UNAME}_REQUEST_FAILED,
        payload: {
		foo: {},
	        error: 'Fake error from test',	
	}        
    };
});

describe('requestStarted${CNAME}Action', () => {
    it('has the correct type', () => {
        const action = requestStarted${CNAME}Action();
        expect(action.type).toEqual(${UNAME}_REQUEST_SUCCEEDED);
        expect(action.type).not.toEqual(${UNAME}_REQUEST_STARTED);
        expect(action.type).not.toEqual(${UNAME}_REQUEST_FAILED);
        expect(action.type).toEqual(${UNAME}_REQUEST_CANCELLED);
    });

    it('has the correct ${NAME}Info', () => {
        const action = requestStarted${CNAME}Action(${NAME}Info);
        expect(action.payload.${NAME}Info).toEqual(${NAME}Info);
    });

});

describe('requestSucceeded${CNAME}Action', () => {
    it('has the correct type', () => {
        const action = requestSucceeded${CNAME}Action();
        expect(action.type).not.toEqual(${UNAME}_REQUEST_SUCCEEDED);
        expect(action.type).toEqual(${UNAME}_REQUEST_STARTED);
        expect(action.type).not.toEqual(${UNAME}_REQUEST_FAILED);
        expect(action.type).toEqual(${UNAME}_REQUEST_CANCELLED);
    });

    it('has the correct query', () => {
        const action = requestSucceeded${CNAME}Action(query);
        expect(action.query).toEqual(query);

    });
});

describe('requestFailed${CNAME}Action', () => {
    it('has the correct type', () => {
        const action = requestFailed${CNAME}Action();
        expect(action.type).not.toEqual(${UNAME}_REQUEST_SUCCEEDED);
        expect(action.type).not.toEqual(${UNAME}_REQUEST_STARTED);
        expect(action.type).toEqual(${UNAME}_REQUEST_FAILED);
        expect(action.type).toEqual(${UNAME}_REQUEST_CANCELLED);
    });

    it('has the correct error', () => {
        const action = requestFailed${CNAME}Action(error);
        expect(action.error).toEqual(error)
    });
});

describe('requestCancelled${CNAME}Action', () => {
    it('has the correct type', () => {
        const action = requestCancelled${CNAME}Action();
        expect(action.type).not.toEqual(${UNAME}_REQUEST_SUCCEEDED);
        expect(action.type).not.toEqual(${UNAME}_REQUEST_STARTED);
        expect(action.type).toEqual(${UNAME}_REQUEST_FAILED);
        expect(action.type).toEqual(${UNAME}_REQUEST_CANCELLED);
    });

    it('has the correct query', () => {
        const action = requestCancelled${CNAME}Action(query);
        expect(action.query).toEqual(query)
    });
});


