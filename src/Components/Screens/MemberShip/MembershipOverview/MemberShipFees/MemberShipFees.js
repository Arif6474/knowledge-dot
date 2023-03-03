import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BROUCHERSDES_API,
  GOVT_CHARGES_API,
  MEMBERSHIP_BENIFIT_DESC_API,
  NON_GOVT_CHARGES_API,
} from "../../../../../Utilities/APIs";

import "./MemberShipFees.css";

function MemberShipFees() {
  const [nonGovtCharges, setNonGovtCharges] = useState(null);
  const [govtCharges, setGovtCharges] = useState(null);
  const [memberFees, setMemberFees] = useState([]);
  const [memberFeesDes, setMemberFeesDes] = useState([]);
  useEffect(() => {
    async function getNonGovtCharges() {
      const { data } = await axios.get(NON_GOVT_CHARGES_API);
      setNonGovtCharges(data);
    }
    getNonGovtCharges();
  }, []);

  useEffect(() => {
    async function getGovtCharges() {
      const { data } = await axios.get(GOVT_CHARGES_API);
      setGovtCharges(data);
    }
    getGovtCharges();
  }, []);

  useEffect(() => {
    async function getMemberFees() {
      const { data } = await axios.get(MEMBERSHIP_BENIFIT_DESC_API);
      setMemberFeesDes(data);
    }
    getMemberFees();
  }, []);

  useEffect(() => {
    async function getMemberFees() {
      const { data } = await axios.get(BROUCHERSDES_API);
      setMemberFees(data);
    }
    getMemberFees();
  }, []);

  return (
    <section className="membership_fees">
      <div className="container">
        <div className="sc_title_wrapper center">
          <h1 className="sc_title">Membership Fees</h1>
          <p className="desc">
            The people are the key driving force that makes CILT BD what it is
            today. Whether you are a student building a career or a professional
            trying to expand your business or skills, we have something for
            everybody.
          </p>
        </div>

        <div className="membership_fees_cards">
          <div className="membership_fees_card">
            <div className="card_header">
              <span>Government Service Holders only</span>
            </div>
            {govtCharges?.map((govtCharge) => (
              <div className="card_body" key={govtCharge._id}>
                <div className="registration_fee">
                  <h5>Registration Fee</h5>
                  <h6>BDT {govtCharge.regfee}</h6>
                </div>
                <div className="annual_charge">
                  <h5>Annual Charge</h5>
                  <div className="charge_list">
                    <h6>BDT {govtCharge.ann11} (1st Year)</h6>
                    <h6>Total: BDT {govtCharge.ann12}</h6>
                  </div>
                  <div className="charge_list">
                    <h6>Tk. {govtCharge.ann21} (2nd Year)</h6>
                    <h6>Total: BDT {govtCharge.ann22}</h6>
                  </div>
                  <div className="charge_list">
                    <h6>Affiliate BDT {govtCharge.ann31}</h6>
                    <h6>Total: BDT {govtCharge.ann32}</h6>
                  </div>
                </div>
              </div>
            ))}

            <div className="card_footer">
              <Link href="#" className="btn">
                JOIN NOW
              </Link>
            </div>
          </div>
          <div className="membership_fees_card">
            <div className="card_header">
              <span>Government Service Holders only</span>
            </div>
            {nonGovtCharges?.map((nonGovtCharge) => (
              <div className="card_body" key={nonGovtCharge._id}>
                <div className="registration_fee">
                  <h5>Registration Fee</h5>
                  <h6>BDT {nonGovtCharge.regfee}</h6>
                </div>
                <div className="annual_charge">
                  <h5>Annual Charge</h5>
                  <div className="charge_list">
                    <h6>CMILT & Above BDT {nonGovtCharge.ann11}</h6>
                    <h6>Total: BDT {nonGovtCharge.ann12}</h6>
                  </div>
                  <div className="charge_list">
                    <h6>Tk. {nonGovtCharge.ann21} (2nd Year)</h6>
                    <h6>Total: BDT {nonGovtCharge.ann22}</h6>
                  </div>
                  <div className="charge_list">
                    <h6>Affiliate BDT {nonGovtCharge.ann31}</h6>
                    <h6>Total: BDT {nonGovtCharge.ann32}</h6>
                  </div>
                </div>
              </div>
            ))}

            <div className="card_footer">
              <Link href="#" className="btn">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberShipFees;
