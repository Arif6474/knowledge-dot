import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EVENT_API, IMAGE_URL } from "../../../../Utilities/APIs";
function EventDetails() {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    async function getNews() {
      const { data } = await axios.get(`${EVENT_API}/getSingleEvent/${id}`);
      setNews(data);
    }
    getNews();
  }, [id]);

  return (
    <section className="news_details">
      <div className="container">
        <div className="news_details-items">
          <div className="news_details_content">
            <div className="sc_title_wrapper nd_header">
              <h2 className="sc_title">{news.title}</h2>
            </div>
            <div className="nd_chat_img">
              <img src={IMAGE_URL + news?.image} alt="" />
            </div>
            <div className="nd_tests">
              <p>{news?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
