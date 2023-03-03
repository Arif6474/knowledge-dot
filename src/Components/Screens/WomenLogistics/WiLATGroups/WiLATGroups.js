import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, WILETGROUPSDEC_API, WILETGROUPS_API} from '../../../../Utilities/APIs';

function WiLATGroups() {
    const [wiletGroups, setWiletGroups] = useState([]);
    const [wiletGroupsDec, setWiletGroupsDec] = useState([]);
    useEffect(() =>{
        async function getWiletGroups() {
            const {data} = await axios.get(WILETGROUPS_API)
            setWiletGroups(data)
        }
        getWiletGroups()
    }, [])

    useEffect(() =>{
        async function getWiletGroups() {
            const {data} = await axios.get(WILETGROUPSDEC_API)
            setWiletGroupsDec(data)
        }
        getWiletGroups()
    }, [])
    
  return (
    <section className="membereship_Benefits conduct">
    <div className="container">
        {wiletGroups.map((wiletGroup, index) => (
            <>
                <div className="sc_title_wrapper border_bottom" key={index}>
                    <h2 className="sc_title">{wiletGroup?.title}</h2>
                </div>
                <div className="membership_benifit_content right_content">
                    <div className='code_des'>
                        <ul className="list_with_icon key">
                            {
                                wiletGroupsDec.map((descript, index) => (
                                    <li className="code_description" key={index}>
                                        <p className='desc'>{descript.title}: {descript?.link}</p>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="thumb_wrappers">
                        <img src={IMAGE_URL + wiletGroup?.image} alt="mb-thumb" />
                    </div>
                </div>
            </>
        ))}
    </div>
</section>
  )
}

export default WiLATGroups