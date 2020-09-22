import React from 'react';
import {addMessage} from "../firebase";

function ChannelInputBox({channelId, user}) {

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        addMessage(user, channelId, value )
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmitMessage} className="ChatInputBox">
            <input name="message" className="ChatInput" placeholder={`Message #${channelId}`}/>
        </form>
    )
}

export default ChannelInputBox;
