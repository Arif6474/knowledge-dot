import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IMAGE_URL, NEWS_API } from "../../../../Utilities/APIs";
// import { format } from "date-fns";
import Header from "../../../Partials/Header/Header";
function NewsDetails() {
  const { newsId } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    async function getNews() {
      const { data } = await axios.get(`${NEWS_API}/getSingleNews/${newsId}`);
      setNews(data);
    }
    getNews();
  }, [newsId]);

  return (
    <>
    <Header/>
    <section className="news_details">
      <div className="container">
        <div className="news_details_content">
          <div className="sc_title_wrapper nd_header">
            <h2 className="sc_title">{news.title}</h2>
            <div>
            <span className="date">
            {/* {format(new Date(news?.date), "dd-MM-yyyy")} */}

            {news?.date}
            </span>
            </div>
          </div>
          <div className="nd_chat_img">
            <img src={IMAGE_URL + news?.image} alt="" />
          </div>
          <div className="nd_tests">
            <p>{news?.description}</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default NewsDetails;
