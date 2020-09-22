import React from 'react';
import Nav from './component/Nav'
import Channel from './component/Channel'
import useAuth from "./utils/useAuth";
import Login from "./component/Login";
import {Router} from '@reach/router'
import useCollection from "./utils/useCollection";
import Welcome from "./component/Welcome";

function App() {
    const user = useAuth();
    const channels = useCollection('channels');
    return user ? (
        <div className="App">
            <Nav user={user} channels={channels}/>
            <Router>
                <Channel path="channel/:channelId" user={user} channels={channels}/>
                <Welcome path="/"/>
            </Router>
        </div>
    ) : (
        <Login/>
    )
}

export default App;
