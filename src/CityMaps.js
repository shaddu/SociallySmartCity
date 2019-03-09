import React from 'react';
import NavBar from './navbar';
import Profile from './Profile';
import Feed from './Feed';
import ChatBox from './ChatBox';

export class CityMaps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatboxOpen: false
        }
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(){
        this.setState((prev, props) =>{
            const newState = !prev.chatboxOpen;
            return {chatboxOpen:newState};
        });
    }

    render() {

        return (
           <h1>CityMaps</h1>
        )
    }
}
