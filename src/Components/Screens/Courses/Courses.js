import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../../assets/images/banners/ms-overview-banner.png";
import { COURSE_API } from "../../../Utilities/APIs";
import Header from "../../Partials/Header/Header";
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import CourseCart from "./CourseCart/CourseCart";
import "./Courses.css";
function Courses() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    async function getCourses() {
      const { data } = await axios.get(COURSE_API);
      setCourses(data);
    }
    getCourses();
  }, []);
  return (
    <>
      <Header/>
      <BannerTop
        image={Banner}
        title="Courses"
        subTitle="Learn From Us"
      />
      <div className="container">
        <div className="title_desc">
          <div className="sc_title_wrapper center">
            <h1 className="sc_title">COURSES</h1>
          </div>
          <p className="desc desc_top">
            {" "}
            CILT Bangladesh Council is offering the globally recognized CILT
            International Diploma in Logistics and Transport and CILT
            International Certificate in Logistics and Transport in Bangladesh
            with its accredited training provider United International
            University and Interport Corporate Academy (ICA) which is a
            concern of Interport Group.
          </p>
        </div>
        <div className="course-content">
          {courses?.map((course) => (
            <CourseCart course={course} key={course._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
