import React, { useEffect, useState } from "react";
import axios from "axios";
import { EVENT_API } from "../../../Utilities/APIs";
import EventCart from "./EventCart/EventCart";
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import Banner from "../../../assets/images/about-us/aboutUs.png";
import Header from "../../Partials/Header/Header";

function AllEvents() {
  const [events, setEvent] = useState([]);
  useEffect(() => {
    async function getEvent() {
      const { data } = await axios.get(EVENT_API);
      setEvent(data);
    }
    getEvent();
  }, []);

  return (
    <div>
        <Header/>
      <BannerTop
        image={Banner}
        title="Event"
        subTitle="Know what’s going on with us"
      />
      <div>
        <div className="news_cards ">
          <div className="container">
            <div className="sc_title_wrapper border_bottom">
              <h2 className="sc_title">Events</h2>
            </div>
            <div className="news_card ">
              {events?.map((event) => (
                <EventCart key={event} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
