import React from 'react';
import useCollection from "../utils/useCollection";
import * as firebase from "firebase";

function Nav({user}) {
    const channels = useCollection('channels');

    const handleLogOut = () => {
        firebase.auth().signOut();
    }

    return (
        <div className="Nav">
            <div className="User">
                <img
                    className="UserImage"
                    alt="whatever"
                    src={user.photoUrl}
                />
                <div>
                    <div>{user.name}</div>
                    <div>
                        <button onClick={handleLogOut} className="text-button">log out</button>
                    </div>
                </div>
            </div>
            <nav className="ChannelNav">
                {channels.map(channel => (
                    <a key={channel.id} href={`/channel/${channel.id}`}># {channel.id}</a>
                ))}
            </nav>
        </div>
    )
}

export default Nav;

