import React from "react";
import "./tooltip.css"

export default function ToolTip({ text, children }) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltipText">{text}</span>
    </div>
  );
}
