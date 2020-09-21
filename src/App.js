import React from 'react';
import Nav from './component/Nav'
import Channel from './component/Channel'
import useAuth from "./utils/useAuth";
import Login from "./component/Login";
import {Router, Redirect} from '@reach/router'

function App() {
    const user = useAuth();

    return user ? (
        <div className="App">
            <Nav user={user}/>
            <Router>
                <Channel path="channel/:channelId" user={user}/>
                <Redirect from="/" to="channel/general"/>
            </Router>
        </div>
    ) : (
        <Login/>
    )
}

export default App;
