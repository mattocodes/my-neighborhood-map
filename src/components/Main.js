import React, { Component } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Map />
                <Sidebar />
            </div>
        )
    }
}

export default Main;