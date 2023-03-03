import React, { useEffect, useState } from 'react';
import './OurHistory.css';
import axios from 'axios';
import { HISTORY_DESCRIPTION_API, IMAGE_URL, OUR_HISTORY_API } from '../../../../Utilities/APIs';

function OurHistory() {

    const [ourHistories, setOurHistory] = useState(null)
    useEffect(() => {

        async function getOurHistory() {
            const { data } = await axios.get(OUR_HISTORY_API)
            setOurHistory(data)
        }
        getOurHistory()

    }, [])

    const [historyDescriptions, sethistoryDescriptions] = useState(null)
    useEffect(() => {

        async function gethistoryDescriptions() {
            const { data } = await axios.get(HISTORY_DESCRIPTION_API)
            sethistoryDescriptions(data)
        }
        gethistoryDescriptions()

    }, [])


    return (
        <section className="our_history ">
            <div className="container">
                {
                    ourHistories?.map(ourHistory => (
                        <div className='join_cilt'>
                            <div className="sc_title_wrapper center  border_bottom ">
                                <h1 className="sc_title">{ourHistory?.title}</h1>
                            </div>
                            <div className="our_history_thumb_wrapper">
                                <img src={IMAGE_URL + ourHistory?.image} alt="thumb" />
                            </div>
                        </div>
                    ))
                }

                
                        <div className="our_history_wrapper">
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[0].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[0].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[1].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[1].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[2].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[2].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[3].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[3].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[4].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[4].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[5].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[5].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[6].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[6].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[7].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[7].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[8].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[8].description}</p>
                                </div>
                            </div>
                            <div className="history">
                                <h2 className="history_title">{ historyDescriptions && historyDescriptions[9].year}</h2>
                                <div className="history_body description">
                                    <p>{ historyDescriptions && historyDescriptions[9].description}</p>
                                </div>
                            </div>
                        </div>
                  
                
            </div>
        </section>
    )
}

export default OurHistory