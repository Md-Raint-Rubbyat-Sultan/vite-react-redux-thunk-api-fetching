import { createStore, applyMiddleware, combineReducers } from "redux";
import { phoneHunterReducer, counterReducer } from "./services/reducers/PhoneHunterReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    phoneReducer: phoneHunterReducer,
    counterReducer: counterReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;