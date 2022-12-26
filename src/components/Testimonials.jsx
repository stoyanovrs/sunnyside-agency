import React from "react";
import emily from "../assets/images/image-emily.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import jennie from "../assets/images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h3>Client testimonials</h3>
        <div className="clients">
          <div className="client">
            <div className="client-image">
              <img src={emily} alt="Emily" />
            </div>
            <p className="client-text">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="bio">
              <h4>Emily R.</h4>
              <p className="position">Marketing Director</p>
            </div>
          </div>
          <div className="client">
            <div className="client-image">
              <img src={thomas} alt="Thomas" />
            </div>
            <p className="client-text">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="bio">
              <h4>Thomas S.</h4>
              <p className="position">Chief Operating Officer</p>
            </div>
          </div>
          <div className="client">
            <div className="client-image">
              <img src={jennie} alt="jennie" />
            </div>
            <p className="client-text">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="bio">
              <h4>Jennie F.</h4>
              <p className="position">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
