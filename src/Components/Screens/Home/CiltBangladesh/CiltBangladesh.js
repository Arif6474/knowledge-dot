import React, { useEffect, useState } from 'react'
import './CiltBangladesh.css'
import { Link } from 'react-router-dom'
import { CILTBD_API, IMAGE_URL } from '../../../../Utilities/APIs'
import axios from 'axios'

function CiltBangladesh() {
    const [histories, setHistory] = useState(null)
    useEffect(() => {
        async function getHistory() {
            const { data } = await axios.get(CILTBD_API)
            setHistory(data)
        }
        getHistory()
    }, [])

    return (
        <div className="srt_history">
            {
                histories?.map(history => (
                    <div className="history_container" key={history._id}>
                        <div className="history-content">
                            <div className="srt_image_wrapper">
                                <img src={IMAGE_URL + history.image} alt="history" className="img-fluid" />
                            </div>
                        </div>
                        <div className="history-content">
                            <div className="srt_content_wrapper">
                                <p className='our_service'>Our Service</p>
                                <div className="sc_title_wrapper ">
                                    <h1 className="sc_title">{history.title}</h1>
                                </div>
                                <div className="cilt_bangladesh">
                                    <p>{history?.description}</p>
                                </div>
                                <div className="cilt_btn">
                                    <Link to="/aboutUs" className="btn">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default CiltBangladesh