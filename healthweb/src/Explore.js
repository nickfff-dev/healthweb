import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChatRight } from "react-bootstrap-icons";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./Explore.css";

function Explore() {
  return (
    <Container className="explore p-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2>EXPLORE TOPICS</h2>

        <h2>
          ALL TOPICS <ArrowRightCircle className="arrow fal" />
        </h2>
      </div>
      <hr />

      <div className="header">
    <h1>Science, and Integrity</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your health is on point</p>
  </div>
  <div className="row1-ontainer2">
    <div className="box box-down cyan">
      <h2>Nutrition</h2>
      <p>Food and Eating Habits</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div className="box red">
      <h2>Mental Health</h2>
      <p>Counselling Yoga Therapy</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div className="box box-down blue">
      <h2>Well Being</h2>
      <p>Fitness Sleep</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
        </div>
        
      </div>
      
  <div className="row2-ontainer2">
    <div className="box orange">
      <h2>Product Reviews</h2>
      <p>Regularly evaluates quality products</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
      </div>
      
    </Container>
  );
}

export default Explore;
