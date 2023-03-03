import React, { useEffect, useState } from 'react'
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import Banner from "../../../assets/images/banners/ms-overview-banner.png";
import { IMAGE_URL, YPW_JOINS_API, YP_TOP_API } from '../../../Utilities/APIs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import YoungProfessionalTeam from './YoungProfessionalTeam/YoungProfessionalTeam';
import YoungProfessionBenefits from './YoungProfessionBenefits/YoungProfessionBenefits';
import LocalYPGroups from './LocalYPGroups/LocalYPGroups';
import YoungProfessionComments from './YoungProfessionComments/YoungProfessionComments';
import YoungProfessionBangladesh from './YoungProfessionBangladesh/YoungProfessionBangladesh';
import YoungProfessionalRegional from './YoungProfessionalRegional/YoungProfessionalRegional';
import './YoungProfession.css';
import Header from '../../Partials/Header/Header';
function YoungProfession() {

    const [ypTops, setYpTop] = useState([])
    useEffect(() => {

        async function getYpTop() {
            const { data } = await axios.get(YP_TOP_API)
            setYpTop(data)
        }
        getYpTop()

    }, [])
    const [ypwJoins, setYpwJoins] = useState(null)
    useEffect(() => {

        async function getYpwJoins() {
            const { data } = await axios.get(YPW_JOINS_API)
            setYpwJoins(data)
        }
        getYpwJoins()

    }, [])

    return (
        <>
          <Header/>
            <BannerTop
                image={Banner}
                title="Young Profession"
                subTitle="Be a part of our team"
            />
            <div className="cmo_details">
                <div className="container">
                    <div className="corporate">
                        <div className="sc_title_wrapper center">
                            <div className="sc_description">
                                <p className="desc corporate_desc">
                                    {ypTops && ypTops[0]?.title}
                                </p>
                            </div>
                        </div>
                        <div className="cmo_image">
                            <img src={IMAGE_URL + ypTops[0]?.image} alt="" />
                            <div className="sc_title_wrapper center">
                                <div className="sc_description">
                                    <p className="desc corporate_desc">
                                        {ypTops &&
                                            ypTops[0]?.description}
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
                                    {ypwJoins && ypwJoins[0]?.title}
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

            <section className="international">

                <YoungProfessionBenefits/>
                <YoungProfessionBangladesh/>
                <YoungProfessionalRegional/>
                <YoungProfessionalTeam />
                <YoungProfessionComments/>
                <LocalYPGroups/>
                {/* 
                <YoungProfessionPeople />
                <YoungProfessionBangladesh />
                <YoungMemberBenefits />
                <YoungProfessionQuotes />
                <MembersBenefitsAddress /> */}
            </section>
        </>
    )
}

export default YoungProfession