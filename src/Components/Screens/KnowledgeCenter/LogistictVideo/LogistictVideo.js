import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LOGISTICS_API } from '../../../../Utilities/APIs'
import './LogistictVideo.css'
function LogistictVideo() {

    const [logistics, setLogistics] = useState(null)
    useEffect(() => {

        async function getLogistics() {
            const { data } = await axios.get(LOGISTICS_API)
            setLogistics(data)
        }
        getLogistics()

    }, [])

  return (
    <div>
        <div className="video_section">
        {
            logistics?.map(logistic => (
            <div className="container">
               <div className="sc_title_wrapper border_bottom">
                    <h1 className="sc_title">Logistics And Transport Library In Our Hand</h1>
                </div>
                <div className="row">
                    <div className="video_wrapper">
                        <div className="Knowledge_video">
                            <iframe width="" height="" src={logistic.videoLink}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <div className="description">
                                <p>{logistic.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default LogistictVideo