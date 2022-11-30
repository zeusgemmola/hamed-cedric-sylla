import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <section className="notFound notFoundTop bod">
    <div className="img">
      <img
        src="https://assets.codepen.io/5647096/backToTheHomepage.png"
        alt="Back to the Homepage"
      />
      <img
        src="https://assets.codepen.io/5647096/Delorean.png"
        alt="El Delorean, El Doc y Marti McFly"
      />
    </div>
    <div className="text">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <h3>BACK TO HOME?</h3>
      <a href="/" className="yes">
        YES
      </a>
      <a href>NO</a>
    </div>
  </section>
);

export default NotFound;

//Code inspire de : https://codepen.io/honeybadger2788/pen/oNzKzvy
