"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-white-smoke text-white-50 footer pt-5">
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
              <p className="mb-0 pt-3 text-gradient">
                At MA Builders, we combine expert craftsmanship with innovative
                design to deliver lasting results. <br/>From residential homes to
                commercial spaces, our team ensures every project reflects
                quality, trust, and attention to detail.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-gold mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3 text-gold"></i>
                <span className="text-gradient">123 Street, New York, USA</span>
              </p>
              <p>
                <i className="fa fa-phone-alt me-3 text-gold"></i>
                <span className="text-gradient">+012 345 67890</span>
              </p>
              <p>
                <i className="fa fa-envelope me-3 text-gold"></i>
                <span className="text-gradient">info@example.com</span>
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
              <h5 className="text-gold mb-4">Popular Links</h5>
              <Link href="/our-team" className="btn btn-link">
                About Us
              </Link>
              <Link href="contact-us" className="btn btn-link">
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
              <h5 className="text-gold mb-4">Our Services</h5>
              <Link href="#!" className="btn btn-link">
                Project Planning
              </Link>
              <Link href="#!" className="btn btn-link">
                Civil Work
              </Link>
              <Link href="#!" className="btn btn-link">
                Interior Design
              </Link>
              <Link href="#!" className="btn btn-link">
                Landscape Design
              </Link>
              <Link href="#!" className="btn btn-link">
                Renovation
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-gold text-md-start mb-3 mb-md-0">
                &copy; 2025 MA Builders | All Rights Reserved.
              </div>
              <div className="col-md-6 text-center text-gold text-md-end">
                Designed By CloudLabel.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <Link
        href="#!"
        className="btn btn-lg btn-primary btn-lg-square back-to-top bg-gradient"
      >
        <i className="bi bi-arrow-up text-gold"></i>
      </Link>
    </>
  );
}
