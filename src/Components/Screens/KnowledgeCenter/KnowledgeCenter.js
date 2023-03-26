import React, { useEffect, useState } from "react";
import Banner from "../../../assets/images/about-us/aboutUs.png";
import "./KnowledgeCenter.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { KNOWLEDGE_TOPS_API } from "../../../Utilities/APIs";

import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import LogistictVideo from "./LogistictVideo/LogistictVideo";
// import Brouchure from "./Brouchure/Brouchure";
import Header from "../../Partials/Header/Header";
function KnowledgeCenter() {
  const [knowledgeTops, setKnowledgeTops] = useState(null);
  useEffect(() => {
    async function getKnowledgeTops() {
      const { data } = await axios.get(KNOWLEDGE_TOPS_API);
      setKnowledgeTops(data);
    }
    getKnowledgeTops();
  }, []);

  return (
    <div>
        <Header/>
      <BannerTop image={Banner} title="Knowledge Center" subTitle="" />
      <div className="title_desc">
        {knowledgeTops?.map((knowledgeTop) => (
          <div className="container">
            <div className="sc_title_wrapper center">
              <h1 className="sc_title">{knowledgeTop.title}</h1>
              <div className="sc_description">
                <p className="desc desc_top">{knowledgeTop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="login_button">
        <Link to="/joinCilt" className="btn">
          Join Cilt
        </Link>
      </div>
      <LogistictVideo />
      {/* <Brouchure /> */}
    </div>
  );
}

export default KnowledgeCenter;
