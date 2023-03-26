import React, { useEffect, useState } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { EVENT_API, IMAGE_URL } from "../../../../Utilities/APIs";
import { format } from "date-fns";

function Events() {
  const [events, setEvent] = useState([]);
  useEffect(() => {
    async function getEvent() {
      const { data } = await axios.get(EVENT_API);
      setEvent(data);
    }
    getEvent();
  }, []);

  return (
    <section className="h_event">
      <div className="container">
        <div className="stronger_together">
          <div className="sc_title_wrapper center">
            <p className="sm_title">KNOW ABOUT</p>
            <h1 className="sc_title">Events</h1>
          </div>
        </div>
        <div className="h_events_cards_wrapper">
          <div className="events_content">
            {events?.slice(0, 3).map((event, index) => (
              <div className="event" key={index}>
                <div className="h_events_card">
                  <Link to={`/eventDetails/${event?._id}`}>
                    <div className="event_image">
                    <img
                      src={IMAGE_URL + event.image}
                      alt="events"
                    />
                    </div>
                    <div className="h_events_card_content">
                      <span className="date">
                        {format(new Date(event?.date), "dd-MM-yyyy")}
                      </span>
                      <h5>{event.title}</h5>
                      <p className="event-desc">
                        {event.description.slice(0, 80)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="box_btn_wrapper text-center">
                    <button className="btn_box icon">
                        <Link className="btn_more">View more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
                            fill="none">
                            <path
                                d="M2.4998 0.5L0.737305 2.2625L6.46231 8L0.737305 13.7375L2.4998 15.5L9.99981 8L2.4998 0.5Z"
                                fill="#BB9760" />
                        </svg></Link>
                    </button>
                </div> */}
      </div>
    </section>
  );
}

export default Events;
