import ${NAME}Reducer from '../${NAME}.reducer';
import {${UNAME}_REQUEST_SUCCEEDED,
	${UNAME}_REQUEST_STARTED,
	${UNAME}_REQUEST_FAILED,
	${UNAME}_REQUEST_CANCELLED}from "../../constants/actionTypes";


describe('Handling actions of ${NAME} reducer', () => {
	it('handles actions of type ${UNAME}_REQUEST_SUCCEEDED', () => {
		const action = {
			type: ${UNAME}_REQUEST_SUCCEEDED,
            		payload: {
				${NAME}Info: [],	
				isLoading: false,
				error: null            	
			}
		};
        

        	const newState = ${NAME}Reducer({}, action);
		console.log("${CNAME}Info->\nExpected: " + newState + "\n" + "Received: " + action);
		expect(newState.payload.${NAME}Info).toEqual(action.payload.${NAME}Info);

		console.log("Error state to be null and is %s", newState.payload.error);
		expect(newState.payload.error).toBeNull();

		console.log("isLoading must be false");
		expect(newState.payload.isLoading).toBeFalsy();

	});

	it('handles  actions of type ${UNAME}_REQUEST_STARTED', () => {
		const action = {
			type: ${UNAME}_REQUEST_STARTED,
			payload: {
				${NAME}Info: [],
				isLoading: true,
				error: null,
				cancelled: false,
				cancelSource: null,
		    }
		};

		const newState = ${NAME}Reducer({}, action);
		console.log("${CNAME}Info->\nExpected: " + newState.payload + "\n" + "Received: " + action.payload);
		expect(newState.payload).toEqual(action.payload);
	});

	it('handles actions of type ${UNAME}_REQUEST_FAILED', () => {
		const action = {
			type: ${UNAME}_REQUEST_FAILED,
			payload: {
				${NAME}Info: [],
				error: 'Fake error from test'
			}
		};
		const newState = ${NAME}Reducer({}, action);
		console.log("Error->\nExpected: " + newState.payload.error + "\n" + "Received: " + action.payload.error);
		expect(newState.payload.error).toEqual(action.payload.error);
		console.log("${Name}Info->\nExpected: " + newState.payload.${NAME}Info + "\n" + "Received: " + action.payload.${NAME}Info);
		expect(newState.payload.${NAME}Info).toEqual([]);

	});

	it('handles actions of type ${UNAME}_REQUEST_CANCELLED', () => {
		const action = {
			type: ${UNAME}_REQUEST_CANCELLED,
			payload: {
				${NAME}Info: [],
				isLoading: true,
				cancelled: true,
				error: null
			}
		};
		const newState = ${NAME}Reducer({}, action);
		console.log("Error->\nExpected: " + newState.payload.cancelled + "\n" + "Received: " + action.payload.cancelled);
		expect(newState.payload.cancelled).toEqual(action.payload.cancelled);
		console.log("${Name}Info->\nExpected: " + newState.payload.${NAME}Info + "\n" + "Received: " + action.payload.${NAME}Info);
		expect(newState.payload.${NAME}Info).toEqual([]);

	});	

});

