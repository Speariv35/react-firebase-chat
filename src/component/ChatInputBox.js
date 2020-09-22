import React from 'react';
import {addMessage} from "../firebase";

function ChannelInputBox({channelId, user}) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const value = event.target.elements[0].value;
            addMessage(user, channelId, value )
            event.target.reset();
        }} className="ChatInputBox">
            <input name="message" className="ChatInput" placeholder={`Message #${channelId}`}/>
        </form>
    )
}

export default ChannelInputBox;
