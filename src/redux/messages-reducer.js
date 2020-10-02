const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello world'}
    ]
};

const MessagesReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            messages: [...state.messages, {id: state.messages.length + 1, message: action.message}]
        }
    }
    return state;
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export default MessagesReducer;