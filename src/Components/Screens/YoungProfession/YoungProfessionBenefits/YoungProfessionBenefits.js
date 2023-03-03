import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL, YPBENEFITS_API, YPBENEFITS_DESCRIPTION_API } from '../../../../Utilities/APIs';

function YoungProfessionBenefits() {
    const [youngBenefit, setYoungBenefit] = useState([]);
    const [youngBenefitDec, setYoungBenefitDec] = useState([]);
    useEffect(() => {
        async function getYoungBenefit() {
            const { data } = await axios.get(YPBENEFITS_API)
            setYoungBenefit(data)
        }
        getYoungBenefit()
    }, [])

    useEffect(() => {
        async function getYoungBenefitDec() {
            const { data } = await axios.get(YPBENEFITS_DESCRIPTION_API)
            setYoungBenefitDec(data)
        }
        getYoungBenefitDec()
    }, [])

    return (
        <section className="membereship_Benefits conduct">
        <div className="container">
            {youngBenefit.map((ypbenefit, index) => (
                <>
                    <div className="sc_title_wrapper border_bottom" key={index}>
                        <h2 className="sc_title">{ypbenefit?.title}</h2>
                    </div>
                    <div className="membership_benifit_content right_content">
                        <div className='code_des'>
                            <ul className="list_with_icon key">
                                {
                                    youngBenefitDec.map((descript, index) => (
                                        <li className="code_description" key={index}>
                                            <p className='desc'>{descript?.description}</p>
                                        </li>
                                    ))
                                }
    
                            </ul>
                            <Link to='/joinCilt' className='btn'>Join Young Professionals Now</Link>
                        </div>
                        <div className="thumb_wrappers">
                            <img src={IMAGE_URL + ypbenefit?.image} alt="mb-thumb" />
                        </div>
                    </div>
                </>
            ))}
        </div>
    </section>
    )
}

export default YoungProfessionBenefits