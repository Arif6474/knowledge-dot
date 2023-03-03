import React, { useEffect, useState } from 'react';
import './WhyJoinCilt.css';
import joinCiltPlan from '../../../../assets/images/about-us/join-cilt-logo.svg'
import { WHY_JOIN_US_API } from '../../../../Utilities/APIs';
import axios from 'axios';

function WhyJoinCilt() {

    const [whyJoinUses, setWhyJoinUses] = useState(null);
    useEffect(() => {
        async function getWhyJoinUses() {
            const { data } = await axios.get(WHY_JOIN_US_API);
            setWhyJoinUses(data);
        }
        getWhyJoinUses();
    }, []);
    return (
        <section className="join_cilt container">
            <div className="sc_title_wrapper center  border_bottom ">
                <h1 className="sc_title">Why Should You Join CILT?</h1>
            </div>
            <div className="join_cilt_content_wrapper">
                <div className="join_cilt_content_inner">
                    <img src={joinCiltPlan} alt="logo" />
                    <div className="text_box text_1">
                        <p>{whyJoinUses && whyJoinUses[0].description}</p>
                    </div>
                    <div className="text_box text_2">
                        <p>{whyJoinUses && whyJoinUses[1].description}</p>
                    </div>
                    <div className="text_box text_3">
                        <p>{whyJoinUses && whyJoinUses[2].description}</p>
                    </div>
                    <div className="text_box text_4">
                        <p>{whyJoinUses && whyJoinUses[3].description}</p>
                    </div>
                    <div className="text_box text_5">
                        <p>{whyJoinUses && whyJoinUses[4].description}</p>
                    </div>
                    <div className="text_box text_6">
                        <p>{whyJoinUses && whyJoinUses[5].description}</p>
                    </div>
                    <div className="text_box text_7">
                        <p>{whyJoinUses && whyJoinUses[6].description}</p>
                    </div>
                    <div className="text_box text_8">
                        <p>{whyJoinUses && whyJoinUses[7].description}</p>
                    </div>
                    <div className="center_text_box">
                        <h3>Why Should You Join CILT?</h3>
                    </div>
                </div>
            </div>
            <div className="mobileCILt">
                <ul>
                    <li>Expand your connections
                        and build a network
                        professionally</li>
                    <li>Develop skills through
                        networking, seminars,
                        workshops, and other
                        activities through CILT</li>
                    <li>Link your business
                        to an international network
                        worldwide for more and
                        better opportunities</li>
                    <li>Continuous self-development
                        and knowledge sharing through
                        extensive online databases,
                        knowledge center and online
                        library</li>
                    <li>Become a leader
                        by sharing your knowledge
                        and expertise to young professionals
                        within the industry</li>
                    <li>Use of CILT approved
                        designation which is recognized
                        as a mark of professional status
                        in the logistics and transport sector globally.</li>
                    <li>Free access of key
                        data from databases and
                        online resource center</li>
                </ul>
            </div>
        </section>
    )
}

export default WhyJoinCilt