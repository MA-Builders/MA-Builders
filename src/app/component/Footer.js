"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Logo & About */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <Link href="/" className="navbar-brand text-decoration-none">
                <Image
                  src="/img/ma-builders-logo.png"
                  alt="Brand Logo"
                  width={200}
                  height={50}
                  className="d-inline-block align-text-top mt-0"
                />
              </Link>
              <p className="mb-0 pt-3">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <Link
                  href="#!"
                  className="btn btn-outline-primary btn-square border-2 me-2"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn btn-outline-primary btn-square border-2 me-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn btn-outline-primary btn-square border-2 me-2"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn btn-outline-primary btn-square border-2 me-2"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="#!"
                  className="btn btn-outline-primary btn-square border-2 me-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            {/* Popular Links */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Links</h5>
              <Link href="#!" className="btn btn-link">
                About Us
              </Link>
              <Link href="#!" className="btn btn-link">
                Contact Us
              </Link>
              <Link href="#!" className="btn btn-link">
                Privacy Policy
              </Link>
              <Link href="#!" className="btn btn-link">
                Terms &amp; Condition
              </Link>
            </div>

            {/* Services */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <Link href="#!" className="btn btn-link">
                Interior Design
              </Link>
              <Link href="#!" className="btn btn-link">
                Project Planning
              </Link>
              <Link href="#!" className="btn btn-link">
                Renovation
              </Link>
              <Link href="#!" className="btn btn-link">
                Implement
              </Link>
              <Link href="#!" className="btn btn-link">
                Landscape Design
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link
                  href="#!"
                  className="border-bottom text-decoration-none text-white-50"
                >
                  Your Site Name
                </Link>
                , All Rights Reserved. Designed By{" "}
                <Link
                  href="https://htmlcodex.com"
                  className="border-bottom text-decoration-none text-white-50"
                >
                  HTML Codex
                </Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="#!" className="text-white-50 me-3">
                    Home
                  </Link>
                  <Link href="#!" className="text-white-50 me-3">
                    Cookies
                  </Link>
                  <Link href="#!" className="text-white-50 me-3">
                    Help
                  </Link>
                  <Link href="#!" className="text-white-50">
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <Link
        href="#!"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
