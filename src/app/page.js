"use client";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* Hero Start */}
      <div className="hero-header-home">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="hero-video"
        >
          <source src="/img/kamadhenu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay-custom"></div>
        <div className="hero-content">
          <h1 className="display-3 fw-bold mb-4 text-white">
            We Make Your <span className="text-muted">Living</span> Better
          </h1>
          <h5 className="d-inline-block border border-2 border-light text-white py-3 px-5 mb-0">
            An Award Winning Studio Since 1990
          </h5>
        </div>
        <button
          onClick={toggleMute}
          className="btn btn-outline-light rounded-circle position-absolute bottom-0 start-0 m-4 d-flex align-items-center justify-content-center"
          style={{
            width: "44px",
            height: "44px",
            backdropFilter: "blur(5px)",
            zIndex: 5,
          }}
          aria-label="Toggle audio"
        >
          {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>
      {/* Hero End */}
      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-in">
            <h1 className="text-gradient">
              Why People{" "}
              <span className="text-uppercase bg-light text-gold px-2">
                Choose Us
              </span>
            </h1>
          </div>
          <div className="row g-5 text-center">
            {[
              {
                icon: "fa-calendar-alt",
                title: "10+ Years Experience",
                description:
                  "We have built trust with a decade of hands-on experience in construction and design.",
              },
              {
                icon: "fa-tasks",
                title: "Best Interior Design",
                description:
                  "Our expert designers create modern, elegant, and functional living spaces.",
              },
              {
                icon: "fa-pencil-ruler",
                title: "Innovative Architects",
                description:
                  "We bring creative architectural ideas to life with precision and style.",
              },
              {
                icon: "fa-user",
                title: "Customer Satisfaction",
                description:
                  "Your happiness is our top priority — we deliver exactly what you envision.",
              },
              {
                icon: "fa-hand-holding-usd",
                title: "Budget Friendly",
                description:
                  "Quality construction and design that fits your budget without compromise.",
              },
              {
                icon: "fa-check",
                title: "Sustainable Material",
                description:
                  "We use eco-friendly and durable materials for a greener tomorrow.",
              },
            ].map((feature, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="fade-in">
                <i
                  className={`fa ${feature.icon} fa-5x text-primary mb-4 text-gradient`}
                ></i>
                <h4 className="text-gradient">{feature.title}</h4>
                <p className="mb-0 text-gradient">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature End */}
      <hr className="border-info" />
      {/* Construction Process Start */}
      <div className="container-fluid py-5">
        <div className="responsive-container">
          <h4 className="text-center mb-5 text-gradient">
            Our Construction Process
          </h4>
          <div className="timeline-wrapper">
            <div className="timeline-vertical-line"></div>
            {/* STEP 1 */}
            <div className="timeline-step">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  01
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Site Visit
                </h6>
                <div
                  id="carouselStructure1"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-1.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-2.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center">
                  Initial Site Visit
                </h6>
                <p className="text-gradient mb-0">
                  Our team visits the site to analyze soil, slope, and
                  surroundings to ensure accurate foundation planning.
                </p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="timeline-step reverse">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  02
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Site Plan
                </h6>
                <div
                  id="carouselStructure2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-2.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-3.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure2"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure2"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center">
                  Site Plan Creation
                </h6>
                <p className="text-gradient mb-0">
                  Based on the site visit findings, we create a detailed site
                  plan showing plot dimensions, access points, and orientation.
                </p>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="timeline-step">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  03
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Client Discussion
                </h6>
                <div
                  id="carouselStructure3"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-3.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-4.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure3"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center3">
                  Design Discussion
                </h6>
                <p className="text-gradient mb-0">
                  We collaborate with clients to refine their preferences,
                  budget, and expectations before proceeding to 3D design.
                </p>
              </div>
            </div>
            {/* STEP 4 */}
            <div className="timeline-step reverse">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  04
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Elevation 3D Design
                </h6>
                <div
                  id="carouselStructure4"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-4.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-5.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure4"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure4"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center">
                  3D Elevation Design
                </h6>
                <p className="text-gradient mb-0">
                  We visualize your project through realistic 3D elevation
                  models showing materials, lighting, and exterior concepts.
                </p>
              </div>
            </div>
            {/* STEP 5 */}
            <div className="timeline-step">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  05
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Structural Drawing
                </h6>
                <div
                  id="carouselStructure5"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-5.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-6.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure5"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure5"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center">
                  Structural Drawings
                </h6>
                <p className="text-gradient mb-0">
                  Our engineers prepare detailed structural layouts ensuring
                  safety, strength, and adherence to standards.
                </p>
              </div>
            </div>
            {/* STEP 6 */}
            <div className="timeline-step reverse">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  06
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  3D Interior Design
                </h6>
                <div
                  id="carouselStructure6"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-6.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-1.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                  </div>
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselStructure6"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselStructure6"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2 text-center">
                  3D Interior Visualization
                </h6>
                <p className="text-gradient mb-0">
                  We bring your interiors to life with 3D renders, showing
                  furniture, lighting, and color schemes before execution.
                </p>
              </div>
            </div>
            {/* STEP 7 */}
            <div className="timeline-step">
              <div className="timeline-image-box">
                <div className="step-number text-gradient fw-bold display-6 text-center">
                  07
                </div>
                <h6 className="mt-2 mb-3 text-gradient text-center">
                  Execution
                </h6>
                <div
                  id="carouselStructure7"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-inner border-hover">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-1.jpg"
                        alt="Structure 1"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-2.jpg"
                        alt="Structure 2"
                        width={400}
                        height={400}
                        className="img-fluid rounded-4 border border-3 "
                      />
                    </div>
                    <div className="carousel-indicators custom-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselStructure7"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselStructure7"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-text-box">
                <h6 className="fw-bold text-gold mb-2">Project Execution</h6>
                <p className="text-gradient mb-0">
                  The construction begins following approved drawings,
                  supervised closely to ensure precision and quality.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <i className="fa-solid fa-chevron-down fs-3 text-gold"></i>
          </div>
        </div>
      </div>
      {/* Construction Process End */}
      <hr className="border-info" />
      {/* FAQ Start */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-gradient">FAQ</h2>
          <div className="accordion shadow-sm" id="faqAccordion">
            {/* Q1 - Construction */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold text-gradient collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  WHY DO YOU NEED A PROFESSIONAL ARCHITECT OR ENGINEER?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-gold">
                  A professional architect or engineer ensures your building is
                  safe, durable, and cost-effective. They design according to
                  local building codes, optimize materials, and plan for both
                  aesthetics and functionality, helping avoid costly mistakes
                  during construction.
                </div>
              </div>
            </div>

            {/* Q2 - Construction */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button fw-bold text-gradient collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  HOW LONG DOES A CONSTRUCTION PROJECT USUALLY TAKE?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-gold">
                  The duration depends on project size and design complexity. A
                  typical residential home may take 6–12 months from foundation
                  to finishing, while commercial projects can take longer. Our
                  team follows detailed timelines to ensure smooth and on-time
                  completion.
                </div>
              </div>
            </div>

            {/* Q3 - Construction */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button fw-bold text-gradient collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  HOW DOES MA BUILDERS ENSURE QUALITY IN CONSTRUCTION?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-gold">
                  We follow a strict quality-check process at every stage — from
                  material selection to structural inspection. Our experienced
                  engineers and site supervisors ensure that every project meets
                  safety standards and client expectations.
                </div>
              </div>
            </div>

            {/* Q4 - Interior */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button fw-bold text-gradient collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  HOW CAN INTERIOR DESIGN IMPROVE YOUR LIVING SPACE?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-gold">
                  Professional interior design enhances functionality, comfort,
                  and aesthetics. With smart space planning, lighting, and color
                  schemes, interiors can transform everyday living into an
                  inspiring experience tailored to your lifestyle.
                </div>
              </div>
            </div>

            {/* Q5 - Interior */}
            <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button fw-bold text-gradient collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  DO YOU PROVIDE CUSTOMIZED INTERIOR DESIGNS?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-gold">
                  Yes. We create fully customized designs based on your
                  preferences, lifestyle, and budget. From color palettes to
                  furniture selection, every element is designed to match your
                  personality and space requirements perfectly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
