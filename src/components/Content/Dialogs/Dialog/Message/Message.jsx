import './Message.css'

const Message = (props) => {
    return (
        <div className="message">
            <div className="message-logo">
                <img src="https://www.blast.hk/attachments/68493/"></img>
            </div>
            <div className="message-name">{props.message}</div>
        </div>
    );
}
export default Message;