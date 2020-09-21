import React from 'react';
import useCollection from "../utils/useCollection";
import FirstMessageFromUser from "./FirstMessageFromUser";

function Messages({channelId}) {
    const messages = useCollection(`channels/${channelId}/messages`, 'createdAt');
    return (
        <div className="Messages">
            <div className="EndOfMessages">That's every message!</div>
            {messages.map((message, index) => {
                const prev = messages[index - 1];
                const showAvatar = message.user.id !== prev?.user.id;
                const showDay = false;
                return showAvatar ? (
                    <FirstMessageFromUser
                        message={message}
                        showDay={showDay}/>
                ) : (
                    <div key={message.id}>
                        <div className="Message no-avatar">
                            <div className="MessageContent">
                                {message.text}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}


export default Messages;
