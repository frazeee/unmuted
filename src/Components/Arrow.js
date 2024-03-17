import React from "react";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
      width="100"
      height="100"
    >
      <defs>
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur" stdDeviation="2" />
          <feFlood flood-color="#000" flood-opacity=".5" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <style>
          {`
            .cls-1 {
              fill: #19180e;
              fill-rule: evenodd;
            }

            .cls-1, .cls-2 {
              stroke-width: 0px;
            }

            .cls-2 {
              fill: #fff;
              filter: url(#drop-shadow-1);
            }
          `}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <circle class="cls-2" cx="58.74" cy="58.81" r="51.97" />
          <polygon
            class="cls-1"
            points="61.66 40.21 77.96 56.2 29.77 56.51 29.88 61.22 78.16 61.32 61.76 77.52 65.25 81.01 87.7 58.86 65.14 36.62 61.66 40.21"
          />
        </g>
      </g>
    </svg>
  );
};

export default Arrow;
