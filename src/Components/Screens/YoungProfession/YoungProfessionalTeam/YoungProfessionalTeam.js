import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, YPBROUCHERS_API, YPBROUCHERS_DESCRIPTION_API } from '../../../../Utilities/APIs';

function YoungProfessionalTeam() {
    const [ypbrouchers, setypBrouchers] = useState([]);
    const [ypbrouchersDec, setypBrouchersDec] = useState([]);
    
    useEffect(() =>{
        async function getypBrouchers (){
            const {data} = await axios.get(YPBROUCHERS_API)
            setypBrouchers(data)
        }
        getypBrouchers()
    }, [])

    useEffect(() =>{
        async function getypBrouchersDec (){
            const {data} = await axios.get(YPBROUCHERS_DESCRIPTION_API)
            setypBrouchersDec(data)
        }
        getypBrouchersDec()
    }, [])
    
  return (
    <section className="membereship_Benefits conduct">
    <div className="container">
        {ypbrouchers.map((ypbroucher, index) => (
            <>
                <div className="sc_title_wrapper border_bottom" key={index}>
                    <h2 className="sc_title">{ypbroucher?.title}</h2>
                </div>
                <div className="membership_benifit_content right_content">
                    <div className='code_des'>
                        <ul className="list_with_icon key">
                            {
                                ypbrouchersDec.map((descript, index) => (
                                    <li className="code_description" key={index}>
                                        <p className='desc'>{descript?.description}</p>
                                    </li>
                                ))
                            }

                        </ul>
                        <Link to='/joinCilt' className='btn'>Read More</Link>
                    </div>
                    <div className="thumb_wrappers">
                        <img src={IMAGE_URL + ypbroucher?.image} alt="mb-thumb" />
                    </div>
                </div>
            </>
        ))}
    </div>
</section>
  )
}

export default YoungProfessionalTeam