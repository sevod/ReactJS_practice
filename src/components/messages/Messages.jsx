import React from "react";
import {connect} from "react-redux";
import {addMessage} from "../../redux/messages-reducer";

const Messages = (props) => {
    return (
      <div>
          {console.log("Messages")}
          <h1>Messages</h1>
          <ul>
              {props.messages.map(message => (
                  <li key={message.id}>{message.message}</li>
              ))}
          </ul>
          <div>
              <input type="text" placeholder="add new message"/>
              <button onClick={() => props.addMessage()}>Send</button>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessage())}
        //addMessage: () => {dispatch({type: 'ADD_MESSAGE'})}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;