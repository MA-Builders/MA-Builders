"use client";

import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
              <h1 className="display-1 mb-4 animated slideInRight">
                We Make Your <span className="text-primary">Home</span> Better
              </h1>
              <h5 className="d-inline-block border border-2 border-white py-3 px-5 mb-0 animated slideInRight">
                An Award Winning Studio Since 1990
              </h5>
            </div>
            <div className="col-lg-6">
              <div className="owl-carousel header-carousel animated fadeIn">
                {["hero-slider-1.jpg", "hero-slider-2.jpg", "hero-slider-3.jpg"].map(
                  (img, i) => (
                    <img key={i} className="img-fluid" src={`img/${img}`} alt="" />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="row g-5 animated fadeIn">
            {["Crafted Furniture", "Sustainable Material", "Innovative Architects", "Budget Friendly"].map(
              (text, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                      <i className="fa fa-robot text-primary"></i>
                    </div>
                    <h5 className="lh-base mb-0">{text}</h5>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                  <img className="img-fluid" src="img/about-1.jpg" alt="" />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                  <img className="img-fluid h-75" src="img/about-2.jpg" alt="" />
                  <div className="h-25 d-flex align-items-center text-center bg-primary px-4">
                    <h4 className="text-white lh-base mb-0">
                      Award Winning Studio Since 1990
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-5">
                <span className="text-uppercase text-primary bg-light px-2">History</span> of Our Creation
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor eirmod magna dolore erat amet
              </p>
              <p className="mb-5">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                labore lorem sit. Sanctus clita duo justo et tempor.
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
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
                  <a key={i} className="btn btn-outline-primary btn-square border-2 me-2" href="#!">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-5">
              Why People <span className="text-uppercase text-primary bg-light px-2">Choose Us</span>
            </h1>
          </div>
          <div className="row g-5 align-items-center text-center">
            {[
              { icon: "fa-calendar-alt", title: "25+ Years Experience" },
              { icon: "fa-tasks", title: "Best Interior Design" },
              { icon: "fa-pencil-ruler", title: "Innovative Architects" },
              { icon: "fa-user", title: "Customer Satisfaction" },
              { icon: "fa-hand-holding-usd", title: "Budget Friendly" },
              { icon: "fa-check", title: "Sustainable Material" },
            ].map((feature, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay={`${0.1 + i * 0.2}s`}
              >
                <i className={`fa ${feature.icon} fa-5x text-primary mb-4`}></i>
                <h4>{feature.title}</h4>
                <p className="mb-0">
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                  justo et tempor eirmod magna dolore erat amet
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Project Start */}
      <div className="container-fluid mt-5">
        <div className="container mt-5">
          <div className="row g-0">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                <h1 className="text-white mb-5">
                  Our Latest <span className="text-uppercase text-primary bg-light px-2">Projects</span>
                </h1>
                <h4 className="text-white mb-0">
                  <span className="display-1">6</span> of our latest projects
                </h4>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-0">
                {[
                  { img: "project-1.jpg", title: "Kitchen", count: 72 },
                  { img: "project-2.jpg", title: "Bathroom", count: 67 },
                  { img: "project-3.jpg", title: "Bedroom", count: 53 },
                  { img: "project-4.jpg", title: "Living Room", count: 33 },
                  { img: "project-5.jpg", title: "Furniture", count: 87 },
                  { img: "project-6.jpg", title: "Rennovation", count: 69 },
                ].map((proj, i) => (
                  <div key={i} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`${0.2 + i * 0.1}s`}>
                    <div className="project-item position-relative overflow-hidden">
                      <img className="img-fluid w-100" src={`img/${proj.img}`} alt="" />
                      <a className="project-overlay text-decoration-none" href="#!">
                        <h4 className="text-white">{proj.title}</h4>
                        <small className="text-white">{proj.count} Projects</small>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
      {/* Service Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="mb-5">
                Our Creative <span className="text-uppercase text-primary bg-light px-2">Services</span>
              </h1>
              <p>
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="d-flex align-items-center bg-light">
                <div className="btn-square flex-shrink-0 bg-primary" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-phone fa-2x text-white"></i>
                </div>
                <div className="px-3">
                  <h3>+0123456789</h3>
                  <span>Call us direct 24/7 for get a free consultation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-0">
                {[
                  { img: "service-1.jpg", title: "Interior Design", bg: "bg-primary" },
                  { img: "service-2.jpg", title: "Implement", bg: "bg-light" },
                  { img: "service-3.jpg", title: "Renovation", bg: "bg-light" },
                  { img: "service-4.jpg", title: "Commercial", bg: "bg-primary" },
                ].map((service, i) => (
                  <div key={i} className="col-md-6 wow fadeIn" data-wow-delay={`${0.2 + i * 0.2}s`}>
                    <div className={`service-item h-100 d-flex flex-column justify-content-center ${service.bg}`}>
                      <a href="#!" className="service-img position-relative mb-4">
                        <img className="img-fluid w-100" src={`img/${service.img}`} alt="" />
                        <h3>{service.title}</h3>
                      </a>
                      <p className="mb-0">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                        stet diam sed stet lorem.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Team Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <h1 className="mb-5">
            Our Professional <span className="text-uppercase text-primary bg-light px-2">Designers</span>
          </h1>
          <div className="row g-4">
            {[
              { img: "team-1.jpg", name: "Boris Johnson" },
              { img: "team-2.jpg", name: "Donald Pakura" },
              { img: "team-3.jpg", name: "Bradley Gordon" },
              { img: "team-4.jpg", name: "Alexander Bell" },
            ].map((member, i) => (
              <div key={i} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + i * 0.2}s`}>
                <div className="team-item position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={`img/${member.img}`} alt="" />
                  <div className="team-overlay">
                    <small className="mb-2">Architect</small>
                    <h4 className="lh-base text-light">{member.name}</h4>
                    <div className="d-flex justify-content-center">
                      {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, j) => (
                        <a key={j} className="btn btn-outline-primary btn-sm-square border-2 me-2" href="#!">
                          <i className={`fab fa-${icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9">
              <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.2s">
                {[
                  { img: "testimonial-1.jpg", title: "Sustainable Material", desc: "Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet", name: "Boris Johnson" },
                  { img: "testimonial-2.jpg", title: "Customer Satisfaction", desc: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet", name: "Alexander Bell" },
                  { img: "testimonial-3.jpg", title: "Budget Friendly", desc: "Diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet", name: "Bradley Gordon" },
                ].map((item, i) => (
                  <div key={i} className="testimonial-item">
                    <div className="row g-5 align-items-center">
                      <div className="col-md-6">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={`img/${item.img}`} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="testimonial-text pb-5 pb-md-0">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <h5 className="mb-0">{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Newsletter Start */}
      <div className="container-fluid bg-primary newsletter p-0">
        <div className="container p-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-5 ps-lg-0 text-start wow fadeIn" data-wow-delay="0.2s">
              <img className="img-fluid w-100" src="img/newsletter.jpg" alt="" />
            </div>
            <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
              <div className="p-5">
                <h1 className="mb-5">
                  Subscribe the <span className="text-uppercase text-primary bg-white px-2">Newsletter</span>
                </h1>
                <div className="position-relative w-100 mb-2">
                  <input className="form-control border-0 w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: 60 }} />
                  <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2">
                    <i className="fa fa-paper-plane text-primary fs-4"></i>
                  </button>
                </div>
                <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
    </>
  );
};
export default HomePage;
