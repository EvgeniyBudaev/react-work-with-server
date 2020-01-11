import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withSwapiService } from "../hoc-helper";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
