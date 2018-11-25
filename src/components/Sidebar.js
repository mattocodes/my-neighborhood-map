import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        let locations = this.props.locations;

        return (
            <div className="sidebar">
                <h4>Places To Munch</h4>        
                <input 
                    type="text"
                >
                </input>
                <ol>
                    {
                        locations.map((item, index) => (
                            <li key={index} className="list-item">
                                <button 
                                    type="button"
                                    onClick={() => this.props.identifyMarker(item)}
                                >
                                    {item.venue.name}
                                </button>

                            </li>
                        ))
                    }
                </ol>
            
            </div>
           
        )
    }
}

export default Sidebar;
