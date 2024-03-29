import React, { useEffect, useState } from 'react'
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'
import linkenin from '../../../assets/icons/linked-in.svg'
import instagram from '../../../assets/icons/instagram.svg'
import './Footer.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FOOTER_API, IMAGE_URL, SOCIAL_LINKS_API, SUBSCRIBES_API } from '../../../Utilities/APIs'
function Footer() {

    const [footers, setFooter] = useState(null)
    const [socialLinks, setSocialLinks] = useState(null)
    const [email, setEmail] = useState('')
   
    useEffect(() => {

        async function getFooter() {
            const { data } = await axios.get(FOOTER_API)
            setFooter(data)
        }
        getFooter()
        async function getSocialLinks() {
            const { data } = await axios.get(SOCIAL_LINKS_API)
            setSocialLinks(data)
        }
        getSocialLinks()

    }, [])



    async function handleSubmit(e) {

        e.preventDefault()

        const subscribe = { email }

        const response = await axios.post(SUBSCRIBES_API, subscribe)

        if (response) {
           e.target.reset()

        }

    }

    return (

        <div className="footer">
            <div className="container">
                {
                    footers?.map(footer => (
                        <div className="footer_inner_one" key={footer._id}>
                            <div className="logo_wrapper">
                                <img src={IMAGE_URL + footer.image} alt="logo" className="img-fluid w-100" />
                            </div>
                            <h4 >Stronger Together</h4>
                            {/* <h5>{footer.subtitle}</h5> */}
                        </div>
                    ))
                }
            </div>
            <div className="container">
                <div className="footer_inner_Two">
                    <div className="footer-content">
                        <div className="footer-details">
                            <h6>About CILT</h6>
                            <ul className="icon">
                                <li>
                                    <Link to='/aboutUs' className="link">Institute History</Link>
                                </li>
                                <li>
                                    <Link to='/youngProfession' className="link">Regional Sections</Link>
                                </li>
                                <li>
                                    <Link to='/ourBoard' className="link">Our Board</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Education</h6>
                            <ul className="icon">
                                <li>
                                    <Link to='/courses' className="link">Our Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/knowledgeCenter' className="link">Knowledge Centre</Link>
                                </li>
                                <li>
                                    <Link to='/career' className="link">Career</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Membership Groups</h6>
                            <ul className="icon">
                                <li>
                                    <Link to='/womenInLogistics' className="link">Women in Logistics & Transport</Link>
                                </li>
                                <li>
                                    <Link to='/youngProfession' className="link">Young Professionals</Link>
                                </li>
                                <li>
                                    <Link to='/corporateMembershipOverview' className="link">Corporate Membership</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Contact With Us</h6>
                            <ul>
                                <li>
                                    <Link to=''>MHK Terminal (4th Floor),
                                        110 Kazi
                                        Nazrul Islam Avenue,
                                        <Link to=''>MHK Terminal (4th Floor), 110 Kazi Nazrul Islam
                                            Avenue, Banglamotors (3.08 mi) Dhaka, Bangladesh Dhaka-1000</Link> </Link>
                                </li>
                                <li>
                                    <Link to='' className="link">01711-434899</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer_inner_three">
                    <div className="subscribe_wrapper">
                        <h6>Subscribe For Newsletter</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control email-input"
                                    id=""
                                    placeholder="Enter your mail..."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="social_madia_wrapper">
                        <h6>Connect With Social Media</h6>
                        <div className="social_wrapper">
                            <ul>
                                <li>
                                    <Link to={socialLinks && socialLinks[0].link} target="_blank">
                                        <img className="img-fluid" src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={socialLinks && socialLinks[2].link} target="_blank">
                                        <img className="img-fluid" src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={socialLinks && socialLinks[1].link} target="_blank">
                                        <img className="img-fluid" src={linkenin} alt="linkedin" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={socialLinks && socialLinks[3].link} target="_blank">
                                        <img className="img-fluid" src={instagram} alt="instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer_inner_four">
                    <div className="copywight">
                        <p>Copyright © 2018The Chartered Institute of Logistics and Transport Bangladesh.All rights reserved.
                        </p>
                    </div>
                    <div className="by_develop">
                        <p>Designed & Developed by <Link to='https://theantopolis.com/' className="antopolis">Antopolis</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer