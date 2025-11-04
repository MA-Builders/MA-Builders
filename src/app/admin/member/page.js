"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [editingMember, setEditingMember] = useState(null); // For popup modal
  const [preview, setPreview] = useState(null);

  // Fetch Members from API
  const fetchMembers = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/member");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error("Failed to fetch members:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Add New Member
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const res = await fetch("/api/member", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        e.target.reset();
        fetchMembers();
        alert("✅ Member added successfully!");
      } else {
        alert("❌ Failed to add member");
      }
    } catch (error) {
      console.error("Add Member Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Member
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this member?")) return;
    try {
      const res = await fetch(`/api/member/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchMembers();
      }
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // Handle Edit (open modal)
  const handleEditClick = async (id) => {
    try {
      const res = await fetch(`/api/member/${id}`);
      const data = await res.json();
      setEditingMember(data);
      setPreview(data.imageUrl);
    } catch (error) {
      console.error("Fetch member for edit failed:", error);
    }
  };

  // Handle Image Preview Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // Handle Update Member (PUT)
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingMember) return;
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const res = await fetch(`/api/member/${editingMember._id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        alert("✅ Member updated successfully!");
        setEditingMember(null);
        fetchMembers();
      } else {
        alert("❌ Update failed");
      }
    } catch (error) {
      console.error("Update Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h3 className="display-1 mb-0 animated slideInLeft text-gradient">
                Add Member
              </h3>
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
                    Add Member
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Add Member Form */}
      <div className="">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="container d-flex justify-content-center align-items-center mb-5">
              <form
                className="w-100"
                style={{ maxWidth: "500px" }}
                onSubmit={handleSubmit}
              >
                <h2 className="text-center mb-4 text-gradient">
                  ADD{" "}
                  <span className="text-uppercase text-gold bg-light px-2">
                    {" "}
                    MEMBER{" "}
                  </span>
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  required
                  className="form-control mb-3"
                />
                {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                  <div key={s} className="">
                    <input
                      type="text"
                      name={s}
                      placeholder={`${
                        s.charAt(0).toUpperCase() + s.slice(1)
                      } URL`}
                      className="form-control mb-3"
                    />
                  </div>
                ))}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  className="form-control mb-3"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-100 text-gold"
                  style={{
                    backgroundColor: loading ? "#D4A017" : "#0C3C44",
                    transition: "0.3s",
                  }}
                >
                  {loading ? "Adding..." : "Add Member"}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Team List */}
        <h2 className="text-center mb-5 text-gradient">
          Our Professional{" "}
          <span className="text-uppercase text-gold bg-light px-2">
            Designers
          </span>
        </h2>
        {fetching ? (
          <p className="text-center text-gradient">Loading members...</p>
        ) : members.length === 0 ? (
          <p className="text-center text-gradient">No members found.</p>
        ) : (
          <div className="row g-4 justify-content-center">
            {members.map((m, i) => (
              <div
                key={m._id}
                className="col-sm-6 col-md-4 col-lg-3 wow fadeIn"
                data-wow-delay={`${0.1 + i * 0.2}s`}
              >
                <div className="team-item position-relative overflow-hidden rounded">
                  <Image
                    className="img-fluid w-100"
                    src={m.imageUrl}
                    alt={m.name}
                    width={500}
                    height={300}
                  />
                  <div className="team-overlay d-flex flex-column align-items-center justify-content-bottom text-center">
                    <small className="mb-2 text-light">{m.role}</small>
                    <h4 className="lh-base text-light">{m.name}</h4>
                    <div className="d-flex justify-content-center mb-3">
                      {[
                        { key: "facebook", icon: "facebook-f" },
                        { key: "twitter", icon: "twitter" },
                        { key: "instagram", icon: "instagram" },
                        { key: "linkedin", icon: "linkedin-in" },
                      ].map((link, j) => {
                        const url = m[link.key];
                        return url ? (
                          <a
                            key={j}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm-square border-2 me-2"
                          >
                            <i className={`fab fa-${link.icon}`}></i>
                          </a>
                        ) : (
                          <button
                            key={j}
                            className="btn btn-outline-primary btn-sm-square border-2 me-2"
                          >
                            <i className={`fab fa-${link.icon}`}></i>
                          </button>
                        );
                      })}
                    </div>
                    {/* Admin Actions */}
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => handleEditClick(m._id)}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(m._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Popup Modal for Editing */}
      {editingMember && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h4 className="modal-title-add text-gradient pl-5">Edit Member</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingMember(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      defaultValue={editingMember.name}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="role"
                      defaultValue={editingMember.role}
                      className="form-control"
                      required
                    />
                  </div>
                  {/* Social Links */}
                  {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                    <div key={s} className="mb-3">
                      <label className="form-label text-capitalize">{s}</label>
                      <input
                        type="text"
                        name={s}
                        defaultValue={editingMember[s]}
                        className="form-control"
                      />
                    </div>
                  ))}
                  <div className="mb-3">
                    <div className="">
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update Member"}
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-danger px-4"
                      onClick={() => setEditingMember(null)}
                    >
                      Cancel
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
