import React, { Component } from 'react';

/**
 * Code inspired by Kenny's walkthrough 
 * video (https://www.youtube.com/watch?v=CCv8JrGVgYQ)
 * 
 */

class Map extends Component {

    markers = [];
    infowindow;

    insertMarkers = locations => {
        if (window.google) {
            this.infowindow = new window.google.maps.InfoWindow();
            for (let i = 0; i < locations.length; i++) {
                let marker = new window.google.maps.Marker({
                    position: {
                        lat: locations[i].venue.location.lat,
                        lng: locations[i].venue.location.lng
                    },
                    map: window.mapObject,
                    title: locations[i].venue.id,
                    animation: window.google.maps.Animation.DROP
                });

                // Add Event Listener for Info Window
                marker.addListener('click', () => {
                    // Set Info Window Content
                    this.infowindow.setContent(
                        `<div className="infoWindow">
                            <h3> 
                                ${locations[i].venue.name}
                            </h3>
                            <p>
                                ${locations[i].venue.location.address} <br/> <br/>
                                ${locations[i].venue.location.city}, 
                                ${locations[i].venue.location.state}
                            
                            </p>
                        </div>
                        `
                    )
                    this.infowindow.open(window.mapObject, marker);
                });

                this.markers.push(marker)
            }
            window.markers = this.markers;
            window.infowindow = this.infowindow; 
        }
    }

    //Removes Markers
    removeMarkers = () => {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
    }


    render() {
        this.removeMarkers();
        this.insertMarkers(this.props.locations);
        return (
            <div 
                id="map" 
                aria-label="map" 
                role="application"
            >
            </div>
            
        )
    }
}

export default Map;