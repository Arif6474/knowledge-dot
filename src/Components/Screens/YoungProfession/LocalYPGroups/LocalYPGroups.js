import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MembersBenefitsAddressImage from '../../../../assets/images/young_professional/Rectangle-64.png'
import { YP_GROUPS_API } from '../../../../Utilities/APIs';

function LocalYPGroups() {
    const [youngProfessionGroup, setYoungProfessionGroup] = useState([]);
    console.log(youngProfessionGroup);
    useEffect(() => {
        async function getYoungBenefit() {
            const { data } = await axios.get(YP_GROUPS_API)
            setYoungProfessionGroup(data)
        }
        getYoungBenefit()
    }, [])
    return (
        <section className="membereship_Benefits left_right_content">
            <div className="container">

                <>
                    <div className="sc_title_wrapper border_bottom" >
                        <h2 className="sc_title">Local Young Professionals Groups By Region</h2>
                    </div>
                    <div className="membership_benifit_content right_content">
                        <div className='code_des'>
                            <ul className="list_with_icon key">
                                <li className="code_description" >
                                    <p className='desc'>Egypt: hady_agina@yahoo.com</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Ghana: nlaliban@gmail.com</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Mauritius: sundeep.ruchchan@gmail.com</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Dummy Content Continue their professional development throughout their careerssdf</p>
                                </li>
                            </ul>
                            <Link to='/joinCilt' className='btn'>Join Now</Link>
                        </div>
                        <div className="thumb_wrappers">
                            <img src={MembersBenefitsAddressImage} alt="mb-thumb" />
                        </div>
                    </div>
                </>
            </div>
        </section>
    )
}

export default LocalYPGroups