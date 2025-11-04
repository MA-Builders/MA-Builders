"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/portfolio", { cache: "no-store" }); // your GET endpoint
        if (!res.ok) throw new Error("Failed to fetch portfolios");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    };
    fetchData();
  }, []);
  
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
  }, [projects]);

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
              Explore our featured architectural and construction projects.
            </p>
          </div>

          <div className="row gy-5">
            {projects.length === 0 ? (
              <p className="text-center text-muted">No projects found.</p>
            ) : (
              projects.map((p, i) => (
                <div key={p._id} className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                    {/* ✅ Dynamic Carousel */}
                    <div
                      id={`carousel-${i}`}
                      className="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner rounded-top-4">
                        {p.images?.map((img, idx) => (
                          <div
                            key={idx}
                            className={`carousel-item ${
                              idx === 0 ? "active" : ""
                            }`}
                          >
                            <Image
                              src={img}
                              alt={p.title}
                              width={600}
                              height={400}
                              className="d-block w-100"
                              style={{
                                objectFit: "cover",
                                transition: "all 1s ease",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      {/* ✅ Indicators */}
                      <div className="carousel-indicators custom-indicators">
                        {p.images?.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            data-bs-target={`#carousel-${i}`}
                            data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* ✅ Project Details */}
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-gradient">
                        {p.title}
                      </h5>
                      <p className="text-gradient mb-1">
                        <strong>Location:</strong> {p.location}
                      </p>
                      <p className="text-gradient mb-1">
                        <strong>Type:</strong> {p.type}
                      </p>
                      <p className="text-gradient mb-2">
                        <strong>Status:</strong> {p.status}
                      </p>
                      <p className="small text-gradient">{p.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
