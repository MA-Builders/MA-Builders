"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConCommercial() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch only Construction → Residential projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/project");
        const data = await res.json();
        if (res.ok) {
          const filtered = data.filter(
            (p) =>
              p.category === "Construction" && p.subCategory === "Residential"
          );
          setProjects(filtered);
        } else {
          console.error("Error fetching projects:", data.error);
        }
      } catch (err) {
        console.error("Network error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft text-gradient">
                Residential
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
                    Residential
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Blog Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-5 text-gradient">
              Our{" "}
              <span className="text-uppercase text-gold bg-light px-2">
                Commercial Projects
              </span>
            </h1>
            <p className="text-gradient mb-5">
              Explore expert insights, design trends, and construction tips from
              our professional architects.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gradient">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gradient">No commercial projects found.</p>
          ) : (
            <div className="row g-5">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  className="col-lg-4 col-md-6 wow fadeIn"
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <div className="card border-0 shadow-sm h-100 overflow-hidden blog-card rounded-4">
                    <div className="position-relative rounded-top-4 overflow-hidden">
                      <Image
                        src={project.image || "/img/default.jpg"}
                        alt={project.title}
                        className="card-img-top"
                        width={600}
                        height={400}
                      />
                      <div className="category-badge-custom position-absolute top-0 start-0 px-3 py-1">
                        {project.category}
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title mb-3 fw-bold text-gradient">
                        {project.title}
                      </h5>
                      <p className="card-text text-gradient">
                        {project.description}
                      </p>
                      <a
                        href="#!"
                        className="read-more-btn-custom btn rounded-pill mt-3"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-footer bg-gradient d-flex justify-content-between align-items-center border-0 rounded-bottom-4">
                      <small className="text-gold">
                        <i className="fa fa-calendar-alt me-2 "></i>
                        {new Date(project.date).toDateString()}
                      </small>
                      <small className="text-gold">
                        <i className="fa fa-user me-2"></i> {project.author}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}