"use client";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "5 Modern Architecture Trends to Watch in 2025",
    category: "Architecture",
    img: "/img/project-1.jpg",
    date: "Oct 22, 2025",
    author: "Admin",
    description:
      "Discover how sustainable materials and futuristic designs are reshaping modern living spaces.",
  },
  {
    id: 2,
    title: "Top 10 Interior Design Ideas for Small Spaces",
    category: "Interior",
    img: "/img/project-2.jpg",
    date: "Oct 10, 2025",
    author: "Sarah",
    description:
      "Transform limited spaces with these creative design hacks that add style and comfort.",
  },
  {
    id: 3,
    title: "How to Manage a Construction Project Efficiently",
    category: "Construction",
    img: "/img/project-3.jpg",
    date: "Sep 28, 2025",
    author: "Michael",
    description:
      "A practical guide for planning, budgeting, and executing construction projects seamlessly.",
  },
  {
    id: 4,
    title: "5 Modern Architecture Trends to Watch in 2025",
    category: "Construction",
    img: "/img/project-2.jpg",
    date: "Oct 22, 2025",
    author: "Admin",
    description:
      "Discover how sustainable materials and futuristic designs are reshaping modern living spaces.",
  },
  {
    id: 5,
    title: "5 Modern Architecture Trends to Watch in 2025",
    category: "Interior",
    img: "/img/project-3.jpg",
    date: "Oct 22, 2025",
    author: "Admin",
    description:
      "Discover how sustainable materials and futuristic designs are reshaping modern living spaces.",
  },
  {
    id: 6,
    title: "5 Modern Architecture Trends to Watch in 2025",
    category: "Construction",
    img: "/img/project-1.jpg",
    date: "Oct 22, 2025",
    author: "Admin",
    description:
      "Discover how sustainable materials and futuristic designs are reshaping modern living spaces.",
  },
];

export default function BlogPage() {
   const projects = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Coimbatore",
      type: "Residential",
      date: "Completed - June 2024",
      description:
        "A modern villa featuring minimalistic design with natural lighting and sustainable materials.",
      images: ["/img/project-1.jpg", "/img/project-2.jpg", "/img/project-3.jpg"],
    },
    {
      id: 2,
      title: "GreenTech Office Tower",
      location: "Chennai",
      type: "Commercial",
      date: "Ongoing - Expected 2025",
      description:
        "High-rise corporate office designed with energy-efficient glass facade and smart interiors.",
      images: ["/img/project-4.jpg", "/img/project-5.jpg"],
    },
    {
      id: 3,
      title: "Skyline Apartments",
      location: "Madurai",
      type: "Residential",
      date: "Completed - March 2023",
      description:
        "A 12-storey residential project with modern amenities, landscaped gardens and rooftop leisure zone.",
      images: ["/img/project-6.jpg", "/img/project-5.jpg"],
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft text-gradient">Portfolio</h1>
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
                    Portfolio
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container py-5">
        <div className="row gy-5">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                {/* Carousel */}
                <div
                  id={`carousel-${project.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.images.map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                      >
                        <Image
                          src={img}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="d-block w-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark rounded-circle p-2"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark rounded-circle p-2"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="text-muted mb-1">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <p className="text-muted mb-1">
                    <strong>Type:</strong> {project.type}
                  </p>
                  <p className="text-muted mb-2">
                    <strong>Status:</strong> {project.date}
                  </p>
                  <p className="small text-secondary">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
