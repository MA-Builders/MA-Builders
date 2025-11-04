"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch members from API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/member");
        const data = await res.json();
        setMembers(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5 text-center text-lg-start">
            <div className="col-lg-6">
              <h1 className="display-1 mb-0 animated slideInLeft text-gradient">
                About Us
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
          <div className="row g-5 align-items-center">
            {/* Left Images */}
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-6 mb-3 wow fadeIn" data-wow-delay="0.1s">
                  <Image
                    className="img-fluid rounded"
                    src="/img/about-1.jpg"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                  <Image
                    className="img-fluid h-75 rounded"
                    src="/img/about-2.jpg"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="h-25 d-flex align-items-center text-center bg-gradient px-3 mt-3 mt-md-0 rounded">
                    <h4 className="text-gold lh-base mb-0 fs-6 fs-md-5">
                      Award Winning Studio Since 2019
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div
              className="col-lg-6 col-md-12 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="mb-5 text-gradient text-center text-lg-start">
                <span className="text-uppercase text-gold bg-light px-2">
                  History
                </span>{" "}
                of Our Creation
              </h1>
              <p className="mb-4 text-gradient text-center text-lg-start">
                Our journey began with a simple vision — to design and build
                spaces that blend beauty, comfort, and functionality. Over the
                years, we&apos;ve grown into a trusted name known for delivering
                innovative architectural solutions and top-quality
                craftsmanship.
              </p>
              <p className="mb-5 text-gradient text-center text-lg-start">
                From residential projects to commercial spaces, our experienced
                team ensures every detail reflects precision and passion. We
                take pride in creating long-lasting designs that bring our
                client&apos;s dreams to life.
              </p>
              <div className="row g-3 text-center text-md-start">
                {[
                  ["Award Winning", "Professional Staff"],
                  ["24/7 Support", "Fair Prices"],
                ].map((group, i) => (
                  <div key={i} className="col-sm-6">
                    {group.map((item, j) => (
                      <h6
                        key={j}
                        className={`mb-${j === 0 ? "3" : "0"} text-gradient`}
                      >
                        <i className="fa fa-check text-primary me-2"></i>
                        {item}
                      </h6>
                    ))}
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-5 flex-wrap">
                <a
                  className="btn btn-primary px-4 me-2 mb-2 bg-gradient"
                  href="#!"
                >
                  Read More
                </a>
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                  (icon, i) => (
                    <Link
                      key={i}
                      className="btn btn-outline-primary btn-square border-2 me-2 mb-2"
                      href="#!"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </Link>
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
              <div key={i} className="col-sm-6 col-lg-4" data-aos="fade-in">
                <i
                  className={`fa ${feature.icon} fa-4x text-primary mb-4 text-gradient`}
                ></i>
                <h4 className="text-gradient">{feature.title}</h4>
                <p className="mb-0 text-gradient px-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Team Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
        <h1 className="mb-5 text-center text-gradient">
            Our Professional{" "}
            <span className="text-uppercase text-gold bg-light px-2">
              Designers
            </span>
          </h1>
          <div className="row g-4 justify-content-center">
            {members.length === 0 ? (
              <p className="text-center text-muted">No team members found.</p>
            ) : (
              members.map((m, i) => (
                <div
                  key={m._id || i}
                  className="col-sm-6 col-md-4 col-lg-3 wow fadeIn"
                  data-wow-delay={`${0.1 + i * 0.2}s`}
                >
                  <div className="team-item position-relative overflow-hidden rounded">
                    <Image
                      className="img-fluid w-100"
                      src={m.imageUrl || "/img/default-avatar.jpg"}
                      alt={m.name}
                      width={400}
                      height={400}
                    />

                    <div className="team-overlay d-flex flex-column align-items-center justify-content-bottom text-center">
                      <small className="mb-2 text-light">{m.role}</small>
                      <h4 className="lh-base text-light">{m.name}</h4>

                      {/* ✅ Always show icons, clickable only if link exists */}
                      <div className="d-flex justify-content-center">
                        {[
                          { key: "facebook", icon: "facebook-f" },
                          { key: "twitter", icon: "twitter" },
                          { key: "instagram", icon: "instagram" },
                          { key: "linkedin", icon: "linkedin-in" },
                        ].map((link, j) => {
                          const url = m[link.key];
                          return url ? (
                            <Link
                              key={j}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-primary btn-sm-square border-2 me-2"
                            >
                              <i className={`fab fa-${link.icon}`}></i>
                            </Link>
                          ) : (
                            <button
                              key={j}
                              className="btn btn-outline-primary btn-sm-square border-2 me-2"
                              title="No link available"
                            >
                              <i className={`fab fa-${link.icon}`}></i>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}
