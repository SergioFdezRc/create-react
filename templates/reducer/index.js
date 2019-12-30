import {combineReducers} from "redux";
import ${NAME}Reducer from "./${NAME}.reducer";

const rootReducer = combineReducers({
	${NAME}State: ${NAME}Reducer,
});

export default rootReducer;
