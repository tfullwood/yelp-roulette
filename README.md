# Yelp Roulette

## Getting Started

### Prerequisites
Get a [Yelp developer](https://www.yelp.com/developers) account and sign up for a [Mapbox account](https://www.mapbox.com/).

### Installing
Navigate to project root and run `yarn install` to download dependencies. Rename .env.example and add your Express server url and Mapbox token. Navigate to the server directory and run `yarn install`. Rename .env.example and add your Yelp token.

Run `yarn start` to start the Express server. Open another terminal window and run `yarn start` from the project root to start the React app. The React app should now be available at [http://localhost:3000](http://localhost:3000) and the Express server at [http://localhost:3001](http://localhost:3001).

## Issues / Features
* Handle errors
* Organize project and clean up
* Fix segment element's width on the search component on mobile
* Fix link to Google Maps for international restaurants, not currently functional
* Fix bug with the Mapbox component state, it persists the previous map coords

### Future
* Add tests
* Add location functionality (either lat/long or location searches)
* Considering adding hours / is open and additional detail to the Business component
* Add loading spinner on search

## Built With
* [Create React App](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Semantic UI](https://react.semantic-ui.com)
* [Yelp](https://www.yelp.com/developers)
* [Mapbox](https://www.mapbox.com/)

##Authors
* [Trevor Fullwood](https://github.com/tfullwood)