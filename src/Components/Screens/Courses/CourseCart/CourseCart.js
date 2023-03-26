import React from 'react'
import './CourseCart.css'
import doller from '../../../../assets/icons/dollar-fill.svg'
import calender from '../../../../assets/icons/calender.svg'
import { Link } from 'react-router-dom'
import {  IMAGE_URL } from '../../../../Utilities/APIs'
function CourseCart({course}) {

    

  return (
    <div className="course_info">
       
            <div className="card ">
                <div className="flag">
                    {/* <p>10%<br/> OFF</p> */}
                </div>
                <div className="card_image">
                    <img src={IMAGE_URL + course.image} alt="courses-thumb"/>
                </div>
                <div className="card-body">
                    <p className="card-body-text">{course.title}</p>
                    <div className="hours_fees">
                        <div className="hour">
                            <img src={calender} alt="calender"/>
                            <p>Estimated: {course.duration} Hours</p>
                        </div>
                        <div className="fees">
                            <img src={doller} alt="dollar-fill"/>
                            <p>Fees: BDT {course.fees}</p>
                        </div>
                    </div>
                </div>
                <div className="btn_box_wrapper">
                    <Link href="join-cilt.html">
                        <button className="btn_box course-btn  w-100">
                            <span className="btn_more read-more">Enroll</span>
                        </button>
                    </Link>
                </div>
            </div>
       
    </div>
  )
}

export default CourseCart