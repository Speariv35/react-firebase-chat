import React from 'react';
import useCollection from "../utils/useCollection";

function Members({channelId}) {
    const members = useCollection('users', null, [`channels.${channelId}`, '==', true])
    return (
        <div className="Members">
            {members.map((member, index) => {
                return (
                    <div key={index}>
                        <div className="Member">
                            <div key={member.id} className={`MemberStatus ${member?.status?.state}`}/>
                            {member.name}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Members;
