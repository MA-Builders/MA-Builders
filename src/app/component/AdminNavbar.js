"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => spinner.classList.remove("show"), 400);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/");
  };

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
      <div className="container-fluid sticky-top bg-light border-bottom border-2 border-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link
              href="/admin/dashboard"
              className="navbar-brand text-decoration-none"
            >
              <Image
                src="/img/ma-builders-logo.png"
                alt="Admin Logo"
                width={200}
                height={50}
                className="d-inline-block align-text-top mt-0"
              />
            </Link>

            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#adminNavbar"
              aria-controls="adminNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="adminNavbar">
              <div className="navbar-nav ms-auto">
                <Link
                  href="/admin/dashboard"
                  className={`nav-item nav-link ${
                    pathname === "/admin/dashboard" ? "active" : ""
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/member"
                  className={`nav-item nav-link ${
                    pathname === "/admin/member" ? "active" : ""
                  }`}
                >
                  Add Member
                </Link>
                {/* Team Management Dropdown */}
                <div className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Construction +
                  </Link>
                  <div className="dropdown-menu bg-light mt-2 text-center">
                    <Link
                      href="/admin/construction/commercial"
                      className={`dropdown-item ${
                        pathname === "/admin/construction/commercial" ? "active" : ""
                      }`}
                    >
                      Add Commercial
                    </Link>
                    <Link
                      href="/admin/construction/residential"
                      className={`dropdown-item ${
                        pathname === "/admin/construction/residential" ? "active" : ""
                      }`}
                    >
                      Add Residential
                    </Link>
                  </div>
                </div>

                {/* Projects Dropdown */}
                <div className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Interior +
                  </Link>
                  <div className="dropdown-menu bg-light mt-2 text-center">
                    <Link
                      href="/admin/interior/commercial"
                      className={`dropdown-item ${
                        pathname === "/admin/interior/commercial" ? "active" : ""
                      }`}
                    >
                      Add Commercial
                    </Link>
                    <Link
                      href="/admin/interior/residential"
                      className={`dropdown-item ${
                        pathname === "/admin/interior/residential" ? "active" : ""
                      }`}
                    >
                      Add Residential
                    </Link>
                  </div>
                </div>
                <Link
                  href="/admin/portfolio"
                  className={`nav-item nav-link ${
                    pathname === "/admin/portfolio" ? "active" : ""
                  }`}
                >
                  Add Portfolio
                </Link>
                <span
                  onClick={handleLogout}
                  className="btn btn-outline-login ms-lg-3 mt-2 mt-lg-0"
                >
                  Logout
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
