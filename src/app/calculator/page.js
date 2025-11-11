"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ConstructionCalculator() {
  const [constructionArea, setConstructionArea] = useState(0);
  const [packageType, setPackageType] = useState("");
  const [carParking, setCarParking] = useState(0);
  const [sump, setSump] = useState(0);
  const [wasteTank, setWasteTank] = useState(0);
  const [compoundWall, setCompoundWall] = useState(0);
  const [solarPower, setSolarPower] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const packageValues = {
    Basic: 1899,
    Standard: 2049,
    Premium: 2499,
  };

  // Pricing per unit
  const pricing = {
    carParking: 500, // per sq.ft
    sump: 50, // per litre
    wasteTank: 15000, // per tank
    compoundWall: 800, // per feet
    solarPower: 50000, // per kW
  };

  const calculateTotal = () => {
    if (!packageType || constructionArea === 0) return 0;

    const basePrice = packageValues[packageType] * constructionArea;
    const parkingCost = carParking * pricing.carParking;
    const sumpCost = sump * pricing.sump;
    const wasteTankCost = wasteTank * pricing.wasteTank;
    const wallCost = compoundWall * pricing.compoundWall;
    const solarCost = solarPower * pricing.solarPower;

    return (
      basePrice + parkingCost + sumpCost + wasteTankCost + wallCost + solarCost
    );
  };

  const total = calculateTotal();

  const handleSubmit = () => {
    alert(`Total Construction Cost: ₹ ${total.toLocaleString("en-IN")}`);
  };

  return (
    <div className="container my-4">
      <div className="row g-4 justify-content-center">
        <h2 className="text-center text-gradient mb-3">
          Construction Cost Calculator
        </h2>
        {/* Form 1 - Input Form */}
        <div className="col-lg-4">
          <div className="calculator-card bg-white-smoke rounded-4 shadow-sm p-4 mb-4">
            <div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    Construction area in sq.ft
                    <span className="badge bg-gradient ms-2">
                      {constructionArea}
                    </span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10000"
                  step="100"
                  value={constructionArea}
                  onChange={(e) => setConstructionArea(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0</span>
                  <span>10000</span>
                </div>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    Select Construction Package
                  </label>
                </strong>
                <select
                  className="form-select text-gradient"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                >
                  <option value="">Select value</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    Car Parking area in square feet (optional)
                    <span className="badge bg-gradient ms-2">{carParking}</span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10000"
                  step="100"
                  value={carParking}
                  onChange={(e) => setCarParking(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0</span>
                  <span>10000</span>
                </div>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    How many litres of underground sump required? (optional)
                    <span className="badge bg-gradient ms-2">{sump}</span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="20000"
                  step="500"
                  value={sump}
                  onChange={(e) => setSump(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0</span>
                  <span>20000</span>
                </div>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    How many plants waste water recycling tank required?
                    (optional)
                    <span className="badge bg-gradient ms-2">{wasteTank}</span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10"
                  step="1"
                  value={wasteTank}
                  onChange={(e) => setWasteTank(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0</span>
                  <span>10</span>
                </div>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    How much feet length compound wall do you require?
                    (optional)
                    <span className="badge bg-gradient ms-2">
                      {compoundWall}
                    </span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10"
                  step="1"
                  value={compoundWall}
                  onChange={(e) => setCompoundWall(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0</span>
                  <span>10</span>
                </div>
              </div>
              <div className="mb-4">
                <strong>
                  <label className="form-label text-gradient">
                    How much solar power do you require? (optional)
                    <span className="badge bg-gradient ms-2">{solarPower}</span>
                  </label>
                </strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="50"
                  step="1"
                  value={solarPower}
                  onChange={(e) => setSolarPower(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-gradient small">
                  <span>0 kW</span>
                  <span>50 kW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form 2 - Summary with Accordion */}
        <div className="col-lg-4">
          <div className="calculator-card bg-white-smoke rounded-4 shadow-sm p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="m-0 text-gradient">Total Summary:</h3>
              <button
                className="btn btn-sm btn-primary w-20"
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                type="button"
              >
                {isAccordionOpen ? "-" : "+"}
              </button>
            </div>

            <div
              className={`accordion-content ${isAccordionOpen ? "" : "d-none"}`}
            >
              <div>
                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      Construction area in sq.ft
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{constructionArea}</div>
                </div>
                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      Select Construction Package
                    </label>
                  </strong>
                  <div className="text-end fw-bold">
                    {packageType || "Not Selected"}
                  </div>
                </div>
                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      Car Parking area in square feet (optional)
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{carParking}</div>
                </div>

                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      How many litres of underground sump required? (optional)
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{sump}</div>
                </div>

                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      How many plants waste water recycling tank required?
                      (optional)
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{wasteTank}</div>
                </div>

                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      How much feet length compound wall do you require?
                      (optional)
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{compoundWall}</div>
                </div>

                <div className="mb-3 text-gradient">
                  <strong>
                    <label className="form-label">
                      How much solar power do you require? (optional)
                    </label>
                  </strong>
                  <div className="text-end fw-bold">{solarPower} kW</div>
                </div>

                <div className="total-summary bg-light rounded-4 p-3 mt-4">
                  <h6 className="fw-bold mb-3 text-gradient">Cost Breakdown</h6>
                  <ul className="list-unstyled mb-2 text-gradient">
                    <li className="d-flex justify-content-between mb-2">
                      <span>Construction Area ({constructionArea} sq.ft):</span>
                      <span className="fw-bold">
                        ₹{" "}
                        {packageType
                          ? (
                              packageValues[packageType] * constructionArea
                            ).toLocaleString("en-IN")
                          : "0"}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between mb-2">
                      <span>Package Rate:</span>
                      <span className="fw-bold">
                        {packageType
                          ? `₹ ${packageValues[packageType]}/sq.ft`
                          : "N/A"}
                      </span>
                    </li>
                    {carParking > 0 && (
                      <li className="d-flex justify-content-between mb-2">
                        <span>Car Parking:</span>
                        <span className="fw-bold">
                          ₹{" "}
                          {(carParking * pricing.carParking).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </li>
                    )}
                    {sump > 0 && (
                      <li className="d-flex justify-content-between mb-2">
                        <span>Underground Sump:</span>
                        <span className="fw-bold">
                          ₹ {(sump * pricing.sump).toLocaleString("en-IN")}
                        </span>
                      </li>
                    )}
                    {wasteTank > 0 && (
                      <li className="d-flex justify-content-between mb-2">
                        <span>Waste Tank:</span>
                        <span className="fw-bold">
                          ₹{" "}
                          {(wasteTank * pricing.wasteTank).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </li>
                    )}
                    {compoundWall > 0 && (
                      <li className="d-flex justify-content-between mb-2">
                        <span>Compound Wall:</span>
                        <span className="fw-bold">
                          ₹{" "}
                          {(compoundWall * pricing.compoundWall).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </li>
                    )}
                    {solarPower > 0 && (
                      <li className="d-flex justify-content-between mb-2">
                        <span>Solar Power:</span>
                        <span className="fw-bold">
                          ₹{" "}
                          {(solarPower * pricing.solarPower).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </li>
                    )}
                  </ul>
                  <hr />
                  <h5 className="text-end text-gradient fw-bold">
                    ₹ {total.toLocaleString("en-IN")}
                  </h5>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary w-100 mt-3"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* Collapsed view */}
            {!isAccordionOpen && (
              <div className="text-center py-3">
                <h4 className="text-gradient fw-bold">
                  ₹ {total.toLocaleString("en-IN")}
                </h4>
                <button
                  type="button"
                  className="btn btn-primary w-100 mt-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
