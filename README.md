# My Neighborhood Map App

This is the final project for Udacity's Front-End Nanodegree program. The goal of this project was to create a single page web app featuring locations within my neighborhood on a map. The project emphasizes the use of React and third-party APIs such as Google Maps API and Foursquare Places API to code the app. Furthermore, the project incorporates other programming concepts learned so far such as responsive design, web accessibility, and offline first web principles.



## Getting Started

To get started with My Neighborhood Map App:

* clone or download the files by clicking on the green "Clone or download" button at the top of this page
* install all project dependencies with `npm install`
* start the server with `npm start`



## Folder Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Contains the root div
└── src
    ├── Components # Folder that contains web app components
    │   ├── Header.js # Contains web page header
    │   ├── Main.js # Manages app's state information & contains the Sidebar & Map components
    │   ├── Map.js # Contains map information
    │   └── Sidebar.js # Contains a list of location data
    ├── App.css # Contains styles for the app.
    ├── App.js # This is the root JS file for the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only
    ├── logo.svg # React logo. Provided with Create React App   
    └── serviceWorker.js # Used for offline website viewing. Provided with Create React App  
    
```



## Important

Service worker was enabled for this project. However, service worker will only work in production build not in development build. You may run the app in production build by doing the following:

* at the terminal, enter `npm run build`
* and then, `server -s build`
* in your browser, type: `localhost:5000`



## Credits

This project made use of [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) to display the map and also [Foursquare Places API](https://developer.foursquare.com/docs/api) to get location data that were used on the map. 



## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



## License

The contents of this repository are covered under the [MIT Licence](#)