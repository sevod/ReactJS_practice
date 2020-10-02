import React, {useState} from "react";
import {connect} from "react-redux";
import {addMessage} from "../../redux/messages-reducer";


let ref = React.createRef();

const Messages = (props) => {
    const [message, setMessage] = useState('');
    return (
      <div>
          <h1>Messages</h1>
          <ul>
              {props.messages.map(message => (
                  <li key={message.id}>{message.message}</li>
              ))}
          </ul>
          <div>
              <input type="text" id="message_id" placeholder="add new message" ref={ref}  />
              {/*<button onClick={() => props.addMessage(document.getElementById("message_id").value)}>Send</button>*/}
              <button onClick={() => props.addMessage(ref.current.value)}>Send</button>

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
        addMessage: (message) => {dispatch(addMessage(message))},
        //addMessage: () => {dispatch({type: 'ADD_MESSAGE'})}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;