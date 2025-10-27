"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid p-0 position-relative hero-header">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 vh-100 object-fit-cover"
        >
          <source src="https://appaswamy.com/assets/web/kamadhenu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-1 fw-bold mb-4 text-white" data-aos="fade-up">
            We Make Your <span className="text-muted">Living</span> Better
          </h1>
          <h5
            className="d-inline-block border border-2 border-light text-white py-3 px-5 mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            An Award Winning Studio Since 1990
          </h5>
        </div>
      </div>

      {/* Hero End */}
      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-in">
            <h1>
              Why People{" "}
              <span className="text-uppercase text-primary bg-light px-2">
                Choose Us
              </span>
            </h1>
          </div>
          <div className="row g-5 text-center">
            {[
              { icon: "fa-calendar-alt", title: "25+ Years Experience" },
              { icon: "fa-tasks", title: "Best Interior Design" },
              { icon: "fa-pencil-ruler", title: "Innovative Architects" },
              { icon: "fa-user", title: "Customer Satisfaction" },
              { icon: "fa-hand-holding-usd", title: "Budget Friendly" },
              { icon: "fa-check", title: "Sustainable Material" },
            ].map((feature, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="fade-in">
                <i className={`fa ${feature.icon} fa-5x text-primary mb-4`}></i>
                <h4>{feature.title}</h4>
                <p className="mb-0">
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem
                  sit...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature End */}
      <hr className="border-info"></hr>
      {/* Construction Process Start */}
      <div className="container py-5">
        <h4 className="text-center mb-5" data-aos="fade-up">
          Our Construction Process
        </h4>
        <div className="timeline position-relative">
          {/* Vertical Line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x h-100 border-start border-2 border-primary"
            style={{ zIndex: 0 }}
          ></div>
          <div
            className="timeline-item d-flex mb-5 justify-content-start"
            data-aos="fade-right"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                01
              </div>
              <h6 className="mt-2 mb-3">Site Plan</h6>
              <div
                id="carouselSitePlan"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-1.jpg"
                      alt="Site Plan 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-2.jpg"
                      alt="Site Plan 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselSitePlan"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselSitePlan"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-end"
            data-aos="fade-left"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                02
              </div>
              <h6 className="mt-2 mb-3">Architectural Floor Plan</h6>
              <div
                id="carouselFloorPlan"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-2.jpg"
                      alt="Floor Plan 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-3.jpg"
                      alt="Floor Plan 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselFloorPlan"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselFloorPlan"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-start"
            data-aos="fade-right"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                03
              </div>
              <h6 className="mt-2 mb-3">3D Hall Layout</h6>
              <div
                id="carouselHallLayout"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-3.jpg"
                      alt="Hall Layout 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-4.jpg"
                      alt="Hall Layout 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselHallLayout"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselHallLayout"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-end"
            data-aos="fade-left"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                04
              </div>
              <h6 className="mt-2 mb-3">Structural Drawing</h6>
              <div
                id="carouselStructure"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-4.jpg"
                      alt="Structural Drawing 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-5.jpg"
                      alt="Structural Drawing 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselStructure"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselStructure"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-start"
            data-aos="fade-right"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                05
              </div>
              <h6 className="mt-2 mb-3">Elevation 3D Design</h6>
              <div
                id="carouselElevation"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-5.jpg"
                      alt="Elevation Design 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-6.jpg"
                      alt="Elevation Design 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselElevation"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselElevation"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-end"
            data-aos="fade-left"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                06
              </div>
              <h6 className="mt-2 mb-3">Approval Drawing</h6>
              <div
                id="carouselApproval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-6.jpg"
                      alt="Approval Drawing 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-1.jpg"
                      alt="Approval Drawing 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselApproval"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselApproval"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="timeline-item d-flex mb-5 justify-content-start"
            data-aos="fade-right"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
              style={{ width: "20px", height: "20px", zIndex: 2 }}
            ></div>
            <div
              className="timeline-content bg-white shadow-sm text-center p-3 rounded "
              style={{ width: "450px" }}
            >
              <div className="step-number text-primary fw-bold display-6">
                07
              </div>
              <h6 className="mt-2 mb-3">3D Interior Designs</h6>
              <div
                id="carouselInterior"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner border-hover">
                  <div className="carousel-item active">
                    <Image
                      src="/img/project-1.jpg"
                      alt="Interior Design 1"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src="/img/project-6.jpg"
                      alt="Interior Design 2"
                      width={400}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselInterior"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselInterior"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <i className="fa-solid fa-chevron-down fs-3 text-muted"></i>
        </div>
      </div>
      {/* Construction Process End */}
      <hr className="border-info"></hr>
      {/* FAQ Start */}
      <section className="py-5 ">
        <div className="container">
          <h2 className="text-center mb-5 ">FAQ</h2>
          <div className="accordion shadow-sm" id="faqAccordion">
            {/* Item 1 */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold text-dark collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  WHAT IS THE IMPORTANCE OF MODULAR KITCHEN AND INTERIORS?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Modular kitchens and designed interiors help not only create a
                  coordinated look but also save space. In fact, DoMyHome uses a
                  scientific process to maximize cubic foot display space for
                  every square foot charged.
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button fw-bold text-dark collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  HOW TO DECIDE BETWEEN A CARPENTER AND AN INTERIOR DESIGNER?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Interior designers provide holistic planning, visualization,
                  and execution, while carpenters focus mainly on furniture.
                  Designers optimize both space and aesthetics.
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button fw-bold text-dark collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  IS INTERIOR DESIGN PROCESS GOING TO BE EXPENSIVE?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  The cost depends on the scope and materials. However, good
                  design often saves money long-term by preventing costly rework
                  and ensuring optimal use of resources.
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button fw-bold text-dark collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  WHAT ARE THE VARIOUS SERVICES OFFERED BY INTERIOR DESIGNERS?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Services include layout planning, material selection, lighting
                  design, furniture customization, and turnkey project
                  management.
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button fw-bold text-dark collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  WILL WE GET OUR CHOICE OF FINISHES AND COLOURS WITH INTERIOR
                  DESIGNERS?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Yes, professional designers ensure that your preferences for
                  finishes, materials, and color themes are incorporated
                  seamlessly into the overall design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
