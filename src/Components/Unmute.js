import React from "react";

const Unmute = () => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 245 246"
    >
      <defs>
        <style>
          {`
          .cls-1 {
            filter: url(#drop-shadow-1);
            opacity: .23;
          }

          .cls-1, .cls-2, .cls-3 {
            fill: #fff;
            stroke-width: 0px;
          }

          .cls-4 {
            opacity: .3;
          }

          .cls-2 {
            filter: url(#drop-shadow-2);
          }
          `}
        </style>
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur" stdDeviation="2" />
          <feFlood flood-color="#000" flood-opacity=".5" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
          <feOffset dx="1.28" dy="0" />
          <feGaussianBlur result="blur-2" stdDeviation="0" />
          <feFlood flood-color="#000" flood-opacity=".2" />
          <feComposite in2="blur-2" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <circle className="cls-1" cx="122.5" cy="123.12" r="116.24" />
          <polygon
            className="cls-2"
            points="82.63 103.88 54.38 103.88 54.38 142.35 82.63 142.35 122.19 172.17 122.19 74.06 82.63 103.88"
          />
          <g>
            <g className="cls-4">
              <path
                className="cls-3"
                d="M140.16,144.95l-4.24-4.24c9.85-9.85,9.85-25.89,0-35.74l4.24-4.24c12.19,12.19,12.19,32.03,0,44.22Z"
              />
              <path
                className="cls-3"
                d="M169.95,173.11l-4.24-4.24c25.23-25.23,25.23-66.27,0-91.5l4.24-4.24c27.56,27.56,27.56,72.41,0,99.98Z"
              />
              <path
                className="cls-3"
                d="M154.61,159.07l-4.24-4.24c17.75-17.75,17.75-46.64,0-64.39l4.24-4.24c20.09,20.09,20.09,52.78,0,72.87Z"
              />
            </g>
            <g>
              <path
                className="cls-3"
                d="M139.4,144.95l-4.24-4.24c9.85-9.85,9.85-25.89,0-35.74l4.24-4.24c12.19,12.19,12.19,32.03,0,44.22Z"
              />
              <path
                className="cls-3"
                d="M169.19,173.11l-4.24-4.24c25.23-25.23,25.23-66.27,0-91.5l4.24-4.24c27.56,27.56,27.56,72.41,0,99.98Z"
              />
              <path
                className="cls-3"
                d="M153.85,159.07l-4.24-4.24c17.75-17.75,17.75-46.64,0-64.39l4.24-4.24c20.09,20.09,20.09,52.78,0,72.87Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Unmute;
