import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withSwapiService } from "../hoc-helper";

const StarshipDetails = (props) => {

        return (
          <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="passengers" label="Passengers" />
          </ItemDetails>
        );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};


export default withSwapiService(StarshipDetails, mapMethodsToProps);
