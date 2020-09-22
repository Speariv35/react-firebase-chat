import React from 'react';

function ChannelInfo({channel}) {
    return  (
        <div className="ChannelInfo">
            <div className="Topic">
                Topic: <input type="text" className="TopicInput" value={channel?.topic}/>
            </div>
            <div className="ChannelName">#{channel?.id}</div>
        </div>
    )
}

export default ChannelInfo;
