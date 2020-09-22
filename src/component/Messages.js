import React, {useRef} from 'react';
import useCollection from "../utils/useCollection";
import MessageWithAvatar from "./MessageWithAvatar";
import {shouldShowAvatar, shouldShowDay} from "../utils/helpers";
import useSmartScroll from "../utils/useSmartScroll";

function Messages({channelId}) {
    const messages = useCollection(`channels/${channelId}/messages`, 'createdAt');
    const scrollerRef = useRef();
    useSmartScroll(scrollerRef)

    return (
        <div ref={scrollerRef} className="Messages">
            <div className="EndOfMessages">That's every message!</div>
            {messages.map((message, index) => {
                const showAvatar = shouldShowAvatar(messages[index - 1], message)
                const showDay = shouldShowDay(messages[index - 1], message);
                return showAvatar ? (
                    <MessageWithAvatar
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
                );
            })
            }
        </div>
    )
}

export default Messages;
