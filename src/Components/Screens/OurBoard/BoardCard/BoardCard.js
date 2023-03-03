import React from "react";
import { useState } from "react";

import { IMAGE_URL } from "../../../../Utilities/APIs";
import MemberDetails from "../MemberDetails/MemberDetails";
import "./BoardCard.css";

function BoardCard({ boardMember }) {
  const [member, setMember] = useState(null);

  return (
    <div className="member_cards">
      <div className="member_card h-100">
        <div className="member_card_thumb">
          <img
            src={IMAGE_URL + boardMember?.image}
            alt="card-thumb"
            className="img-fluid w-100"
          />
        </div>
        <div className="member_card_content text-center">
          <h3>{boardMember?.name}</h3>
          <p>{boardMember?.designation}</p>
          <div className="full_bio">
          <button
            to="/joinCilt"
            className="btn bio_btn"
            onClick={() => {
              setMember(boardMember);
            }}
          >
            Full Bio
          </button>
          </div>
        </div>
      </div>
      {member && <MemberDetails member={member} setMember={setMember} />}
    </div>
  );
}

export default BoardCard;
