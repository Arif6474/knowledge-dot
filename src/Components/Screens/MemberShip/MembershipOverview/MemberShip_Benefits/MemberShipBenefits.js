import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_URL, MEMBERSHIP_BENIFITS_API, MEMBERSHIP_BENIFIT_DESC_API } from '../../../../../Utilities/APIs';

import './MemberShip_Benefits.css';

function MemberShipBenefits() {

    const [memberShipBenifits, setMemberShipBenifits] = useState({})
    useEffect(() => {

        async function getMemberShipBenifits() {
            const { data } = await axios.get(MEMBERSHIP_BENIFITS_API)
            setMemberShipBenifits(data)
        }
        getMemberShipBenifits()

    }, [])

    const [memberShipBenifitDescriptions, setMemberShipBenifitDescriptions] = useState(null)
    useEffect(() => {

        async function getMemberShipBenifitDescriptions() {
            const { data } = await axios.get(MEMBERSHIP_BENIFIT_DESC_API)
            setMemberShipBenifitDescriptions(data)
        }
        getMemberShipBenifitDescriptions()

    }, [])

    return (
        <section className="membereship_Benefits bg">
            <div className="container">
                <div className="sc_title_wrapper border_bottom">
                    <h2 className="sc_title">{memberShipBenifits[0]?.title}</h2>
                </div>
                <div className="membership_benefit_items">

                    <div className="thumb_wrapper">
                        <img src={IMAGE_URL + memberShipBenifits[0]?.image} alt="mb-thumb" />
                    </div>
                    <ul className="grid_container">
                        {memberShipBenifitDescriptions?.map((memberBenifit, index) => (
                            <div className="grid_item" key={index}>
                                <h1>{index + 1}.</h1>
                                <p className='desc'>{memberBenifit?.description}</p>
                            </div>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default MemberShipBenefits