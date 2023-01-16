import React from 'react';
import './Works.scss';


const Works = () => {
    return (
      
      <div className='works' id='works'>



<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="project">
        <div className="inner">
        <h4>Name: Portfolio</h4>
        <h4>technologies: HTML, CSS, React JS, Express JS, Node JS and
Mongodb database </h4>
        <h4>description: HTML, CSS, React JS, Express JS, Node JS and
Mongodb database </h4>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="project">
      <div className="inner">
      <h4>Name: Real-Estate project</h4>
        <h4>technologies:description: HTML, CSS, React JS, Express JS, Node JS and
Mongodb database</h4>
        <h4>description:
. It contains user friendly UI where user can search property as per 
requirements and website will provide full information about that property
with agents contact details.
</h4>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="project">
        <div className="inner">
        <h4>Name:Netflix clone</h4>
        <h4>technologies: HTML, CSS, React JS, Express JS, Node JS, Mongodb 
database and Youtube official Rest API </h4>
        <h4>description: This is a Netflix Clone Build using MERN Technology.
It contains a landing page of official Netflix website user can login and can see
the movie trailers. Form movie trailers I have used Youtube official API.</h4>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="project">
        <div className="inner">
        <h4>Name:Expanse Tracker</h4>
        <h4>technologies: HTML, CSS, React JS, Express JS, Node JS, Mongodb 
database </h4>
        <h4>description:  Expense Tracker Web App build using MERN technology.
All thedata get store on Mongodb Database . This web app contains user 
friendly UI.User can delete and add expenses</h4>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="project">
        <div className="inner">
        <h4>Name:Movie app</h4>
        <h4>technologies:HTML, CSS, React JS, Express JS, Node JS and Rest API  </h4>
        <h4>description:  : This is a Movie Web App build using MERN Technology.
          It contains Top rated , Popular and Up coming movie list . User can search
          movie and can get all the information about that movie. For movie data I
          Rest API.
        </h4>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <div class="carousel-indicators" style={{color:"orange"}}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
</div>
            
        </div>
    );
};

export default Works;