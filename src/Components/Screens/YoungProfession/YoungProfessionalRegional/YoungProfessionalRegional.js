import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  WILET_YP_RG_FORUM_API } from '../../../../Utilities/APIs';
import MemberCard from '../MemberCard/MemberCard';
// import RegionalMemberCard from './RegionalMemberCard/RegionalMemberCard';


function YoungProfessionalRegional() {
    const [bdRegionalMembers, setBdRegionalMembers] = useState([])

  useEffect(() => {
    async function getBdRegionalMembers() {
      const { data } = await axios.get(WILET_YP_RG_FORUM_API)
      setBdRegionalMembers(data)
    }
    getBdRegionalMembers()

  }, [])
    return (
        <section className="profession_forum">
            <div className="container">
                <div className="sc_title_wrapper border_bottom" >
                    <h2 className="sc_title">Young Professionals Bangladeshi Forum</h2>
                </div>
                <div className="member">
                    {
                        bdRegionalMembers?.map(bdRegionalMember => (
                            <MemberCard key={bdRegionalMember._id} member={bdRegionalMember} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default YoungProfessionalRegional