import React from 'react';
import {addMessage, changeChannelTopic} from "../firebase";

function ChannelInfo({channel}) {

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        changeChannelTopic( channel, value )
        event.target.reset();
    };

    return  (
        <div className="ChannelInfo">
            <form onSubmit={handleSubmitMessage} className="Topic">
                Topic: <input name='topic'  className="TopicInput" placeholder={channel?.topic} />
            </form>
            <div className="ChannelName">#{channel?.id}</div>
        </div>
    )
}

export default ChannelInfo;
