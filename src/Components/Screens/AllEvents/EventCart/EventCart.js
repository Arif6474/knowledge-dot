import React from "react";

import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../../../Utilities/APIs";
import { format } from "date-fns";
function EventCart({ event }) {
  format(new Date(event?.date), "dd/MM/yyyy");
  return (
    <div className="news_cart">
        <Link to={`/eventDetails/${event?._id}`}>
      <div className="card ">
        <div className="card_image">
          <img src={IMAGE_URL + event?.image} alt="..." />
        </div>
        <div className="card-body">
          <span className="date">
            {format(new Date(event?.date), "dd-MM-yyyy")}
          </span>
          <h3 className="card-body-text">{event?.title}</h3>
          <p>{event?.description.substring(0, 60)} ...</p>
        </div>
      </div>
        </Link>
    </div>
  );
}

export default EventCart;
