import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WILET_YP_BD_FORUM_API } from '../../../../Utilities/APIs';
import MemberCard from '../MemberCard/MemberCard';
// import RegionalMemberCard from './RegionalMemberCard/RegionalMemberCard';


function YoungProfessionBangladesh() {
    const [bdForumMembers, setBdForumMembers] = useState([])

    useEffect(() => {
        async function getBdForumMember() {
            const { data } = await axios.get(WILET_YP_BD_FORUM_API)
            setBdForumMembers(data)
        }
        getBdForumMember()

    }, [])
    return (
        <section className="profession_forum">
            <div className="container">
                <div className="sc_title_wrapper border_bottom" >
                    <h2 className="sc_title">Young Professionals Bangladeshi Forum</h2>
                </div>
                <div className="member">
                    {
                        bdForumMembers?.map(bdForumMember => (
                            <MemberCard key={bdForumMember._id} member={bdForumMember} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default YoungProfessionBangladesh