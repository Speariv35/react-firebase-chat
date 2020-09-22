import React from 'react';
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import Members from "./Members";

function Channel({user, channelId, channels}) {
    const channel = channels.find(channel => channel.id === channelId)
    return (
        <div className="Channel">
            <div className="ChannelMain">
                <ChannelInfo channel={channel}/>
                <Messages channelId={channelId}/>
                <ChatInputBox channelId={channelId} user={user}/>
            </div>
            <Members/>
        </div>
    )
}

export default Channel;
