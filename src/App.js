import React from 'react';
import Nav from './component/Nav'
import Channel from './component/Channel'
import useAuth from "./utils/useAuth";
import Login from "./component/Login";


function App() {
    const user = useAuth();

    return user ? (
        <div className="App">
            <Nav user={user}/>
            <Channel user={user}/>
        </div>
    ) : (
    <Login />
    )
}

export default App;
