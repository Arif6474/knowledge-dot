import React from 'react'
import { Link } from 'react-router-dom'
import bouchure from '../../../../assets/images/knowledge-center/Rectangle-49.png'
import './Brouchure.css'
function Brouchure() {
    return (
        <section className="membereship_Benefits left_right_content">
            <div className="container">

                <>
                    <div className="sc_title_wrapper border_bottom" >
                        <h2 className="sc_title">Brouchure Title Will Here</h2>
                    </div>
                    <div className="membership_benifit_content right_content">
                        <div className='code_des'>
                            <ul className="list_with_icon key">
                                <li className="code_description" >
                                    <p className='desc'>Dummy Content Continue their professional development throughout their careers</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Dummy Content Continue their professional development throughout their careers</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Dummy Content Continue their professional development throughout their careers</p>
                                </li>
                                <li className="code_description" >
                                    <p className='desc'>Dummy Content Continue their professional development throughout their careers</p>
                                </li>
                            </ul>
                            <Link to='/joinCilt' className='btn'>Join Now</Link>
                        </div>
                        <div className="thumb_wrappers">
                            <img src={bouchure} alt="mb-thumb" />
                        </div>
                    </div>
                </>
            </div>
        </section>

    )
}

export default Brouchure