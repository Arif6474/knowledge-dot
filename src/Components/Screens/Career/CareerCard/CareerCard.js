import React from 'react';
import { Link } from 'react-router-dom';
import './CareerCard.css'

function CareerCard() {
  return (
    <section className="career_cards">
        <div className="container">
 
                <div className="career_b_cards">
                    <div className="blue_card">
                        <div className="b_card_heading">
                            <h3 className='sc_title'>INTERNSHIP</h3>
                        </div>
                        <div className="b_card_text">
                            <p>Looking for intern at Interport Group</p>
                        </div>
                        <div className="btn_box_wrapper">
                        <Link to='/joinCilt' className='btn'>Download Now</Link>
                        </div>
                    </div>
                    <div className="blue_card">
                        <div className="b_card_heading">
                            <h3 className='sc_title'>EXECUTIVE, PROCUREMENT</h3>
                        </div>
                        <div className="b_card_text">
                            <p>Executive, Procurement</p>
                        </div>
                        <div className="btn_box_wrapper">
                        <Link to='/joinCilt' className='btn'>Download Now</Link>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default CareerCard