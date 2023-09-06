import React from "react";
import sprite from "../assets/sprite.svg";
import image from "../assets/testimonial.jpg";

const TestimonialBlock = () => {
  return (
    <section className="block">
      <header className="block__header">
        <h2>What our Customers are saying</h2>
        <p>
          Lorem ipsum dolor sit consectetur adipisicing elit, sint in alias
          quaerat!
        </p>
      </header>
      <div className="container">
        <div className="card testimonial">
          <div className="grid grid--1x2">
            <div className="testimonial__image">
              <img src={image} alt="A happy, smilling customer" />
              <span className="icon-container icon-container--accent">
                <svg className="icon icon--white icon--small">
                  <use href={`${sprite}#quotes`}></use>
                </svg>
              </span>
            </div>
            <blockquote className="quote">
              <p className="quote__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente quis nemo minus eius, ipsam repudiandae sequi veritatis
                architecto delectus consectetur!
              </p>
              <footer>
                <div className="media">
                  <div className="media__image">
                    <svg className="icon icon--primary quote__line">
                      <use href={`${sprite}#line`}></use>
                    </svg>
                  </div>
                  <div className="media__body">
                    <h3 className="media__title quote__author">John Smith</h3>
                    <p className="quote__organization">ABC Company</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBlock;
