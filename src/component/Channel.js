import React, {useEffect} from 'react';
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import Members from "./Members";
import {db} from "../firebase";

function Channel({user, channelId, channels}) {
    const channel = channels.find(channel => channel.id === channelId)

    useEffect(() => {
        db.doc(`users/${user.uid}`)
            .update({
                    channels: {
                        [channelId]: true
                    }
                }
            )
    },[user.uid, channelId])
    return (
        <div className="Channel">
            <div className="ChannelMain">
                <ChannelInfo channel={channel}/>
                <Messages channelId={channelId}/>
                <ChatInputBox channelId={channelId} user={user}/>
            </div>
            <Members channelId={channelId}/>
        </div>
    )
}

export default Channel;
