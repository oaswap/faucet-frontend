import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    // <PageHeader
    //   title=""
    //   subTitle=""
    //   style={{ cursor: "default" }}
    // />
    <div className="sc-jRQBWg sc-gKclnd gREMsN hrZfTH">
      <a aria-label="Oaswap" className="sc-gjNHFA cvvimg" href="">
        <svg
          viewBox="0 0 600 600"
          className="sc-bdvvtL eabikT header-logo-icon"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient
              id="linear-gradient"
              x1="35.74"
              y1="452.57"
              x2="559.84"
              y2="149.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1fc7d4"></stop>
              <stop offset="0.25" stopColor="#0fa5ea"></stop>
              <stop offset="0.5" stopColor="aqua"></stop>
              <stop offset="0.75" stopColor="#11aae7"></stop>
              <stop offset="1" stopColor="#1fc7d4"></stop>
            </linearGradient>
          </defs>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M164.66,319.85A631.29,631.29,0,0,0,239,343.36c25.58,6.51,50.36,12.55,74.35,18.43a502.41,502.41,0,0,1,65,20.32c19.21,7.47,34.47,17.17,45.9,28.76,11.28,11.6,17,26.21,17.31,44.16-.16,13.83-3,25.74-8.73,35.42a75.94,75.94,0,0,1-22.72,24.47,124.25,124.25,0,0,1-31.76,14.93,210.84,210.84,0,0,1-35.27,7.79,290.48,290.48,0,0,1-34,2.06,278.12,278.12,0,0,1-44.64-3.34,161.45,161.45,0,0,1-18.4-3.85A239,239,0,0,1,64.09,263.78h0C44.71,235.09,38.2,202.84,37.39,169c6.76,76.76,59.74,124.52,127.27,150.9ZM23.16,415.77A300.28,300.28,0,1,0,0,300,300.69,300.69,0,0,0,23.16,415.77l-9.56-1.56,9.56,1.56ZM581,390.17c-3.89-36.92-18.57-57.91-42.41-89.2,0-1.55,0,.59,0-1a237.66,237.66,0,0,0-51.41-148,241.23,241.23,0,0,0-18.49-20.76,238.12,238.12,0,0,0-130-66.77,154.1,154.1,0,0,0-16.37-2.61,355.89,355.89,0,0,0-38.12-1.58,165.54,165.54,0,0,0-36.23,4,112.3,112.3,0,0,0-33.19,13.18,69.4,69.4,0,0,0-24.15,23.83c-6,9.84-9.21,21.77-9.36,36.05-.16,10,1.42,18.75,4.76,26.06,3.33,7.47,9,14.14,17.63,20,8.42,6,20.17,11.76,35.42,17.32,58,21.13,118.6,31.06,177.75,47.65C489.75,267.91,562,311.33,581,390.17Z"
            style={{ fillRule: "evenodd", fill: "url(#linear-gradient)" }}
          ></path>
        </svg>
        <div className="header-logo-name">Oaswap</div>
      </a>
    </div>
  );
}
