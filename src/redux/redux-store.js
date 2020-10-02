import {combineReducers, createStore} from "redux";
import MessagesReducer from "./messages-reducer";


const reducers = combineReducers({
    messagesReducer: MessagesReducer
});

let store = createStore(reducers);

export default store;