import React from 'react';
import {Link} from "@reach/router";
import {handleLogOut} from "../firebase";

function Nav({user, channels}) {
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
                    <Link key={channel.id} to={`/channel/${channel.id}`}># {channel.id}</Link>
                ))}
            </nav>
        </div>
    )
}

export default Nav;

