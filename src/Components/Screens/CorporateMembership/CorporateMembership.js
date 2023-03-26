import React, { useEffect, useState } from "react";
import "./CorporateMembership.css";
import Banner from "../../../assets/images/about-us/aboutUs.png";
import captureert2 from "../../../assets/images/corporate_membership/Rectangle-48.png";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CORPORATE_MIDDLES_API,
  CORPORATE_TOPS_API,
  IMAGE_URL,
  MEMBERSHIP_BENIFITS_API,
} from "../../../Utilities/APIs";
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import Header from "../../Partials/Header/Header";
function CorporateMembership() {
  const [corporateTops, setCorporateTops] = useState(null);
  const [corporateMemberComment, setCorporateMemberComment] = useState(null);
  const [membershipBenefits, setMembershipBenefits] = useState(null);
  console.log(membershipBenefits);
  useEffect(() => {
    async function getCorporateTops() {
      const { data } = await axios.get(CORPORATE_TOPS_API);
      setCorporateTops(data);
    }
    getCorporateTops();
  }, []);
  
  useEffect(() => {
    async function getCorporateMemberComment() {
      const { data } = await axios.get(CORPORATE_MIDDLES_API);
      setCorporateMemberComment(data);
    }
    getCorporateMemberComment();
  }, []);

  useEffect(() => {
    async function getMembershipBenefits() {
      const { data } = await axios.get(MEMBERSHIP_BENIFITS_API);
      setMembershipBenefits(data);
    }
    getMembershipBenefits();
  }, []);

  return (
    <div>
        <Header/>
      <BannerTop
        image={Banner}
        title="Corporate Membership Overview"
        subTitle="Be a part of our team"
      />
      <div className="cmo_details">
        <div className="container">
          <div className="corporate">
            <div className="sc_title_wrapper center">
              <div className="sc_description">
                <p className="desc corporate_desc">
                  {corporateTops && corporateTops[0]?.description}
                </p>
              </div>
            </div>
            <div className="cmo_image">
              <img src={corporateMemberComment && IMAGE_URL + corporateMemberComment[0]?.image} alt="" />
              
              <div className="sc_title_wrapper center">
                <div className="sc_description">
                  <p className="desc corporate_desc">
                    {corporateMemberComment &&
                      corporateMemberComment[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Professionals_comments ">
        <div className="container">
          <div className="comments">
            <div className="sc_title_wrapper center">
              <div className="sc_description">
                <p className="desc corporate_desc">
                  {corporateMemberComment && corporateMemberComment[0]?.title}
                </p>
              </div>
            </div>
            <div className="corporate_btn">
              <Link to="#" className="btn">
                Join Corporate Membership
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="membereship_Benefits left_right_content py-180">
        <div className="container">
          <div className="sc_title_wrapper border_bottom">
            <h2 className="sc_title">Membership Benefits</h2>
          </div>
          <div className="membership_benefit_items">
            <div className="thumb_wrapper">
              <img src={captureert2} alt="mb-thumb" />
            </div>
            <ul className="grid_container">
              <div className="grid_item">
                <h1>1</h1>
                <p className="desc">
                  Promotion: Cost effective way of promoting or creating
                  awareness of your business or organization through CILAT.
                </p>
              </div>
              <div className="grid_item">
                <h1>2</h1>
                <p className="desc">
                  Networking: Great way for keeping your business networking
                  opportunities open for new partnership.
                </p>
              </div>
              <div className="grid_item">
                <h1>3</h1>
                <p className="desc">
                  Aspire: Smart employees make for a smarter organization. We
                  can assist in developing your employee’s skill set through
                  continuous professional development.
                </p>
              </div>
              <div className="grid_item">
                <h1>4</h1>
                <p className="desc">
                  Innovate: With all updated information on global/local trends,
                  market insight, research data, your organization or business
                  will be at the front of innovative breakthrough opportunities.
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className=" cmo_bottopm_text">
        <div className="container">
          <div className="sc_title_wrapper center">
            <div className="sc_description">
              <p className="desc corporate_desc bottom_text-bg">
                These advantages are all cost-effective ways of increasing
                productivity and profit. By linking your organisation with CILT
                you have access for many services and events that will benefit
                your employees regardless of their individual member status. Our
                corporate programmes differ between countries. Corporate
                packages usually allow you to nominate representatives from
                within your organisation to be registered as participants of
                CILT events. Nominating key personnel is a cost-effective and
                useful way of introducing employees to the benefits of the CILT
                network and is an excellent way to give an overview to senior
                managers in related specialisms such as Human Resources,
                Marketing and Finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateMembership;
