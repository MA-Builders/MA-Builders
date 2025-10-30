"use client";
import Image from "next/image";
export default function ContactUsPage() {
  return (
    <>
      {/* Hero Start */}
      <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h3 className="display-6 mb-0 animated slideInLeft text-gradient ml-5">
                Contact Us
              </h3>
            </div>
            <div className="col-lg-6 animated slideInRight">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-gold" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-gradient active"
                    aria-current="page"
                  >
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
        </div>
      </div>
      {/* Hero End */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          {/* Section Title */}
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
             <h1 className="mb-5 text-gradient">
              Contact{" "}
              <span className="text-gold bg-light px-2">
                Us
              </span>
            </h1>
          </div>

          {/* Contact Form + Map Row */}
          <div className="row g-5 justify-content-center align-items-center">
            {/* Contact Form */}
            <div className="col-lg-5 wow fadeIn text-center" data-wow-delay="0.3s">
              <h5 className="text-gradient text-uppercase mb-3">Get In Touch</h5>
              <h1 className="mb-4 text-gradient">Contact For Any Query</h1>
              <a
                href="/img/contact-map.jpg" 
                download="MA_Builders_Contact_Map.jpg" 
                className="d-inline-block mt-3"
                title="Click to Download"
              >
                <Image
                  src="/img/team-1.jpg"
                  alt="MA Builders Contact Map"
                  width={300}
                  height={400}
                  className="img-fluid rounded shadow-sm border"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                />
              </a>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <p className="text-center mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
              </p>
              <form className="pt-5 text-gradient">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Google Map */}
            <div className="row pt-5 pb-5">
              <div
                className="col-lg-12 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: "450px" }}
              >
                <div className="position-relative rounded overflow-hidden h-100 shadow-sm">
                  <iframe
                    className="position-relative w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4784708940747!2d77.27169737478984!3d9.725475490366358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0701ce98bf8b89%3A0xe923947e50baf2eb!2sCloudheard%20Consultancy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757485982735!5m2!1sen!2sin"
                    style={{
                      minHeight: "450px",
                      border: 0,
                      borderRadius: "8px",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact End */}
      {/* Newsletter Start */}
      {/* <div className="container-fluid bg-primary hero-header p-2">
        <div className="container p-0">
          <div className="row g-0 align-items-center">
            <div
              className="col-md-5 ps-lg-0 text-start wow fadeIn"
              data-wow-delay="0.2s"
            >
              <img
                className="img-fluid w-100"
                src="/img/newsletter.jpg"
                alt="Newsletter"
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
                    style={{ height: "60px" }}
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
      </div> */}
      {/* Newsletter End */}
    </>
  );
}
