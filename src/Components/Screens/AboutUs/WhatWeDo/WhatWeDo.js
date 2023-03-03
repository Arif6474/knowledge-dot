import React, { useEffect, useState } from 'react';
import './WhatWeDo.css';
import axios from 'axios';
import { IMAGE_URL, WHAT_WE_DO_API } from '../../../../Utilities/APIs';

function WhatWeDo() {

    const [whatDos, setWhatDos] = useState(null)
    useEffect(() => {

        async function getWhatDos() {
            const { data } = await axios.get(WHAT_WE_DO_API)
            setWhatDos(data)
        }
        getWhatDos()

    }, [])
    return (
        <div className='container'>

            <div className="what_we_do join_cilt">
                <div className="sc_title_wrapper center border_bottom">
                    <h2 className="sc_title">What we do</h2>
                </div>
                <div className="what_we_do_content">
                    {
                        whatDos?.map(whatDo => (
                            <div className="wwd_card">
                                <div className="icon">
                                    <img src={IMAGE_URL + whatDo.image} alt="icon" />
                                </div>
                                <div className="descriptions">
                                    <p>{whatDo.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo