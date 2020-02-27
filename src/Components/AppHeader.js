import React, { Component } from 'react';

// import { observer, inject } from 'mobx-react/native';

// @inject('store')
// @observer
export default class AppHeader extends Component {
    render() {
        return (

            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/private">Private</a>
                </li>
            </ul>
        );
    }
}