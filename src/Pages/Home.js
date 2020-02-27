import React, { Component } from 'react';
import AppHeader from '../Components/AppHeader';
// import { observer, inject } from 'mobx-react/native';

// @inject('store')
// @observer
export default class Home extends Component {

    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <h2>Home</h2>
            </div>
        );
    }
}