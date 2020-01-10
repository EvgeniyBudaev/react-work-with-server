import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withSwapiService } from "../hoc-helper";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
