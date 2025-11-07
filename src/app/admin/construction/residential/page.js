"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminCommercial() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({});
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all projects on load
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/project");
      const data = await res.json();
      if (res.ok) {
        // Show only commercial projects
        const filtered = data.filter(
          (p) =>
            p.category === "Construction" && p.subCategory === "Residential"
        );
        setProjects(filtered);
      } else {
        console.error("Error fetching projects:", data.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // ✅ Handle Add Project
  const handleAddProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/project", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        alert("Project added successfully!");
        form.reset();
        fetchProjects();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Edit Modal Open
  const openEditModal = (project) => {
    setEditData(project);
    const modal = new bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  // ✅ Handle Update Project
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(`/api/project/${editData._id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        alert("Project updated successfully!");
        fetchProjects();
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("editModal")
        );
        modal.hide();
      } else {
        alert("Error updating project: " + data.error);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  // ✅ Handle Delete Project
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/project/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        alert("Project deleted successfully!");
        fetchProjects();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <>
      {/* hero-section */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft text-gradient">
                Residential
              </h1>
            </div>
            {/* <div className="col-lg-6 animated slideInRight">
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
                    Add Residential
                  </li>
                </ol>
              </nav>
            </div> */}
          </div>
        </div>
      </div>

      {/* form */}
      <div className="container d-flex justify-content-center align-items-center mb-5">
        <form
          className="w-100"
          style={{ maxWidth: "500px" }}
          onSubmit={handleAddProject}
        >
          <h2 className="text-center mb-4 text-gradient">
            ADD{" "}
            <span className="text-uppercase text-gold bg-light px-2">
              Project
            </span>
          </h2>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select name="category" className="form-select" required>
              <option value="">Select Category</option>
              <option value="Construction">Construction</option>
              <option value="Interior">Interior</option>
            </select>
          </div>

          {/* Subcategory */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Sub Category</label>
            <select name="subCategory" className="form-select" required>
              <option value="">Select Sub Category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Title */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter project description"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Date</label>
            <input type="date" name="date" className="form-control" />
          </div>

          {/* Author */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Enter author name"
            />
          </div>

          {/* Status */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Status</label>
            <select name="status" className="form-select">
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Image */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Upload Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 text-gold"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>
      </div>

      {/* Edit Modal */}
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
                Edit Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateProject}>
                <select
                  name="category"
                  className="form-select mb-3"
                  defaultValue={editData.category}
                >
                  <option value="Construction">Construction</option>
                  <option value="Interior">Interior</option>
                </select>

                <select
                  name="subCategory"
                  className="form-select mb-3"
                  defaultValue={editData.subCategory}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>

                <input
                  type="text"
                  name="title"
                  className="form-control mb-3"
                  defaultValue={editData.title}
                />

                <textarea
                  name="description"
                  className="form-control mb-3"
                  rows="3"
                  defaultValue={editData.description}
                ></textarea>

                <input
                  type="text"
                  name="author"
                  className="form-control mb-3"
                  defaultValue={editData.author}
                />

                <input
                  type="date"
                  name="date"
                  className="form-control mb-3"
                  defaultValue={
                    editData.date ? editData.date.split("T")[0] : ""
                  }
                />

                <select
                  name="status"
                  className="form-select mb-3"
                  defaultValue={editData.status}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>

                <input
                  type="file"
                  name="image"
                  className="form-control mb-3"
                  accept="image/*"
                />

                <button type="submit" className="btn btn-primary w-100">
                  Update Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Display Projects */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-5 text-gradient">
              Our{" "}
              <span className="text-uppercase text-gold bg-light px-2">
                Commercial Projects
              </span>
            </h1>
          </div>
          <div className="row g-5">
            {projects.map((blog, index) => (
              <div
                key={blog._id}
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.2}s`}
              >
                <div className="card border-0 shadow-sm h-100 overflow-hidden blog-card rounded-4">
                  <div className="position-relative rounded-top-4 overflow-hidden">
                    <Image
                      src={blog.image || "/img/default.jpg"}
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
                    <h5 className="card-title mb-3 fw-bold text-gradient">
                      {blog.title}
                    </h5>
                    <p className="card-text text-gradient">
                      {blog.description}
                    </p>

                    <div className="d-flex justify-content-between mt-3">
                      <button
                        onClick={() => openEditModal(blog)}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="card-footer bg-gradient d-flex justify-content-between align-items-center border-0 rounded-bottom-4">
                    <small className="text-gold">
                      <i className="fa fa-calendar-alt me-2 "></i>{" "}
                      {new Date(blog.date).toDateString()}
                    </small>
                    <small className="text-gold">
                      <i className="fa fa-user me-2"></i> {blog.author}
                    </small>
                  </div>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <p className="text-center text-gradient">No projects found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
