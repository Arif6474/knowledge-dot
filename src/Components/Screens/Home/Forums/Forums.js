import React, { useEffect, useState } from 'react'
import chat from '../../../../assets/icons/chat.svg'
import avatar from '../../../../assets/icons/woman.svg'
import './Forums.css'
import { Link } from 'react-router-dom'
import {  PROFESSIONAL_FORUM_API } from '../../../../Utilities/APIs'
import axios from 'axios'

function Forums() {
    const [professionalForums, setProfessionalForum] = useState([])
    useEffect(() => {

        async function getProfessionalForum() {
            const { data } = await axios.get(PROFESSIONAL_FORUM_API)
            setProfessionalForum(data)
        }
        getProfessionalForum()

    }, [])
    
  return (
    <div className="forum_transport">
    <div >
        <div className="furam_content">
            <div className="transport_forum">
                <div className="forum_transport_content_left">
                    
                            <div className="forum_transport_content">
                        <div className="forum-icon">
                            <img src={chat} alt="icon"/>
                        </div>
                        <h3>{professionalForums[0]?.title}</h3>
                        <div className="description">
                            <p>{professionalForums[0]?.description}</p>
                        </div>
                        <div className="btn_wrapper">
                            <Link to="/youngProfession" className="btn_more">Know More
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="none">
                                    <path
                                        d="M7.83329 0V7.83333H33.6442L0 41.4775L5.52251 47L39.1667 13.3558V39.1667H47V0H7.83329Z"
                                        fill="#666666" />
                                </svg> */}
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="transport_forum">
                <div className="forum_transport_content_right">
                    <div className="forum_transport_content">
                        <div className="forum-icon">
                            <img src={avatar} alt="icon"/>
                        </div>
                        <h3>{professionalForums[1]?.title}</h3>
                        <div className="description">
                            <p>{professionalForums[1]?.description}</p>
                        </div>
                        <div className="btn_wrapper">
                            <Link to='/womenInLogistics' className="btn_more">Know More
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="none">
                                    <path
                                        d="M7.83329 0V7.83333H33.6442L0 41.4775L5.52251 47L39.1667 13.3558V39.1667H47V0H7.83329Z"
                                        fill="#666666" />
                                </svg> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Forums