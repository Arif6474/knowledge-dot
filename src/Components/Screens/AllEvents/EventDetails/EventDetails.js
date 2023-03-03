import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EVENT_API, IMAGE_URL } from "../../../../Utilities/APIs";
import Header from "../../../Partials/Header/Header";
function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function getEvent() {
      const { data } = await axios.get(`${EVENT_API}/getSingleEvent/${id}`);
      setEvent(data);
    }
    getEvent();
  }, [id]);

  return (
    <>
      <Header />
      <section className="news_details">
        <div className="container">
          <div className="news_details-items">
            <div className="news_details_content">
              <div className="sc_title_wrapper nd_header">
                <h2 className="sc_title">{event.title}</h2>
                <div>
                  <span className="date">
                    {event?.date}
                  </span>
                </div>
              </div>
              <div className="nd_chat_img">
                <img src={IMAGE_URL + event?.image} alt="" />
              </div>

              <div className="nd_tests">
                <p>{event?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
