import React, { useEffect, useState } from "react";
import "./OurBoard.css";
import coute from "../../../assets/icons/double-coute-bottom.svg";
import Banner from "../../../assets/images/about-us/ms-overview-banner.png";
import {
  BOARD_MEMBERS_API,
  IMAGE_URL,
  PRESEDENT_MSG_API,
} from "../../../Utilities/APIs";
import axios from "axios";
import BoardCard from "./BoardCard/BoardCard";
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import Header from "../../Partials/Header/Header";

function OurBoard() {
  const [presedentMsgs, setPresedentMsgs] = useState([]);

  useEffect(() => {
    async function getPresedentMsgs() {
      const { data } = await axios.get(PRESEDENT_MSG_API);
      setPresedentMsgs(data);
    }
    getPresedentMsgs();
  }, []);

  const [boardMembers, setBoardMembers] = useState([]);
  useEffect(() => {
    async function getBoardMembers() {
      const { data } = await axios.get(BOARD_MEMBERS_API);
      setBoardMembers(data);
    }
    getBoardMembers();
  }, []);

  return (
    <div>
      <Header />
      <BannerTop
        image={Banner}
        title="Our Board"
        subTitle="Know about leaders"
      />
      <div className="president_message_section">
        <div className="container">
          <div className="sc_title_wrapper border_bottom">
            <h2 className="sc_title">{presedentMsgs[0]?.title}</h2>
          </div>
          {presedentMsgs?.map((presedentMsg) => (
            <div className="president" presedentMsg={presedentMsg._id}>
              <div className="president_image">
                <div className="message_image">
                  <img src={IMAGE_URL + presedentMsg.image} alt="president" />
                  <h3>{presedentMsg.name}</h3>
                </div>
              </div>
              <div className="president_message">
                <div className="message_content">
                  <div className="message_text">
                    <p>
                      {presedentMsg.message}
                      <span className="bottom_cote position-relative">
                        <img src={coute} alt="coute-bottom" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="board_cards">
        <div className="container">
          <div className="sc_title_wrapper border_bottom">
            <h2 className="sc_title">Our Board</h2>
          </div>
          <div className="member_cards_wrapper">
            <div className="member">
              {boardMembers?.map((boardMember) => (
                <BoardCard key={boardMember._id} boardMember={boardMember} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBoard;
