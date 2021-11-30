import React, { Component } from "react";
import { Provider } from "./context";
import Header from "./components/layout/Header";
import SearchForm from "./components/search/SearchForm";
import WeatherDashboard from "./components/weather/WeatherDashboard";
import CurrentLocation from "./components/Map/map";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import ExchangeRateApp from "./components/Exchangerate/exchange";

import "./bootstrap.css";
import "./App.css";



class App extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <div>
              <div className="col">
                <div className="sm-3" style={{ width: "450px" }}>
                  <Header />
                  <SearchForm />
                  <WeatherDashboard />
                </div>
              </div>

              <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
              >
                <Marker onClick={this.onMarkerClick} name={"Curent Location"} />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>
              </CurrentLocation>
            </div>
          </div>

          <div>
            <ExchangeRateApp className="exchangebox" />
          </div>
        </div>
      </Provider>
    );
  }
}

export default GoogleApiWrapper({
  apikey: "AIzaSyBc4HywW6eY7_o1wP8F18Yoi3EAmh4oLaQ",
})(App);
