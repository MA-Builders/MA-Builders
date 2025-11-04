"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    status: "",
    description: "",
    image1: null,
    image2: null,
    image3: null,
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setPortfolios(data);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) fd.append(key, value);
      });

      const url = editingId ? `/api/portfolio/${editingId}` : "/api/portfolio";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: fd });
      if (!res.ok) throw new Error("Failed to save portfolio");

      await fetchPortfolios();
      resetForm();
      if (editingId) {
        closeModal();
      } else {
        const formElement = e.target;
        formElement.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      type: "",
      status: "",
      description: "",
      image1: "",
      image2: "",
      image3: "",
    });
    setEditingId(null);
  };

  const handleEdit = (p) => {
    setEditingId(p._id);
    setFormData({
      title: p.title,
      location: p.location,
      type: p.type,
      status: p.status,
      description: p.description,
      image1: null,
      image2: null,
      image3: null,
    });

    // ✅ Open modal manually
    const modal = new window.bootstrap.Modal(
      document.getElementById("editModal")
    );
    modal.show();
  };

  const closeModal = () => {
    const modalEl = document.getElementById("editModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this portfolio?")) return;
    try {
      await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
      await fetchPortfolios();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    if (
      portfolios.length > 0 &&
      typeof window !== "undefined" &&
      window.bootstrap
    ) {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((carousel) => {
        const existing = window.bootstrap.Carousel.getInstance(carousel);
        if (existing) existing.dispose();
        new window.bootstrap.Carousel(carousel, {
          interval: 3000, // 3 seconds
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      });
    }
  }, [portfolios]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const modalEl = document.getElementById("editModal");
      modalEl?.addEventListener("hidden.bs.modal", resetForm);
      return () => modalEl?.removeEventListener("hidden.bs.modal", resetForm);
    }
  }, []);
  return (
    <>
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
                    Add Portfolio
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===== ADD FORM ===== */}
      <div className="container d-flex justify-content-center align-items-center mb-5">
        <form
          className="w-100"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4 text-gradient">
            ADD{" "}
            <span className="text-uppercase text-gold bg-light px-2">
              Portfolio
            </span>
          </h2>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            className="form-control mb-3"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            className="form-control mb-3"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="status"
            className="form-control mb-3"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            className="form-control mb-3"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="file"
            name="image1"
            className="form-control mb-3"
            accept="image/*"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image2"
            className="form-control mb-3"
            accept="image/*"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image3"
            className="form-control mb-3"
            accept="image/*"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary w-100 text-gold">
            Add Portfolio
          </button>
        </form>
      </div>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title text-gradient" id="editModalLabel">
                Edit Portfolio
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  className="form-control mb-3"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="location"
                  className="form-control mb-3"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="type"
                  className="form-control mb-3"
                  placeholder="Type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="status"
                  className="form-control mb-3"
                  placeholder="Status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  className="form-control mb-3"
                  placeholder="Description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <input
                  type="file"
                  name="image1"
                  className="form-control mb-3"
                  accept="image/*"
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="image2"
                  className="form-control mb-3"
                  accept="image/*"
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="image3"
                  className="form-control mb-3"
                  accept="image/*"
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary w-100">
                  Update Portfolio
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ===== PORTFOLIO LIST ===== */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="mb-3 text-gradient">
            Our{" "}
            <span className="text-uppercase text-gold bg-light px-2">
              Portfolio
            </span>
          </h1>
          {/* <p className="text-gradient">
            Explore expert insights, design trends, and construction tips from
            our professional architects.
          </p> */}
        </div>
        <div className="row gy-5">
          {portfolios.length === 0 ? (
            <p className="text-center text-muted">No portfolios found.</p>
          ) : (
            portfolios.map((p, i) => (
              <div key={p._id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
                  <div
                    id={`carousel-${i}`}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
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
                              transition:
                                "opacity 1s ease-in-out, transform 1s ease-in-out",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${i}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${i}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>

                    <div className="carousel-indicators custom-indicators">
                      {p.images?.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          data-bs-target={`#carousel-${i}`}
                          data-bs-slide-to={idx}
                          className={idx === 0 ? "active" : ""}
                          aria-current={idx === 0 ? "true" : "false"}
                          aria-label={`Slide ${idx + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>

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

                    <div className="d-flex justify-content-between mt-3">
                      <button
                        onClick={() => handleEdit(p)}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
