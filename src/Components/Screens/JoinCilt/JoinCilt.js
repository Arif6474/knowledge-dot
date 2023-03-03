import Header from "../../Partials/Header/Header";
import "./JoinCilt.css";

function JoinCilt() {
  return (
    <div>
        <Header/>
      <div className="form-container">
      <div className="container">
        <div className="form_title">
          <div className="sc_title_wrapper center">
            <h1 className="sc_title">
              Membership/Membership Upgrade Application
            </h1>
          </div>
        </div>
        <form action="#" className="memershipForm">
          <div className="formWrapper">
            <div className="grid groupFrom">
              <div className="sc_title_wrapper border_bottom">
                <h2 className="sc_title">Personal Information</h2>
              </div>
              <div className="user-identify">
                <div className="user-input bp grid">
                  <label for="certificateName" className="form-label grid">
                    Name as Certificate <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="certificateName"
                  />
                </div>
                <div className="user-input bp">
                  <label for="Email" className="form-label">
                    Email (Personal) <span>*</span>
                  </label>
                  <input type="email" className="form-control" id="Email" />
                </div>
              </div>
              <div className="user-personal-info">
                <div className="bp user-personal-intro">
                  <label for="dob" className="form-label">
                    Date of Birth <span>*</span>
                  </label>
                  <input type="date" className="form-control" id="dob" />
                </div>
                <div className="bp user-personal-intro">
                  <label for="cell" className="form-label">
                    Cell (Personal) <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cell"
                    placeholder="ex. +8801xxxxxxxxx"
                  />
                </div>
                <div className="grade-selector bp">
                  <label for="cell" className="form-label">
                    Grade Requested <span>*</span>
                  </label>
                  <select
                    className="form-select grade-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Grade</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="current-job">
                <div className="bp">
                  <label for="jobTitle" className="form-label">
                    Current Job Title <span>*</span>
                  </label>
                  <input type="text" className="form-control" id="jobTitle" />
                </div>
                <div className="bp">
                  <label for="timeCurPos" className="form-label">
                    Time in current position: <span>*</span>
                  </label>
                  <input type="text" className="form-control" id="timeCurPos" />
                </div>
              </div>
            </div>

            <div className="grid groupFrom">
              <div className="sc_title_wrapper border_bottom">
                <h2 className="sc_title">Current Job Details</h2>
              </div>

              <div className="user-personal-info">
                <div className="bp">
                  <label for="fromDate" className="form-label job_details">
                    From <span>*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control job_details"
                    id="fromDate"
                  />
                </div>
                <div className="bp">
                  <label for="toDate" className="form-label job_details">
                    To <span>*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control job_details"
                    id="toDate"
                  />
                </div>
                <div className="bp">
                  <label for="Designation" className="form-label job_details">
                    Designation <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control job_details"
                    id="Designation"
                  />
                </div>
              </div>

              <div className="grid bp">
                <label for="Organization" className="form-label">
                  Organization <span>*</span>
                </label>
                <input type="text" className="form-control" id="Organization" />
              </div>
              <div className="grid user-textform bp">
                <label for="respon" className="form-label">
                  Key Responsibilities <span>*</span>
                </label>
                <textarea
                  className="form-control"
                  name="offAddress"
                  id="respon"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div className="emplHisContainer">
              <div className="grid groupFrom2 employeTable">
                <div className="sc_title_wrapper border_bottom">
                  <h2 className="sc_title">Employment History</h2>
                </div>
                <div className="employe_history">
                  <div className="bp">
                    <label for="fromDate" className="form-label">
                      From <span>*</span>
                    </label>
                    <input type="date" className="form-control" id="fromDate" />
                  </div>
                  <div className="bp">
                    <label for="toDate" className="form-label">
                      To <span>*</span>
                    </label>
                    <input type="date" className="form-control" id="toDate" />
                  </div>
                  <div className="bp">
                    <label for="Designation" className="form-label">
                      Designation <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Designation"
                    />
                  </div>
                 
                </div>
                <div className="bp">
                    <label for="Organization" className="form-label">
                      Organization <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Organization"
                    />
                  </div>
                  <div className="user-textform bp">
                    <label for="keyRes" className="form-label">
                      Key Responsibilities <span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      name="offAddress"
                      id="keyRes"
                      cols="30"
                      rows="2"
                    ></textarea>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="user-textform">
                <button type="button" className="addEmplyBtn addBtn">
                  + Add New{" "}
                </button>
              </div>
            </div>

            <div className="grid groupFrom">
              <div className="user-textform">
                <div className="sc_title_wrapper border_bottom">
                  <h2 className="sc_title">Additional Information</h2>
                </div>
              </div>
              <div className="">
                <div className="user-textform bp">
                  <label for="addiInfo" className="form-label">
                    Education
                  </label>
                  <textarea
                    className="form-control"
                    name="addiInfo"
                    id="addiInfo"
                    cols="30"
                    rows="9"
                  ></textarea>
                  <span className="textAreaMsg">30000 words</span>
                </div>
                <div className="user-textform bp">
                  <label for="profAff" className="form-label">
                    Professional Affiliation
                  </label>
                  <textarea
                    className="form-control"
                    name="addiInfo"
                    id="profAff"
                    cols="30"
                    rows="9"
                  ></textarea>
                  <span className="textAreaMsg">30000 words</span>
                </div>
                <div className="user-textform bp">
                  <label for="extraAct" className="form-label">
                    Extra Curricular Activities
                  </label>
                  <textarea
                    className="form-control"
                    name="addiInfo"
                    id="extraAct"
                    cols="30"
                    rows="9"
                  ></textarea>
                  <span className="textAreaMsg">30000 words</span>
                </div>
                <div className="user-textform bp">
                  <label for="contSec" className="form-label">
                    Contribution to Logistics sector
                  </label>
                  <textarea
                    className="form-control"
                    name="addiInfo"
                    id="contSec"
                    cols="30"
                    rows="9"
                  ></textarea>
                  <span className="textAreaMsg">30000 words</span>
                </div>
                <div className="user-textform bp">
                  <label for="Bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    name="addiInfo"
                    id="Bio"
                    cols="30"
                    rows="9"
                  ></textarea>
                  <span className="textAreaMsg">30000 words</span>
                </div>
                <div className="user-textform bp">
                  <label for="cpdPlhan" className="form-label">
                    Your Continuing Professional Development (CPD) Plan
                  </label>
                  <textarea
                    className="form-control"
                    name="cpdPlhan"
                    id="cpdPlhan"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="user-identify">
                <div className="user-textform bp">
                  <label for="mailngAddress" className="form-label">
                    Mailing Address: <span>*</span>
                  </label>
                  <textarea
                    className="form-control"
                    name="mailngAddress"
                    id="mailngAddress"
                    cols="30"
                    rows="2"
                  ></textarea>
                </div>
                <div className="user-textform bp">
                  <label for="offAddress" className="form-label">
                    Office Address: <span>*</span>
                  </label>
                  <textarea
                    className="form-control"
                    name="offAddress"
                    id="offAddress"
                    cols="30"
                    rows="2"
                  ></textarea>
                </div>
                </div>
              </div>
            </div>
            <div className="sc_title_wrapper border_bottom">
              <h2 className="sc_title">Upload Documents</h2>
            </div>
            <div className="grid groupFrom">
              <div className="user-textform">
              <div className="user-textform">
                    <input
                      type="file"
                      className="form-control picInput"
                      id="cv"
                      placeholder="Upload Picture"
                    />
                    <p className="file_label">
                      <span>*</span>Upload Picture
                    </p>
                  </div>
                  <div className="col-1 tickImgpic d-none">
                    <img
                      className="fileTick "
                      src="assets/images/icons/tick.svg"
                      alt=""
                    />
                  </div>
              </div>
              <div className="user-textform">
              <div className="user-textform col-md-4">
                    <input
                      type="file"
                      className="form-control nidInput"
                      id="nid"
                      placeholder="Upload NID/Passport"
                    />
                    <p className="file_label">
                      <span>*</span>Upload NID/Passport
                    </p>
                  </div>
                  <div className="col-1 tickImgnid d-none">
                    <img
                      className="fileTick "
                      src="assets/images/icons/tick.svg"
                      alt=""
                    />
                  </div>
              </div>
              <div className="user-textform">
              <div className="user-textform col-md-4">
                    <input
                      type="file"
                      className="form-control cvInput"
                      id="cv"
                      placeholder="CV"
                    />
                    <p className="file_label">
                      <span>*</span> Upload CV
                    </p>
                  </div>
                  <div className="col-1 tickImgcv d-none">
                    <img
                      className="fileTick "
                      src="assets/images/icons/tick.svg"
                      alt=""
                    />
                  </div>
              </div>
              <div className="user-textform">
                <div className="row acCertificateBox">
                  <div
                    className="user-textform col-md-6 col-lg-4 acCertificate mb-5"
                    data-row_track_ac="1000"
                    id="row_edit_ac1000"
                  >
                    <div className="row align-items-center">
                      <div className="user-textform">
                        <input
                          type="file"
                          onchange="acCertTickShow(1000)"
                          className="form-control acCertInput1000"
                          id="ac"
                          placeholder="Academic Certificates"
                        />

                        <div className="d-flex justify-content-between">
                          <p className="file_label">
                            <span>*</span> Upload Academic Certificates{" "}
                          </p>

                          <p
                            className="file_label ac_file_label d-none"
                            type="button"
                          >
                            Delete{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 tickImg1000 d-none">
                        <img
                          className="fileTick "
                          src="assets/images/icons/tick.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-textform">
                <div className="row expCertBox">
                  <div
                    className="user-textform col-md-6 col-lg-4 uploadExCert mb-5"
                    data-row_track_ex="5"
                    id="row_edit5"
                  >
                    <div className="row align-items-center">
                      <div className="user-textform">
                        <input
                          type="file"
                          onchange="tickShowExCert(5)"
                          className="form-control exCertInput5"
                          id="ec"
                          placeholder="Experience Certificate"
                        />
                        <div className="d-flex justify-content-between" s="">
                          <p className="file_label">
                            <span>*</span> Upload Experience Certificate{" "}
                          </p>
                          <p
                            className="file_label file_label_ex d-none"
                            type="button"
                          >
                            Delete{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-1 tickImg5 d-none">
                        <img
                          className="fileTick "
                          src="assets/images/icons/tick.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agreePolicy"
                    value="option1"
                  />
                  <label className="form-check-label" for="agreePolicy">
                    I agree to the terms &amp; policies
                  </label>
                </div>
              </div>

              <div className="submit-button">
                <button className="btn">
                  <span className="submit">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default JoinCilt;
