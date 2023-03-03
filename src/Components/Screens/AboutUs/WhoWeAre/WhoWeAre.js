import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ABOUT_WHO_WE_ARE_API, IMAGE_URL } from '../../../../Utilities/APIs';
import './WhoWeAre.css'
function WhoWeAre() {
    const [abtWhoWeAre, setAbtWhoWeAre] = useState(null);
    useEffect(() => {
        async function getAbtWhoWeAre() {
            const { data } = await axios.get(ABOUT_WHO_WE_ARE_API);
            setAbtWhoWeAre(data);
        }
        getAbtWhoWeAre();
    }, []);
    return (
        <div className='about_us'>
            <div className="container">
                <div className='who_we_are'>
                    <div className='about_content'>
                        <p className='our_service'>Our Service</p>
                        <div className="sc_title_wrapper ">
                            <h1 className="sc_title">{abtWhoWeAre && abtWhoWeAre[0].title}</h1>
                        </div>
                        <p className='about_desc'>{abtWhoWeAre && abtWhoWeAre[0].description}</p>
                        <div className="corporate_btn">
                            <Link to="#" className="btn">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className='about_image'>
                        <img src={abtWhoWeAre && IMAGE_URL + abtWhoWeAre[0].image} alt="thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre