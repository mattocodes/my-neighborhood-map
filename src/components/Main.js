import React, { Component } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

class Main extends Component {
    state = {
        locations: []
    }

    componentDidMount() {
        this.getLocations()
            .then(response => this.setState( {locations: response} ))
            
    }

    //Get Location Data
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


    render() {
        console.log(this.state.locations)
        return (
            <div className="main">
                <Map />
                <Sidebar />
            </div>
        )
    }
}

export default Main;