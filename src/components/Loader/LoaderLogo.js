import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "auto" }}
      >
        {/* Animated hexagon outline */}
        <path
          className="hexagon-outline"
          d="M220 40 L300 85 L300 175 L220 220 L140 175 L140 85 Z"
          stroke={theme.body}
          strokeWidth="6"
          fill="none"
        />

        {/* Animated orbiting dots inside hexagon */}
        <circle
          className="orbit-dot dot-1"
          cx="220"
          cy="112"
          r="7"
          fill={theme.body}
        />
        <circle
          className="orbit-dot dot-2"
          cx="260"
          cy="150"
          r="7"
          fill={theme.body}
        />
        <circle
          className="orbit-dot dot-3"
          cx="220"
          cy="188"
          r="7"
          fill={theme.body}
        />
        <circle
          className="orbit-dot dot-4"
          cx="180"
          cy="150"
          r="7"
          fill={theme.body}
        />

        {/* Initials "BP" fade in at the center */}
        <text
          x="220"
          y="155"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="60"
          fontFamily="'Montserrat', Arial, sans-serif"
          fill={theme.body}
          className="bp-initials"
        >
          BP
        </text>

        {/* Animated signature "Bhavika Patel" below the hexagon (no line, only text) */}
        <text
          x="220"
          y="280"
          textAnchor="middle"
          fontSize="28"
          fontFamily="'Dancing Script', cursive"
          fill={theme.body}
          className="signature-text"
        >
          Bhavika Patel
        </text>

        <style>
          {`
            .hexagon-outline {
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              animation: dashhex 1.2s linear forwards;
            }
            @keyframes dashhex {
              to { stroke-dashoffset: 0; }
            }
            .orbit-dot {
              opacity: 0;
              transform-origin: 220px 150px;
              animation: orbitDots 1.2s linear forwards 1.1s;
            }
            .dot-1 { animation-delay: 1.1s; }
            .dot-2 { animation-delay: 1.3s; }
            .dot-3 { animation-delay: 1.5s; }
            .dot-4 { animation-delay: 1.7s; }
            @keyframes orbitDots {
              from { opacity: 0; transform: scale(0.1);}
              to { opacity: 1; transform: scale(1);}
            }
            .bp-initials {
              opacity: 0;
              animation: fadeinBP 1s ease forwards 1.9s;
            }
            @keyframes fadeinBP {
              to { opacity: 1; }
            }
            .signature-text {
              opacity: 0;
              animation: fadeinSig 1s ease forwards 2.7s;
            }
            @keyframes fadeinSig {
              to { opacity: 1; }
            }
          `}
        </style>
      </svg>
    );
  }
}

export default LogoLoader;
