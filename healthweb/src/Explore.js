import React from "react";
import { Container } from "react-bootstrap";

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
      <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-nutrition-dieting-flaticons-flat-flat-icons-3.png" alt="nutriiton"/>
    </div>

    <div className="box red">
      <h2>Mental Health</h2>
      <p>Counselling Yoga Therapy</p>
      <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-mental-health-new-normal-flaticons-flat-flat-icons.png" alt="mental"/>
    </div>

    <div className="box box-down blue">
      <h2>Well Being</h2>
      <p>Fitness Sleep</p>
      <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-wellbeing-comfort-flaticons-flat-flat-icons.png" alt="wellbeing"/>
        </div>
        
      </div>
      
  <div className="row2-ontainer2">
    <div className="box orange">
      <h2>Product Reviews</h2>
      <p>Regularly evaluates quality products</p>
      <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-review-social-media-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="products"/>
    </div>
      </div>
      
    </Container>
  
  );
}

export default Explore;
