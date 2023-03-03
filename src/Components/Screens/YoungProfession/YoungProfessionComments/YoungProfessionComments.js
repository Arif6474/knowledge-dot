import React from 'react'
import { Link } from 'react-router-dom'

function YoungProfessionComments() {
    return (
        <div className="Professionals_comments p_comment">
            <div className="container">
                <div className="comments">
                    <div className="sc_title_wrapper center">
                        <div className="sc_description">
                            <p className="desc corporate_desc">
                                "When more women enter the workplace it spurs innovation, increases productivity, and grows economies."
                            </p>
                        </div>
                    </div>
                    <div className="corporate_btn">
                        <Link to="#" className="btn">
                            Join Corporate Membership
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoungProfessionComments