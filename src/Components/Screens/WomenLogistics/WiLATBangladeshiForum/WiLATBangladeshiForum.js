import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { WILETBDFORUMS_API } from '../../../../Utilities/APIs'
import MemberCard from '../../YoungProfession/MemberCard/MemberCard'

function WiLATBangladeshiForum() {
    const [wiletbdForums, setWiletbdForums] = useState(null)
    useEffect(() => {
        async function getWiletbdForums() {
            const { data } = await axios.get(WILETBDFORUMS_API)
            setWiletbdForums(data)
        }
        getWiletbdForums()
    }, [])
  return (
    <section className="profession_forum">
    <div className="container">
        <div className="sc_title_wrapper border_bottom" >
            <h2 className="sc_title">WiLAT Bangladeshi Forum</h2>
        </div>
        <div className="member">
            {
                wiletbdForums?.map(wiletbdForum => (
                    <MemberCard key={wiletbdForum._id} member={wiletbdForum} />
                ))
            }

        </div>
    </div>
</section>
  )
}

export default WiLATBangladeshiForum