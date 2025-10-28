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

export default function ConIndus() {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="display-1 mb-0 animated slideInLeft text-gradient">
                Industrial
              </h2>
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
                    Industrial
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
                Industrial Projects
              </span>
            </h1>
            <p className="text-gradient mb-5">
              Explore expert insights, design trends, and construction tips from
              our professional architects.
            </p>
          </div>
          <div className="row g-5">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.2}s`}
              >
                <div className="card border-0 shadow-sm h-100 overflow-hidden blog-card rounded-4">
                  <div className="position-relative rounded-top-4 overflow-hidden">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      className="card-img-top"
                      width={600}
                      height={400}
                    />
                    <div className="category-badge-custom position-absolute top-0 start-0 px-3 py-1">
                      {blog.category}
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title mb-3 fw-bold text-gradient">{blog.title}</h5>
                    <p className="card-text text-gradient">{blog.description}</p>
                    <a
                      href="#!"
                      className="read-more-btn-custom btn rounded-pill mt-3"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="card-footer bg-gradient d-flex justify-content-between align-items-center border-0 rounded-bottom-4">
                    <small className="text-gold">
                      <i className="fa fa-calendar-alt me-2"></i> {blog.date}
                    </small>
                    <small className="text-gold">
                      <i className="fa fa-user me-2"></i> {blog.author}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
