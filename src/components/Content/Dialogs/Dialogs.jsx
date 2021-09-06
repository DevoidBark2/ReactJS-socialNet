import React from 'react';
import Dialog from './Dialog/Dialog'
import Message from './Dialog/Message/Message'
import './Dialogs.css'
const Dialogs = (props) => {

    let Dialogs = props.NameData.map((name) => <Dialog name={name.name} />);
    let Messages = props.MessageData.map((mess) => <Message message={mess.message} />);
    let NewMessage = React.createRef();
    let AddMessage = () => {
        let text = NewMessage.current.value;
    }

    return (
        <div className="dialogs">
            <div className="dialog">
                {Dialogs}
            </div>
            <div className="message-block">
                {Messages}
                <div className="message-textarea">
                    <textarea placeholder="Write message..."></textarea>
                    <button ref={NewMessage} onClick={AddMessage} className="message-send">Send</button>
                </div>
            </div>
            
        </div>
    );
}
export default Dialogs;