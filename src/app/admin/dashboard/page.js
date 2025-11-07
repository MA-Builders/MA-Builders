"use client";
import Link from "next/link";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  //  Decode JWT only once when page loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded user:", decoded);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []); // <== important: empty dependency array

  //  Fetch stats from API
  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        if (data.success) {
          setStats(data.data);
        } else {
          console.error("Failed to fetch stats:", data.message);
        }
      } catch (err) {
        console.error("Failed to fetch Dashboard Details", err);
      }
    }
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // == Chart Data ==
  const userCount = {
    labels: ["Admin-User"],
    datasets: [
      {
        data: [stats.userCount],
        backgroundColor: ["#2f5966"],
        borderWidth: 2,
      },
    ],
  };

  const membersData = {
    labels: ["Members"],
    datasets: [
      {
        data: [stats.memberCount],
        backgroundColor: ["#2f5966"],
        borderWidth: 2,
      },
    ],
  };

  const constructionData = {
    labels: ["Residential", "Commercial"],
    datasets: [
      {
        data: [stats.constructions.residential, stats.constructions.commercial],
        backgroundColor: ["#2f5966", "#e1a73b"],
        borderWidth: 2,
      },
    ],
  };

  const interiorData = {
    labels: ["Residential", "Commercial"],
    datasets: [
      {
        data: [stats.interiors.residential, stats.interiors.commercial],
        backgroundColor: ["#2f5966", "#e1a73b"],
        borderWidth: 2,
      },
    ],
  };

  const portfolioData = {
    labels: ["Portfolio"],
    datasets: [
      {
        data: [stats.portfolioCount],
        backgroundColor: ["#2f5966"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 15, padding: 10 },
      },
    },
    cutout: "70%",
    maintainAspectRatio: false,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message);

      alert("Registration successful!");
      window.location.reload();
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <>
      {/* Hero Header */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 mb-0 animated slideInLeft text-gradient">
                Admin Dashboard
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
                    Admin Dashboard
                  </li>
                </ol>
              </nav>
            </div> */}
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="container mb-5">
        <h1 className="text-center text-gradient mb-4">Dashboard Overview</h1>
        {/* ✅ Greet logged-in admin */}
        <div className="mb-4">
          <h2 className="text-gradient">
            Hi, {user?.name}
          </h2>
        </div>
        <div className="row g-4">
          {/* Admin-User */}
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 dashboard-card shadow-sm">
              <h6 className="text-center">Admin Users</h6>
              <div style={{ height: "180px" }}>
                <Doughnut
                  data={userCount}
                  options={{
                    ...chartOptions,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </div>
          {/* Members */}
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 dashboard-card shadow-sm">
              <h6 className="text-center">Team Members</h6>
              <div style={{ height: "180px" }}>
                <Doughnut
                  data={membersData}
                  options={{
                    ...chartOptions,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </div>
          {/* Constructions */}
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 dashboard-card shadow-sm">
              <h6 className="text-center">Constructions</h6>
              <div style={{ height: "180px" }}>
                <Doughnut data={constructionData} options={chartOptions} />
              </div>
            </div>
          </div>
          {/* Interiors */}
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 dashboard-card shadow-sm">
              <h6 className="text-center">Interiors</h6>
              <div style={{ height: "180px" }}>
                <Doughnut data={interiorData} options={chartOptions} />
              </div>
            </div>
          </div>
          {/* Portfolio */}
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 dashboard-card shadow-sm">
              <h6 className="text-center">Portfolios</h6>
              <div style={{ height: "180px" }}>
                <Doughnut
                  data={portfolioData}
                  options={{
                    ...chartOptions,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
}