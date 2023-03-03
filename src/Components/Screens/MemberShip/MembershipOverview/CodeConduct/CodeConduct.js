import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { COD_DESCRIPTION_API, CONDUCTS_API, IMAGE_URL } from '../../../../../Utilities/APIs';

import './CodeConduct.css';

function CodeConduct() {
    const [conducts, setConducts] = useState([])
    const [description, setDescription] = useState([])

    useEffect(() => {

        async function getConducts() {
            const { data } = await axios.get(CONDUCTS_API)
            setConducts(data)
        }
        getConducts()
    }, [])

    useEffect(() => {

        async function getDescription() {
            const { data } = await axios.get(COD_DESCRIPTION_API);
            setDescription(data)
        }
        getDescription()
    }, [])

    return (
        <section className="membereship_Benefits conduct">
            <div className="container">
                {conducts.map((conducts, index) => (
                    <>
                        <div className="sc_title_wrapper border_bottom" key={index}>
                            <h2 className="sc_title">{conducts?.title}</h2>
                        </div>
                        <div className="membership_benifit_content right_content">
                            <div className='code_des'>
                                <ul className="list_with_icon key">
                                    {
                                        description.map((descript, index) => (
                                            <li className="code_description" key={index}>
                                                <p className='desc'>{descript?.description}</p>
                                            </li>
                                        ))
                                    }

                                </ul>
                                <Link to='/joinCilt' className='btn'>Join Now</Link>
                            </div>
                            <div className="thumb_wrappers">
                                <img src={IMAGE_URL + conducts?.image} alt="mb-thumb" />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default CodeConduct