"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // Optional: hide spinner after page load
  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove("show");
      }, 500); // hide after 0.5s
    }
  }, []);

  return (
    <>
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid sticky-top">
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
                      href="/construction/commercial"
                       className={`dropdown-item ${
                    pathname === "/construction/commercial" ? "active" : ""
                  }`}
                    >
                      Commercial
                    </Link>
                    <Link
                      href="/construction/industrial"
                       className={`dropdown-item ${
                    pathname === "/construction/industrial" ? "active" : ""
                  }`}
                    >
                      Industrial
                    </Link>
                    <Link
                      href="/construction/residential"
                       className={`dropdown-item ${
                    pathname === "/construction/residential" ? "active" : ""
                  }`}
                    >
                      Residental
                    </Link>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Link
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Interiors +
                  </Link>
                  <div className="dropdown-menu bg-light mt-2 text-center">
                    <Link href="/interior/commercial"  className={`dropdown-item ${
                    pathname === "/interior/commercial" ? "active" : ""
                  }`}>
                      Commercial
                    </Link>
                    <Link href="/interior/industrial"  className={`dropdown-item ${
                    pathname === "/interior/industrial" ? "active" : ""
                  }`}>
                      Industrial
                    </Link>
                    <Link href="/interior/residential"  className={`dropdown-item ${
                    pathname === "/interior/residential" ? "active" : ""
                  }`}>
                      Residental
                    </Link>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className={
                    pathname === "/blog"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  Blogs
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
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
