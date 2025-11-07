"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove("show");
      }, 500);
    }
  }, []);

  useEffect(() => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
  const navCollapse = document.querySelector(".navbar-collapse");

  const hideNavbar = () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  // Collapse when clicking a normal nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", hideNavbar);
  });

  // Collapse when clicking a dropdown item (not the toggle)
  dropdownItems.forEach((item) => {
    item.addEventListener("click", hideNavbar);
  });

  // Cleanup
  return () => {
    navLinks.forEach((link) => {
      link.removeEventListener("click", hideNavbar);
    });
    dropdownItems.forEach((item) => {
      item.removeEventListener("click", hideNavbar);
    });
  };
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message);

      localStorage.setItem("token", data.token);

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("loginModal")
      );
      modal?.hide();

      alert("Login successful!");
      router.push("/admin/dashboard");
    } catch {
      setError("Login failed");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-gradient"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Navbar */}
      <div
        className="container-fluid sticky-top"
        style={
          pathname === "/"
            ? {
                background: "rgba(245, 245, 245, 0.5)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                transition:
                  "background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
              }
            : {
                transition:
                  "background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
              }
        }
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
            <Link href="/" className="navbar-brand text-decoration-none">
              <Image
                src="/img/ma-builders-logo.png"
                alt="Brand Logo"
                width={200}
                height={50}
                className="d-inline-block align-text-top mt-0"
              />
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/our-team"
                  className={
                    pathname === "/our-team"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  About
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Construction +
                  </Link>
                  <div className="dropdown-menu bg-light mt-2 text-center">
                    <Link
                      href="/construction/residential"
                      className={`dropdown-item ${
                        pathname === "/construction/residential" ? "active" : ""
                      }`}
                    >
                      Residential
                    </Link>
                    <Link
                      href="/construction/commercial"
                      className={`dropdown-item ${
                        pathname === "/construction/commercial" ? "active" : ""
                      }`}
                    >
                      Commercial
                    </Link>
                    {/* <Link
                      href="/construction/industrial"
                       className={`dropdown-item ${
                    pathname === "/construction/industrial" ? "active" : ""
                  }`}
                    >
                      Industrial
                    </Link> */}
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Link
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Interior +
                  </Link>
                  <div className="dropdown-menu bg-light mt-2 text-center">
                    <Link
                      href="/interior/residential"
                      className={`dropdown-item ${
                        pathname === "/interior/residential" ? "active" : ""
                      }`}
                    >
                      Residential
                    </Link>
                    <Link
                      href="/interior/commercial"
                      className={`dropdown-item ${
                        pathname === "/interior/commercial" ? "active" : ""
                      }`}
                    >
                      Commercial
                    </Link>
                    {/* <Link href="/interior/industrial"  className={`dropdown-item ${
                    pathname === "/interior/industrial" ? "active" : ""
                  }`}>
                      Industrial
                    </Link> */}
                  </div>
                </div>
                <Link
                  href="/portfolio"
                  className={
                    pathname === "/portfolio"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact-us"
                  className={
                    pathname === "/contact-us"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  Contact Us
                </Link>
              </div>
              <span
                className="btn btn-outline-login ms-lg-3 mt-2 mt-lg-0"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-0">
              <h5
                className="modal-title fw-bold text-gradient"
                id="loginModalLabel"
              >
                Admin Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-gradient">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control text-gradient"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label gradient">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </div>
                {/* ✅ Login Button */}
                <button
                  type="submit"
                  className="btn btn-primary text-gold w-100 mt-3"
                >
                  Login
                </button>
                {/* ✅ Register Link */}
                {/* <div className="text-center mt-3">
                  <p className="mb-0">
                    Don&apos;t have an account?{" "}
                    <span
                      href="/register"
                      onClick={handleRegisterClick}
                      className="text-gradient text-decoration-none fw-bold"
                      data-bs-dismiss="modal"
                    >
                      Register New User
                    </span>
                  </p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}