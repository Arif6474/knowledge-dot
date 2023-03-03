import React, { useState } from 'react'
import { IMAGE_URL } from '../../../../Utilities/APIs';
import MemberInfo from '../MemberInfo/MemberInfo';
import './MemberCard.css'
function MemberCard({ member }) {
    const [memberInfo, setMemberInfo] = useState(null);
    return (
        <div className="member_cards">
            <div className="member_card h-100">
                <div className="member_card_thumb">
                    <img
                        src={IMAGE_URL + member?.image}
                        alt="card-thumb"
                        className="img-fluid w-100"
                    />
                </div>
                <div className="member_card_content text-center">
                    <h3>{member?.name}</h3>
                    <p>{member?.designation}</p>
                    <h4 className="email">{member?.email}</h4>
                    <h5 className="country">{member?.country}</h5>
                    <div className="full_bio">
                        <button
                            to="/joinCilt"
                            className="btn bio_btn"
                            onClick={() => {
                                setMemberInfo(member);
                            }}
                        >
                            Full Bio
                        </button>
                    </div>
                </div>
            </div>
            {memberInfo && <MemberInfo memberInfo={memberInfo} setMemberInfo={setMemberInfo} />}
        </div>
    )
}

export default MemberCard