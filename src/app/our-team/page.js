"use client";
import React from "react";
import Image from "next/image";
export default function OurTeam() {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft">About</h1>
            </div>
            <div className="col-lg-6 animated slideInRight">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-primary" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </nav>
            </div>
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
                  <img
                    className="img-fluid h-75"
                    src="img/about-2.jpg"
                    alt=""
                  />
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
                <span className="text-uppercase text-primary bg-light px-2">
                  History
                </span>{" "}
                of Our Creation
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <p className="mb-5">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor.
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
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-5">
              Why People{" "}
              <span className="text-uppercase text-primary bg-light px-2">
                Choose Us
              </span>
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
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem
                  sit. Sanctus clita duo justo et tempor eirmod magna dolore
                  erat amet
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Team Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <h1 className="mb-5">
            Our Professional{" "}
            <span className="text-uppercase text-primary bg-light px-2">
              Designers
            </span>
          </h1>
          <div className="row g-4">
            {[
              { img: "team-1.jpg", name: "Boris Johnson" },
              { img: "team-2.jpg", name: "Donald Pakura" },
              { img: "team-3.jpg", name: "Bradley Gordon" },
              { img: "team-4.jpg", name: "Alexander Bell" },
            ].map((member, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay={`${0.1 + i * 0.2}s`}
              >
                <div className="team-item position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={`img/${member.img}`}
                    alt=""
                  />
                  <div className="team-overlay">
                    <small className="mb-2">Architect</small>
                    <h4 className="lh-base text-light">{member.name}</h4>
                    <div className="d-flex justify-content-center">
                      {[
                        "facebook-f",
                        "twitter",
                        "instagram",
                        "linkedin-in",
                      ].map((icon, j) => (
                        <a
                          key={j}
                          className="btn btn-outline-primary btn-sm-square border-2 me-2"
                          href="#!"
                        >
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
      {/* Newsletter Start */}
      <div className="container-fluid bg-primary newsletter p-0">
        <div className="container p-0">
          <div className="row g-0 align-items-center">
            <div
              className="col-md-5 ps-lg-0 text-start wow fadeIn"
              data-wow-delay="0.2s"
            >
              <Image
                className="img-fluid w-100"
                src="/img/newsletter.jpg"
                alt='Newsletter Image'
                width={200}
                height={50}
              />
            </div>
            <div
              className="col-md-7 py-5 newsletter-text wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-5">
                <h1 className="mb-5">
                  Subscribe the{" "}
                  <span className="text-uppercase text-primary bg-white px-2">
                    Newsletter
                  </span>
                </h1>
                <div className="position-relative w-100 mb-2">
                  <input
                    className="form-control border-0 w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Enter Your Email"
                    style={{ height: 60 }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"
                  >
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
}
