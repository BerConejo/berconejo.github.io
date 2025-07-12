import React, { useEffect, useRef, useState } from "react";
import Pages from "./Pages";
import "../assets/styles/MainContainer.css";

export default function MainContainer() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="main-container">
      <div className="content-area">
        <div className="card-container">
          <div className="tab-header">
            {["About", "Resume", "Contact"].map((tab) => (
              <button
                key={tab}
                className={`tab-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <Pages activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
