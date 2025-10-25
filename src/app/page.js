"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
              <h1 className="display-1 mb-4" data-aos="slide-right">
                We Make Your <span className="text-primary">Home</span> Better
              </h1>
              <h5
                className="d-inline-block border border-2 border-white py-3 px-5 mb-0"
                data-aos="slide-right"
              >
                An Award Winning Studio Since 1990
              </h5>
            </div>
            <div className="col-lg-6">
              <div className="owl-carousel header-carousel" data-aos="fade-in">
                {[
                  "hero-slider-1.jpg",
                  "hero-slider-2.jpg",
                  "hero-slider-3.jpg",
                ].map((img, i) => (
                  <Image
                    key={i}
                    src={`/img/${img}`}
                    alt=""
                    width={600}
                    height={400}
                    className="img-fluid"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row g-5" data-aos="fade-in">
            {[
              "Crafted Furniture",
              "Sustainable Material",
              "Innovative Architects",
              "Budget Friendly",
            ].map((text, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                    <i className="fa fa-robot text-primary"></i>
                  </div>
                  <h5 className="lh-base mb-0">{text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6" data-aos="fade-in">
                  <Image
                    src="/img/about-1.jpg"
                    alt=""
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </div>
                <div className="col-6" data-aos="fade-in">
                  <div className="position-relative h-100">
                    <Image
                      src="/img/about-2.jpg"
                      alt=""
                      width={400}
                      height={300}
                      className="img-fluid h-75 w-100"
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 bg-primary d-flex align-items-center justify-content-center"
                      style={{ height: "25%" }}
                    >
                      <h4 className="text-white mb-0 text-center">
                        Award Winning Studio Since 1990
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-in">
              <h1 className="mb-5">
                <span className="text-uppercase text-primary bg-light px-2">
                  History
                </span>{" "}
                of Our Creation
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore...
              </p>
              <p className="mb-5">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit...
              </p>
              <div className="row g-3">
                {[
                  ["Award Winning", "Professional Staff"],
                  ["24/7 Support", "Fair Prices"],
                ].map((group, i) => (
                  <div key={i} className="col-sm-6">
                    {group.map((item, j) => (
                      <h6 key={j} className={`mb-${j === 0 ? "3" : "0"}`}>
                        <i className="fa fa-check text-primary me-2"></i>
                        {item}
                      </h6>
                    ))}
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center mt-5">
                <a className="btn btn-primary px-4 me-2" href="#!">
                  Read More
                </a>
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                  (icon, i) => (
                    <a
                      key={i}
                      className="btn btn-outline-primary btn-square border-2 me-2"
                      href="#!"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

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
      <hr className="border-radius"></hr>
      {/* Construction Process Start */}
      <div className="container py-5">
        <h4 className="text-center mb-5" data-aos="fade-up">
          Our Design Process
        </h4>

        <div className="timeline position-relative">
          {/* Vertical Line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x h-100 border-start border-2 border-primary"
            style={{ zIndex: 0 }}
          ></div>

          {[
            { num: "01", title: "Site Plan", img: "/img/project-1.jpg" },
            {
              num: "02",
              title: "Architectural Floor Plan",
              img: "/img/project-2.jpg",
            },
            { num: "03", title: "3D Hall Layout", img: "/img/project-3.jpg" },
            {
              num: "04",
              title: "Structural Drawing",
              img: "/img/project-4.jpg",
            },
            {
              num: "05",
              title: "Elevation 3D Design",
              img: "/img/project-5.jpg",
            },
            { num: "06", title: "Approval Drawing", img: "/img/project-6.jpg" },
            {
              num: "07",
              title: "3D Interior Designs",
              img: "/img/project-1.jpg",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`timeline-item d-flex mb-5 justify-content-${
                i % 2 === 0 ? "start" : "end"
              }`}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Dot */}
              <div
                className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
                style={{ width: "20px", height: "20px", zIndex: 2 }}
              ></div>

              <div className="timeline-content bg-white shadow-sm text-center p-3 rounded w-48">
                <div className="step-number text-primary fw-bold display-6">
                  {step.num}
                </div>
                <h6 className="mt-2 mb-3">{step.title}</h6>
                <div className="ratio ratio-16x9">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <i className="fa-solid fa-chevron-down fs-3 text-muted"></i>
        </div>
      </div>

      {/* Construction Process End */}
      <hr></hr>
      {/* Design Process Start */}
      <div className="container py-5">
        <h4 className="text-center mb-5" data-aos="fade-up">
          Our Design Process
        </h4>

        <div className="timeline position-relative">
          {/* Vertical Line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x h-100 border-start border-2 border-primary"
            style={{ zIndex: 0 }}
          ></div>

          {[
            { num: "01", title: "Site Plan", img: "/img/project-1.jpg" },
            {
              num: "02",
              title: "Architectural Floor Plan",
              img: "/img/project-2.jpg",
            },
            { num: "03", title: "3D Hall Layout", img: "/img/project-3.jpg" },
            {
              num: "04",
              title: "Structural Drawing",
              img: "/img/project-4.jpg",
            },
            {
              num: "05",
              title: "Elevation 3D Design",
              img: "/img/project-5.jpg",
            },
            { num: "06", title: "Approval Drawing", img: "/img/project-6.jpg" },
            {
              num: "07",
              title: "3D Interior Designs",
              img: "/img/project-1.jpg",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`timeline-item d-flex mb-5 justify-content-${
                i % 2 === 0 ? "start" : "end"
              }`}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Dot */}
              <div
                className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
                style={{ width: "20px", height: "20px", zIndex: 2 }}
              ></div>

              <div className="timeline-content bg-white shadow-sm text-center p-3 rounded w-48">
                <div className="step-number text-primary fw-bold display-6">
                  {step.num}
                </div>
                <h6 className="mt-2 mb-3">{step.title}</h6>
                <div className="ratio ratio-16x9">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <i className="fa-solid fa-chevron-down fs-3 text-muted"></i>
        </div>
      </div>

      {/* Design Process End */}
    </>
  );
}
