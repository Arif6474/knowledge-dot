import React, { useEffect, useState } from 'react'
import facebook from '../../../assets/images/icons/facebook.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import linkenin from '../../../assets/images/icons/linked-in.svg'
import instagram from '../../../assets/images/icons/instagram.svg'
import './Footer.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FOOTER_API, IMAGE_URL } from '../../../Utilities/APIs'
function Footer() {

    const [footers, setFooter] = useState(null)
    useEffect(() => {

        async function getFooter() {
            const { data } = await axios.get(FOOTER_API)
            setFooter(data)
        }
        getFooter()

    }, [])

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
                                    <Link href="about-us.html" className="link">Institute History</Link>
                                </li>
                                <li>
                                    <Link href="about-us.html" className="link">Regional Sections</Link>
                                </li>
                                <li>
                                    <Link href="our-board.html" className="link">Our Board</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Education</h6>
                            <ul className="icon">
                                <li>
                                    <Link href="courses.html" className="link">Our Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="knowledge-center.html" className="link">Knowledge Centre</Link>
                                </li>
                                <li>
                                    <Link href="career.html" className="link">Download Centre</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Membership Groups</h6>
                            <ul className="icon">
                                <li>
                                    <Link href="women_in_logistics.html" className="link">Women in Logistics & Transport</Link>
                                </li>
                                <li>
                                    <Link href="young_professional.html" className="link">Young Professionals</Link>
                                </li>
                                <li>
                                    <Link href="corporate_membership_overview.html" className="link">Corporate Membership</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-details">
                            <h6>Contact With Us</h6>
                            <ul>
                                <li>
                                    <Link href="contact-us.html">MHK Terminal (4th Floor),
                                        110 Kazi
                                        Nazrul Islam Avenue,
                                        <Link href="">MHK Terminal (4th Floor), 110 Kazi Nazrul Islam
                                            Avenue, Banglamotors (3.08 mi) Dhaka, Bangladesh Dhaka-1000</Link> </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">01711-434899</Link>
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
                        <form action="#">
                            <div className="input-group">
                                <input type="email" className="form-control email-input" id="" placeholder="Enter your mail..." />
                                <button type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="social_madia_wrapper">
                        <h6>Connect With Social Media</h6>
                        <div className="social_wrapper">
                            <ul>
                                <li>
                                    <Link href="#" target="_blank">
                                        <img className="img-fluid" src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank">
                                        <img className="img-fluid" src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank">
                                        <img className="img-fluid" src={linkenin} alt="linkedin" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank">
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
                        <p>Designed & Developed by <Link href="https://theantopolis.com/" className="antopolis">Antopolis</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer