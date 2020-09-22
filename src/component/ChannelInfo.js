import React from 'react';

function ChannelInfo({channel}) {
    return  (
        <div className="ChannelInfo">
            <div className="Topic">
                Topic: <span  className="TopicInput">{channel?.topic}</span>
            </div>
            <div className="ChannelName">#{channel?.id}</div>
        </div>
    )
}

export default ChannelInfo;
