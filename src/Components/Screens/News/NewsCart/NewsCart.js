import React from "react";
import "./NewsCart.css";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../../../Utilities/APIs";
import { format } from "date-fns";
function NewsCart({ news }) {

  return (
    <div className="news_cart">
      <Link to={`/news-details/${news?._id}`}>
        <div className="card ">
          <div className="card_image">
            <div className="event_image">
              <img
                src={IMAGE_URL + news?.image}
                alt="events"
              />
            </div>
          </div>
          
          <div className="card-body">
            <span className="date">
              {format(new Date(news?.date), "dd-MM-yyyy")}
            </span>
            <h3 className="card-body-text">{news?.title}</h3>
            <p>{news?.description.substring(0, 60)} ...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsCart;
