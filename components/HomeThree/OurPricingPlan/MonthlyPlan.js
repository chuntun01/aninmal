import React from "react";
import Link from "next/link";

const MonthlyPlan = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div 
          className="col-lg-4 col-md-6 col-sm-6"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="100"
        >
          <div className="pricing-box">
            <div className="pricing-header">
              <h3>Free</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $0 <span>/m</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="flaticon-tick"></i> Up to 1000 Subscribers
              </li>
              <li>
                <i className="flaticon-tick"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="flaticon-tick"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="col-lg-4 col-md-6 col-sm-6"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="200"
        >
          <div className="pricing-box active">
            <div className="pricing-header">
              <h3>Pro</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $149 <span>/m</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="flaticon-tick"></i> Up to 3300 Subscribers
              </li>
              <li>
                <i className="flaticon-tick"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="flaticon-tick"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="col-lg-4 col-md-6 col-sm-6"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="300"
        >
          <div className="pricing-box">
            <div className="pricing-header">
              <h3>Premium</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $179 <span>/m</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="flaticon-tick"></i> Up to 10000 Subscribers
              </li>
              <li>
                <i className="flaticon-tick"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="flaticon-tick"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyPlan;