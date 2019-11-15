import React from 'react';

//This imports the Bootstrap Jumbotron styling 
import "./Jumbotron.css";


const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">React Ralph Snart Memory Game!</h1>
    <p className="lead">Click on any image to earn points, but don't click on any more than once!</p>
  </div>
</div>
);
export default Jumbotron;