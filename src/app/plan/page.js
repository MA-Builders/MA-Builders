"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ConstructionCalculator from "../calculator/page";


export default function PricingSection() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {/* BASIC CARD */}
          <div className="col-md-4">
            <div className="pricing-card shadow-sm rounded-4">
              <div className="accord text-center text-gold p-3 rounded-top bg-gradient">
                <h5 className="accord-head m-1">Basic</h5>
                <small>price may vary depending on no.of floors</small>
              </div>
              <div className="text-center p-4">
                <strike className="text-gradient">₹1999</strike>
                <h2 className="text-gradient">₹1899/sft</h2>
              </div>
              <div className="accord-checked px-4 text-gradient">
                <p>
                  <i className="fa fa-check text-gradient me-2"></i> RCC framed
                  structure
                </p>
                <p>
                  <i className="fa fa-check text-gradient me-2"></i> Basic
                  materials
                </p>
                <p>
                  <i className="fa fa-check text-gradient me-2"></i> RCC
                  foundation & roof
                </p>
              </div>
              <div className="accordion px-3 pb-4" id="basic">
                {/* DESIGN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicDesign"
                    >
                      Design
                    </button>
                  </h2>
                  <div
                    id="basicDesign"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>2D Floor Plan</li>
                        <li>Basic Working Drawings</li>
                        <li>Structural Drawings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* STRUCTURE */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicStructure"
                    >
                      Structure
                    </button>
                  </h2>
                  <div
                    id="basicStructure"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>M20 Grade Concrete</li>
                        <li>Fe500 TMT Steel</li>
                        <li>RCC Frame Structure</li>
                        <li>9 External Walls</li>
                        <li>4.5 Internal Walls</li>
                        <li>Anti-termite Treatment</li>
                        <li>RCC Roof Slab</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* KITCHEN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicKitchen"
                    >
                      Kitchen
                    </button>
                  </h2>
                  <div
                    id="basicKitchen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Granite Countertop (₹90/sqft)</li>
                        <li>2ft Dado Tiles</li>
                        <li>Stainless Steel Sink</li>
                        <li>CP Tap Fittings</li>
                        <li>RO & Chimney Provision</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* BATHROOM */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicBath"
                    >
                      Bathroom
                    </button>
                  </h2>
                  <div
                    id="basicBath"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Ceramic Tiles up to 7ft</li>
                        <li>Anti-skid Floor Tiles</li>
                        <li>Basic CP Fittings</li>
                        <li>Western WC & Wash Basin</li>
                        <li>Geyser Provision</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PLUMBING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicPlumb"
                    >
                      Plumbing
                    </button>
                  </h2>
                  <div
                    id="basicPlumb"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>CPVC Hot/Cold Piping</li>
                        <li>PVC Waste Lines</li>
                        <li>Underground Sump Connection</li>
                        <li>Standard CP Fittings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* DOORS AND WINDOWS */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicDoors"
                    >
                      Doors & Windows
                    </button>
                  </h2>
                  <div
                    id="basicDoors"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Main Door - Wooden Frame + Flush Door</li>
                        <li>Laminated Internal Doors</li>
                        <li>UPVC/Aluminium Windows</li>
                        <li>MS Safety Grills</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PAINTING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicPaint"
                    >
                      Painting
                    </button>
                  </h2>
                  <div
                    id="basicPaint"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Putty + Primer + Emulsion (Interior)</li>
                        <li>Weather Coat Paint (Exterior)</li>
                        <li>MS Grills - Enamel Paint</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* FLOORING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicFloor"
                    >
                      Flooring
                    </button>
                  </h2>
                  <div
                    id="basicFloor"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Vitrified Tiles (2x2) - ₹40-50/sqft</li>
                        <li>Kota Stone for Stairs</li>
                        <li>Anti-skid Balcony Tiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ELECTRICAL */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicElec"
                    >
                      Electrical
                    </button>
                  </h2>
                  <div
                    id="basicElec"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Polycab/Finolex Wiring</li>
                        <li>Modular Switches</li>
                        <li>AC Point - Master Bedroom</li>
                        <li>TV Point - Living Room</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* OTHER INCLUSIVES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicOther"
                    >
                      Other Inclusives
                    </button>
                  </h2>
                  <div
                    id="basicOther"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Basic Site Cleaning</li>
                        <li>Material Transport</li>
                        <li>Labour & Scaffolding</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* EXTRA CHARGES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicExtra"
                    >
                      Extra Charges
                    </button>
                  </h2>
                  <div
                    id="basicExtra"
                    className="accordion-collapse collapse"
                    data-bs-parent="#basic"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Compound Wall</li>
                        <li>Borewell</li>
                        <li>Septic Tank</li>
                        <li>Modular Kitchen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ✅ STANDARD CARD (FULL) */}
          <div className="col-md-4">
            <div className="pricing-card shadow-sm rounded-4">
              <div className="accord text-center text-gold p-3 rounded-top bg-gradient">
                <h5 className="accord-head m-1">Standard</h5>
                <small>price may vary depending on no.of floors</small>
              </div>
              <div className="text-center p-4">
                <strike className="text-gradient">₹2299</strike>
                <h2 className="text-gradient">₹2099/sft</h2>
              </div>
              <div className="accord-checked px-4 text-gradient">
                <p>
                  <i className="fa fa-check me-2"></i> All features in basic
                  package
                </p>
                <p>
                  <i className="fa fa-check me-2"></i> Free Smart Home
                  Automation
                </p>
                <p>
                  <i className="fa fa-check me-2"></i> Free Organic Terrace
                  Gardening
                </p>
              </div>
              <div className="accordion px-3 pb-4" id="standard">
                {/* DESIGN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardDesign"
                    >
                      Design
                    </button>
                  </h2>
                  <div
                    id="standardDesign"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>2D Floor Plan</li>
                        <li>3D Elevation Design</li>
                        <li>Structural Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* STRUCTURE */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardStructure"
                    >
                      Structure
                    </button>
                  </h2>
                  <div
                    id="standardStructure"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>M25 Grade Concrete</li>
                        <li>Fe550 Steel</li>
                        <li>Earthquake-resistant Structure</li>
                        <li>Bathroom & Terrace Waterproofing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* KITCHEN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardKitchen"
                    >
                      Kitchen
                    </button>
                  </h2>
                  <div
                    id="standardKitchen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Granite Countertop (₹120–150/sqft)</li>
                        <li>Premium Sink</li>
                        <li>Digital Wall Tiles</li>
                        <li>Soft-close Drawer Provision</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* BATHROOM */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardBath"
                    >
                      Bathroom
                    </button>
                  </h2>
                  <div
                    id="standardBath"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Digital Tiles up to 8ft</li>
                        <li>Anti-skid Premium Tiles</li>
                        <li>Wall-mounted WC</li>
                        <li>Shower Partition Provision</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PLUMBING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardPlumb"
                    >
                      Plumbing
                    </button>
                  </h2>
                  <div
                    id="standardPlumb"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Astral/Supreme CPVC Pipes</li>
                        <li>SS Floor Traps</li>
                        <li>Pressure Tested Lines</li>
                        <li>Solar Heater Provision</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* DOORS & WINDOWS */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardDoors"
                    >
                      Doors & Windows
                    </button>
                  </h2>
                  <div
                    id="standardDoors"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Teak Finish Main Door</li>
                        <li>Laminated Internal Doors</li>
                        <li>UPVC Windows + Mosquito Mesh</li>
                        <li>SS Safety Grills</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PAINTING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardPaint"
                    >
                      Painting
                    </button>
                  </h2>
                  <div
                    id="standardPaint"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Emulsion (Interior)</li>
                        <li>Weather Shield Exterior</li>
                        <li>Putty Finish Ceiling</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* FLOORING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardFloor"
                    >
                      Flooring
                    </button>
                  </h2>
                  <div
                    id="standardFloor"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Vitrified Tiles (₹70–90/sqft)</li>
                        <li>Granite Staircase</li>
                        <li>Designer Balcony Tiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ELECTRICAL */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardElec"
                    >
                      Electrical
                    </button>
                  </h2>
                  <div
                    id="standardElec"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Polycab/Finolex Wiring</li>
                        <li>Legrand/Anchor Modular Switches</li>
                        <li>AC Points – All Bedrooms</li>
                        <li>UPS Wiring</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* OTHER INCLUSIVES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardOther"
                    >
                      Other Inclusives
                    </button>
                  </h2>
                  <div
                    id="standardOther"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Smart Home Automation</li>
                        <li>Free Terrace Gardening Kit</li>
                        <li>Site Engineer Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* EXTRA CHARGES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#standardExtra"
                    >
                      Extra Charges
                    </button>
                  </h2>
                  <div
                    id="standardExtra"
                    className="accordion-collapse collapse"
                    data-bs-parent="#standard"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>False Ceiling</li>
                        <li>Wardrobes</li>
                        <li>Extra Elevation Work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ✅ PREMIUM CARD (FULL) */}
          <div className="col-md-4">
            <div className="pricing-card shadow-sm rounded-4">
              <div className="accord text-center text-gold p-3 rounded-top bg-gradient">
                <h5 className="accord-head m-1">Premium</h5>
                <small>price may vary depending on no.of floors</small>
              </div>
              <div className="text-center p-4">
                <strike className="text-gradient">₹2599</strike>
                <h2 className="text-gradient">₹2449/sft</h2>
              </div>
              <div className="accord-checked px-4 text-gradient">
                <p>
                  <i className="fa fa-check me-2"></i> All features in standard
                  package
                </p>
                <p>
                  <i className="fa fa-check me-2"></i> Granite flooring
                </p>
                <p>
                  <i className="fa fa-check me-2"></i> Premium quality materials
                </p>
              </div>
              <div className="accordion px-3 pb-4" id="premium">
                {/* DESIGN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumDesign"
                    >
                      Design
                    </button>
                  </h2>
                  <div
                    id="premiumDesign"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>2D Floor Plan</li>
                        <li>3D Elevation Design</li>
                        <li>Structural Designing</li>
                        <li>Interior Layout Plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* STRUCTURE */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumStructure"
                    >
                      Structure
                    </button>
                  </h2>
                  <div
                    id="premiumStructure"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>M30 Grade Concrete</li>
                        <li>Fe550D Steel</li>
                        <li>Premium Waterproofing Membrane</li>
                        <li>Heat-resistant Tiles</li>
                        <li>AAC Blocks (Optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* KITCHEN */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumKitchen"
                    >
                      Kitchen
                    </button>
                  </h2>
                  <div
                    id="premiumKitchen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Granite (&gt;₹200/sqft)</li>
                        <li>Quartz/Korean Options</li>
                        <li>Soft-close Modular Kitchen</li>
                        <li>Premium Sink (Granite/Quartz)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* BATHROOM */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumBath"
                    >
                      Bathroom
                    </button>
                  </h2>
                  <div
                    id="premiumBath"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Full Bathroom Premium Tiles</li>
                        <li>Wall-mounted Premium WC</li>
                        <li>Glass Shower Partition</li>
                        <li>Grohe/Kohler CP Fittings</li>
                        <li>Vanity Basin</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PLUMBING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumPlumb"
                    >
                      Plumbing
                    </button>
                  </h2>
                  <div
                    id="premiumPlumb"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Composite Piping</li>
                        <li>Pressure Pump Setup</li>
                        <li>Concealed Flush Tanks</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* DOORS & WINDOWS */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumDoors"
                    >
                      Doors & Windows
                    </button>
                  </h2>
                  <div
                    id="premiumDoors"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Solid Teak Wood Main Door</li>
                        <li>Veneer/Laminated Internal Doors</li>
                        <li>Soundproof UPVC Windows</li>
                        <li>SS304 Grills</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* PAINTING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumPaint"
                    >
                      Painting
                    </button>
                  </h2>
                  <div
                    id="premiumPaint"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Asian Royale Interior</li>
                        <li>Apex Ultima Exterior</li>
                        <li>Designer Texture Walls</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* FLOORING */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumFloor"
                    >
                      Flooring
                    </button>
                  </h2>
                  <div
                    id="premiumFloor"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Granite (₹120–180/sqft)</li>
                        <li>Large Format Tiles (Living Room)</li>
                        <li>Granite Staircase</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ✅ ELECTRICAL — You had a cut-off, now fully completed */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumElec"
                    >
                      Electrical
                    </button>
                  </h2>
                  <div
                    id="premiumElec"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Havells/Polycab Premium Wiring</li>
                        <li>Schneider/Legrand Modular Switches</li>
                        <li>AC Points – All Rooms</li>
                        <li>Home Automation Support</li>
                        <li>Video Door Phone Wiring</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* OTHER INCLUSIVES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumOther"
                    >
                      Other Inclusives
                    </button>
                  </h2>
                  <div
                    id="premiumOther"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Premium Engineering Supervision</li>
                        <li>Landscaping Suggestions</li>
                        <li>Free Smart Door Lock</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* EXTRA CHARGES */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed custom-accordion-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumExtra"
                    >
                      Extra Charges
                    </button>
                  </h2>
                  <div
                    id="premiumExtra"
                    className="accordion-collapse collapse"
                    data-bs-parent="#premium"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Wooden Flooring</li>
                        <li>Home Theatre Setup</li>
                        <li>Solar Panel Installation</li>
                        <li>Swimming Pool Works</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <ConstructionCalculator/>
    </>
  );
}
