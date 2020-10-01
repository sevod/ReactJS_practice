const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    messages: [
        {id:1, message: 'Hello world'},
        {id:2, message: 'Hi!'}
    ]
};

const MessagesReducer = (state = initialState, action) =>{
    if (action.type === ADD_MESSAGE)
        console.log('Reducer: ' + ADD_MESSAGE);

    return state;
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export default MessagesReducer;