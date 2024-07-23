import { useEffect } from "react";
export function Card({ title, children }) {
  return (
    <a className="card" target="_blank">
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </a>
  );
}
