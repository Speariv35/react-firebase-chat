import React from "react";
import useDoc from "../utils/useDoc";
import {formatDate} from "../utils/helpers";

function FirstMessageFromUser({message, showDay}) {
    const author = useDoc(message.user.path);
    return (
        <div key={message.id}>
            {showDay && (
                <div className="Day">
                    <div className="DayLine"/>
                    <div className="DayText">{formatDate(message.createdAt.seconds*1000, 'dd.MM.yy')}</div>
                    <div className="DayLine"/>
                </div>
            )}
            <div className="Message with-avatar">
                <img src={author && author.photoUrl} alt="UserImage" className="Avatar"/>
                <div className="Author">
                    <div>
                        <span className="UserName">{author && author.name} </span>
                        <span className="TimeStamp">{formatDate(message.createdAt.seconds*1000, 'HH:mm')}</span>
                    </div>
                    <div className="MessageContent">
                        {message.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstMessageFromUser;
