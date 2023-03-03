import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Banner from "../../../assets/images/banners/ms-overview-banner.png";
import axios from "axios";
import { OFFICE_INFO_API } from "../../../Utilities/APIs";
import BannerTop from "../../Partials/Sections/BannerTop/BannerTop";
import Header from "../../Partials/Header/Header";
function ContactUs() {
  const [officeInfos, setOfficeInfos] = useState(null);
  useEffect(() => {
    async function getOfficeInfos() {
      const { data } = await axios.get(OFFICE_INFO_API);
      setOfficeInfos(data);
    }
    getOfficeInfos();
  }, []);

  return (
    <div>
      <Header/>
      <BannerTop
        image={Banner}
        title="Contact Us"
        subTitle="Reach out to our team"
      />
      <section className="contract-us-section">
        <div className="contract-us-container">
          <div className="contract-us container">
            <div className="contract-form">
              <div className="stronger_together">
                <div className="sc_title_wrapper">
                  <p className="sm_title left">GET IN TOUCH</p>
                  <h1 className="sc_title">Send Us A Message</h1>
                </div>
              </div>
              <form action="">
                <div className="name-email">
                  <div className="input_content">
                    {" "}
                    <input
                      type="text"
                      placeholder="Your Name..."
                      name=""
                      id=""
                    />
                  </div>
                  <div className="input_content">
                    {" "}
                    <input
                      type="email"
                      placeholder="Your Email..."
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="input_content">
                  {" "}
                  <input type="text" placeholder="subject..." name="" id="" />
                </div>
                <div className="input_content">
                  <textarea
                    clasds=""
                    type="text"
                    placeholder="Write your message ..."
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className="send">
                  <button to="/joinCilt" className="btn ">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="container">
              <div className="location_map_wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.0303393557735!2d90.39312080591012!3d23.745215508529686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89614a3f92f%3A0x82ded544d2f7b670!2sMHK%20Terminal!5e0!3m2!1sen!2sbd!4v1639024490945!5m2!1sen!2sbd"
                  title="1"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <OurLocation /> */}
      </section>

      <div className="contract-info container">
        <div className="sc_title_wrapper border_bottom">
          <h3 className="sc_title ">Our Location</h3>
        </div>
        <div className="office-location">
          {officeInfos?.map((officeInfo) => (
            <div className="locatiuon_header">
              <div className="dhaka-ctg-office">
                <div className="header_contents">
                  <h3>DHAKA OFFICE:</h3>
                  <p>{officeInfo?.bdOfficeInfo}</p>
                </div>
                <div className="header_contents ">
                  <h3>CHATTOGRAM OFFICE:</h3>
                  <p>{officeInfo?.ctOfficeInfo}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="opening-hours">
            <h3>OPENING HOURS</h3>
            <p>Monday to Friday 9am to 5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
