import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChatRight } from "react-bootstrap-icons";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./Explore.css";

function Explore() {
  return (
    <>
      <div className=" mt-5 d-flex align-items-center justify-content-between">
        <h2>EXPLORE BY</h2>

        <h2>
          ALL CATEGORIES <ArrowRightCircle className="arrow fal" />
        </h2>
      </div>
      <hr />

      <div className="container ">
        <div className="wrapper ">
          <div className="card Nutri">
            <ArrowRightCircle className="arrow fal" />
          </div>
          <h3>Nutrition</h3>
        </div>
        <div className="wrapper">
          <div className="card sleep">
            <ArrowRightCircle className="arrow fal" />
          </div>
          <h3>Sleep</h3>
        </div>
        <div className="wrapper">
          <div className="card mental">
            <ArrowRightCircle className="arrow fal" />
          </div>
          <h3>Mental Health</h3>
        </div>
        <div className="wrapper">
          <div className="card fitness">
            <ArrowRightCircle className="arrow fal" />
          </div>
          <h3>Fitness</h3>
        </div>
        <div className="wrapper">
          <div className="card review">
            <ArrowRightCircle className="arrow fal" />
          </div>
          <h3>Product Reviews</h3>
        </div>
      </div>
    </>
  );
}

export default Explore;
