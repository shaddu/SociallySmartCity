import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Profile from './Profile';
import Feed from './Feed';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <>
                <NavBar />
                <Profile />
                <Feed />

                <button className="button is-info" style={{ bottom: 10, position: "fixed", float: "right", right: "15%", left: "85%" }}>Chat with Us ?</button>
            </>
        )
    }
}
