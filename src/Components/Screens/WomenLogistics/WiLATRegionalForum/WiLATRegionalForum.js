import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { WILETREGFORUMS_API } from '../../../../Utilities/APIs'
import MemberCard from '../../YoungProfession/MemberCard/MemberCard'

function WiLATRegionalForum() {
    const [wiletrgForums, setWiletrgForums] = useState(null)
    useEffect(() => {
        async function getWiletrgForums() {
            const { data } = await axios.get(WILETREGFORUMS_API)
            setWiletrgForums(data)
        }
        getWiletrgForums()
    }, [])
  return (
    <section className="profession_forum">
    <div className="container">
        <div className="sc_title_wrapper border_bottom" >
            <h2 className="sc_title">WiLAT Regional Forum</h2>
        </div>
        <div className="member">
            {
                wiletrgForums?.map(wiletrgForum => (
                    <MemberCard key={wiletrgForum._id} member={wiletrgForum} />
                ))
            }

        </div>
    </div>
</section>
  )
}

export default WiLATRegionalForum