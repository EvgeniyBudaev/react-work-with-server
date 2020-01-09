import React, { Component } from "react";

import Header from "../header";
import SwapiService from "../../services/swapi-service";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import Record from "../record";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="passengers" label="Passengers" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
      <div className="stardb-app">
        <Header />
        {planet}


        <Row
        left={personDetails}
        right={starshipDetails} />


      </div>
      </ErrorBoundry>
    );
  }
}
