"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function BlogPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((carousel, index) => {
        new window.bootstrap.Carousel(carousel, {
          interval: 3000 + index * 500, // slight stagger for smooth transition
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft text-gradient">
                Portfolio
              </h1>
            </div>
            <div className="col-lg-6 animated slideInRight">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-gold" href="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-gradient active"
                    aria-current="page"
                  >
                    Portfolio
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-5 text-gradient">
              Our{" "}
              <span className="text-uppercase text-gold bg-light px-2">
                Portfolio
              </span>
            </h1>
            <p className="text-gradient mb-5">
              Explore expert insights, design trends, and construction tips from
              our professional architects.
            </p>
          </div>
          <div className="row gy-5">
            {/* Project 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                <div
                  id="carousel-1"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  <div className="carousel-inner rounded-top-4">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-1.jpg"
                        alt="Luxury Villa"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-2.jpg"
                        alt="Luxury Villa"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-3.jpg"
                        alt="Luxury Villa"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-gradient">
                    Luxury Villa
                  </h5>
                  <p className="text-gradient mb-1">
                    <strong>Location:</strong> Coimbatore
                  </p>
                  <p className="text-gradient mb-1">
                    <strong>Type:</strong> Residential
                  </p>
                  <p className="text-gradient mb-2">
                    <strong>Status:</strong> Completed - June 2024
                  </p>
                  <p className="small text-gradient">
                    A modern villa featuring minimalistic design with natural
                    lighting and sustainable materials.
                  </p>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                <div
                  id="carousel-2"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="2"
                    ></button>
                  </div>

                  <div className="carousel-inner rounded-top-4">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-4.jpg"
                        alt="GreenTech Office Tower"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-5.jpg"
                        alt="GreenTech Office Tower"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-6.jpg"
                        alt="GreenTech Office Tower"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-bold text-gradient">
                    GreenTech Office Tower
                  </h5>
                  <p className="text-gradient mb-1">
                    <strong>Location:</strong> Chennai
                  </p>
                  <p className="text-gradient mb-1">
                    <strong>Type:</strong> Commercial
                  </p>
                  <p className="text-gradient mb-2">
                    <strong>Status:</strong> Ongoing - Expected 2025
                  </p>
                  <p className="small text-gradient">
                    High-rise corporate office designed with energy-efficient
                    glass facade and smart interiors.
                  </p>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                <div
                  id="carousel-3"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators custom-indicators">
                    <button
                      type="button"
                      data-bs-target="#carousel-3"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-3"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  <div className="carousel-inner rounded-top-4">
                    <div className="carousel-item active">
                      <Image
                        src="/img/project-6.jpg"
                        alt="Skyline Apartments"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-5.jpg"
                        alt="Skyline Apartments"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/img/project-4.jpg"
                        alt="Skyline Apartments"
                        width={600}
                        height={400}
                        className="d-block w-100"
                        style={{
                          objectFit: "cover",
                          transition: "all 1s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-gradient">
                    Skyline Apartments
                  </h5>
                  <p className="text-gradient mb-1">
                    <strong>Location:</strong> Madurai
                  </p>
                  <p className="text-gradient mb-1">
                    <strong>Type:</strong> Residential
                  </p>
                  <p className="text-gradient mb-2">
                    <strong>Status:</strong> Completed - March 2023
                  </p>
                  <p className="small text-gradient">
                    A 12-storey residential project with modern amenities,
                    landscaped gardens and rooftop leisure zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
