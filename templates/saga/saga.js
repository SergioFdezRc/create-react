import {call, put, cancelled} from "redux-saga/effects";
import {requestSucceeded${CNAME}Action, requestFailed${CNAME}Action, requestCancelled${CNAME}Action} from "../actions/${NAME}.actions";
import {metricService} from "../api";
import request from '../_helpers/request-axios'

let isCancelled;

function* handleFetch${CNAME}(action) {
    const {query} = action.payload;
    try {
        //const response = yield call(metricService.fetchStations, query);
        yield put(requestSucceeded${CNAME}Action(response));
    } catch (error) {
        yield put(requestFailed${CNAME}Action(error));
    } finally {
        if (yield cancelled()) {
            isCancelled = true;
            yield put(requestCancelled${CNAME}Action(request.getCancelTokenSource()));
        }
    }
}

export {handleFetch${CNAME}};

