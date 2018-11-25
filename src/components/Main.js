import React, { Component } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

/**
 * Code inspired by Kenny's walkthrough 
 * video (https://www.youtube.com/watch?v=CCv8JrGVgYQ)
 * 
 */

class Main extends Component {
    state = {
        locations: [],
        allLocations: [],
        query: ""
    }

    componentDidMount() {
        this.getLocations()
            .then(response => this.setState( {locations: response, allLocations: response} ))
            
    }

    /**
     * Get Location Data
     * This makes use of Foursquare Places API to 
     * get location data
     */
    getLocations () {
        const CLIENT_ID = 'LHRJUNUIFH3UXQAWKMUJLAJC3KRLOINLS3RHITDV4FLYDW43',
            CLIENT_SECRET = 'LULHSUFNWDBQ32BMINI54Y2SYNJM342DGTNBWDG0XCA0P5QW',
            QUERY = 'food',
            NEAR = 'Mesquite,TX',
            VERSION = 20181117,
            LIMIT = 10,
            baseURL = 'https://api.foursquare.com/v2/venues/explore?',
            queryParam = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}&near=${NEAR}&limit=${LIMIT}&query=${QUERY}`,
            queryURL = baseURL + queryParam;
    
        
        return fetch(queryURL)
         .then(response => response.json())
         .then(data => data.response.groups[0].items);
     
    }

    /**
     * Identifies marker on map and shows marker's infowindow 
     * based on clicked locations on the Sidebar
     * 
     */
    identifyMarker(location) {
        for (let i=0; i < window.markers.length; i++) {
            if (location.venue.id === window.markers[i].title) {
                window.infowindow.setContent(     
                    `<div className="infoWindow">
                        <h3> 
                            ${location.venue.name}
                        </h3>
                        <p>${location.venue.location.address} </p>
                    </div>
                    `
                )

                // Bounce Marker Animation
                // Set All Marker Animation to Null
                for (let j = 0; j < window.markers.length; j++){
                    window.markers[j].setAnimation(null);
                }
                
                // Set Marker Animation to Bounce
                window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);

                window.infowindow.open(window.mapObject, window.markers[i]);
            }
        }

        

    }



    getQueryValue = (query) => {
        this.setState( {query} );
        if (query) {
            this.setState({locations: this.filterLocations(query, this.state.locations)})
        } else {
            this.setState( {locations: this.state.allLocations} )
        }

    }

    filterLocations = (query, locations) => {
        return locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()));

    }


    render() {
        return (
            <div className="main">
                <Map locations={this.state.locations} />
                <Sidebar 
                    locations={this.state.locations}
                    identifyMarker={this.identifyMarker}
                    query={this.state.query}
                    getQueryValue = {this.getQueryValue} 
                />
            </div>
        )
    }
}

export default Main;