import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {

  initMap() {
    let mesquite = {lat: 32.7668, lng: -96.5992};
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: mesquite,
      zoom: 12
    });
  }

  /**
   * Gets the first script element on page, 
   * creates a script element and inserts it
   * before the first script element on page
   */
  insertScript() {
    let script = this.createScript();
    let firstScriptElem = window.document.getElementsByTagName("script")[0];
    firstScriptElem.parentNode.insertBefore(script, firstScriptElem);
    window.initMap = this.initMap;

  }

  /**
   * Creates script tap
   */
  createScript() {
    let script = window.document.createElement("script");
    const API_KEY = "AIzaSyBs819gHKuu3HoieR6JWmgsKPCiKWFxF7w";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    return script;
  } 

  render() {
    this.insertScript();
    
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
