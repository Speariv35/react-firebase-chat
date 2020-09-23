import React from 'react';
import {Link} from "@reach/router";
import {addChannel, handleLogOut} from "../firebase";

function Nav({user, channels}) {

    const handleCreateChannel = (event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        addChannel(value)
        event.target.reset();
    };

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
                    <Link className='NavChannel' key={channel.id} to={`/channel/${channel.id}`}># {channel.id}</Link>
                ))}
            </nav>
            <form onSubmit={handleCreateChannel} className="ChannelCreateInputBox">
                <input name="channel" className="ChannelCreateInput" placeholder={`Type to add topic!`}/>
            </form>
        </div>
    )
}

export default Nav;

