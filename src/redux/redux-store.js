import {combineReducers, createStore} from "redux";
import MessagesReducer from "./messages-reducer";


const redusers = combineReducers({
    messagesReducer: MessagesReducer
});

let store = createStore(redusers);

export default store;