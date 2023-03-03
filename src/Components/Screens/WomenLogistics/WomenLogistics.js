import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IMAGE_URL, JOIN_WE_LETS_API, WE_LET_MISSIONS_API, WOMEN_LOGISTICS_API } from '../../../Utilities/APIs'
import BannerTop from '../../Partials/Sections/BannerTop/BannerTop'
import Banner from "../../../assets/images/banners/ms-overview-banner.png";
import './WomenLogistics.css'
import WiLATRegionalForum from './WiLATRegionalForum/WiLATRegionalForum'
import WiLATBangladeshiForum from './WiLATBangladeshiForum/WiLATBangladeshiForum'
import WiLATBangladesh from './WiLATBangladesh/WiLATBangladesh'
import WiLATGroups from './WiLATGroups/WiLATGroups'
import Header from '../../Partials/Header/Header'

function WomenLogistics() {

    const [womenLogistics, setWomenLogistics] = useState(null)

    useEffect(() => {
        async function getWomenLogistics() {
            const { data } = await axios.get(WOMEN_LOGISTICS_API)
            setWomenLogistics(data)
        }
        getWomenLogistics()
    }, [])

    const [weLetMissions, setWeLetMissions] = useState(null)

    useEffect(() => {
        async function getWeLetMissions() {
            const { data } = await axios.get(WE_LET_MISSIONS_API)
            setWeLetMissions(data)
        }
        getWeLetMissions()
    }, [])

    const [joinWeLets, setJoinWeLets] = useState('')

    useEffect(() => {
        async function getJoinWeLets() {
            const { data } = await axios.get(JOIN_WE_LETS_API)
            setJoinWeLets(data)
        }
        getJoinWeLets()
    }, [])

    return (
        <>
          <Header/>
            <BannerTop
                image={Banner}
                title="Women In Logistics and Transport"
                subTitle="Be a part of our team"
            />
            <div className="wl_section">
                <div className="container">
                    <div className="sc_title_wrapper center">
                        <div className="sc_description">
                            <p className="desc corporate_desc">
                                {womenLogistics && womenLogistics[0]?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wl_text_box">
                <div className="container">
                    <div className="wilat">
                        {
                            weLetMissions?.map(weLetMission => (
                                <div className="wilat-content" key={weLetMission._id}>
                                    <div className="wl_text_content">
                                        <div className="b_card_heading">
                                            <h3 className='sc_title'>{weLetMission.title}</h3>
                                        </div>
                                        <div className="wl_text_body">
                                            <p>{weLetMission.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="Professionals_comments comment_top_margin">
                <div className="container">
                    <div className="comments">
                        <div className="sc_title_wrapper center">
                            <div className="sc_description">
                                <p className="desc corporate_desc">
                                    {joinWeLets && joinWeLets[0]?.title}
                                </p>
                            </div>
                        </div>
                        <div className="corporate_btn">
                            <Link to="#" className="btn">
                                Join WiLAT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wl_transpoart">
                <div className="container">
                    <div className="logistics g-0">
                        <div className="logistics-content">
                            <div className="wl_transpoart_image">
                                <img src={IMAGE_URL + joinWeLets[0]?.image} alt="" />
                            </div>
                        </div>
                        <div className="logistics-image">
                            <div className="comment_content">
                                <div className="wl_blue_image">
                                    <p className='comment-hillary'>{joinWeLets[0]?.description}</p>
                                </div>
                                {/* <span className="clint">- Hillary Clinton</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WiLATRegionalForum />
            <WiLATBangladeshiForum/>
            <WiLATBangladesh/>
            <WiLATGroups/>
        </>
    )
}

export default WomenLogistics