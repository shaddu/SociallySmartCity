import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

import { formatAmount } from './utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBolt } from '@fortawesome/free-solid-svg-icons'

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            monthlyIncome: 20000
        }
    }

    render() {

        return (
            <NavBar/>
        )
    }
}
