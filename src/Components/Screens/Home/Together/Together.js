import React from "react";
import "./Together.css";
import travel from "../../../../assets/images/home/Active Travel.png";
import freight from "../../../../assets/images/home/Freight.png";
import bus from "../../../../assets/images/home/bus.png";
import plane from "../../../../assets/images/home/air-plane.png";
import meritime from "../../../../assets/images/home/Ports Meritime.png";
import train from "../../../../assets/images/home/train.png";
import logistics from "../../../../assets/images/home/Logistics.png";
import operation from "../../../../assets/images/home/Operations.png";
import byke from "../../../../assets/images/home/byke.png";
function Together() {
  return (
    <div className="container">
      <>
        <div className="stronger_together">
          <div className="sc_title_wrapper center">
            <p className="sm_title">OUR SERVICES</p>
            <h1 className="sc_title">Stronger Together</h1>
          </div>
        </div>
        <div className="together_content">
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={travel} alt="byke" />
            </div>
            <p>
              Active Travel
              <br /> & Planning
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={freight} alt="byke" />
            </div>
            <p>
              Freight
              <br /> Forwarding
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={bus} alt="byke" />
            </div>
            <p>
              Bus
              <br /> & Coach
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={plane} alt="plane" />
            </div>
            <p>Aviation</p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={logistics} alt="lsc" />
            </div>
            <p>
              Logistics &
              <br /> Supply Chain
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={operation} alt="plane" />
            </div>
            <p>
              Operation <br /> Management
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={meritime} alt="plane" />
            </div>
            <p>
              Ports Meritime <br /> & Waterways
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={train} alt="bus" />
            </div>
            <p>
              Rail & <br /> Railway
            </p>
          </div>
          <div className="content_wrapper_items">
            <div className="together-icon">
              <img src={byke} alt="plane" />
            </div>
            <p>
              Transport <br /> Planning
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

export default Together;
