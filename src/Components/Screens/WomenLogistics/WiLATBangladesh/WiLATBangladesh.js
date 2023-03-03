import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BROUCHERSDES_API, BROUCHERS_API, IMAGE_URL} from '../../../../Utilities/APIs';

function WiLATBangladesh() {
    const [brouchures, setBrouchures] = useState([])
    const [brouchureDesc, setBrouchureDesc] = useState([])

    useEffect(() => {
        async function getBrouchure() {
            const { data } = await axios.get(BROUCHERS_API);
            setBrouchures(data)
        }
        getBrouchure()
        
    }, [])
    
    useEffect(() => {
        async function getBrouchureDesc() {
            const { data } = await axios.get(BROUCHERSDES_API);
            setBrouchureDesc(data)
        }
        getBrouchureDesc()
        
    }, [])
    
  return (
    <section className="membereship_Benefits conduct">
    <div className="container">
        {brouchures.map((brouchure, index) => (
            <>
                <div className="sc_title_wrapper border_bottom" key={index}>
                    <h2 className="sc_title">{brouchure?.title}</h2>
                </div>
                <div className="membership_benifit_content right_content">
                    <div className='code_des'>
                        <ul className="list_with_icon key">
                            {
                                brouchureDesc.map((descript, index) => (
                                    <li className="code_description" key={index}>
                                        <p className='desc'>{descript?.description}</p>
                                    </li>
                                ))
                            }

                        </ul>
                        <Link to='/joinCilt' className='btn'>Read More</Link>
                    </div>
                    <div className="thumb_wrappers">
                        <img src={IMAGE_URL + brouchure?.image} alt="mb-thumb" />
                    </div>
                </div>
            </>
        ))}
    </div>
</section>
  )
}

export default WiLATBangladesh