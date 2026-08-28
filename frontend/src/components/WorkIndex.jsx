import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { WORK } from "../data/content.js";

export default function WorkIndex({ setPage }) {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef(null);

  const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <div ref={wrapRef} onMouseMove={onMove}>
      <div className="work-index">
        {WORK.map((w, i) => (
          <div
            className="work-row"
            key={w.name}
            onMouseEnter={() => setHovered(w)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setPage("Work")}
          >
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <h3>{w.name}</h3>
            <span className="cat">{w.cat}</span>
            <ArrowUpRight className="go" size={20} />
          </div>
        ))}
      </div>

      <div
        className={`cursor-preview${hovered ? " show" : ""}`}
        style={{ transform: `translate(${pos.x + 24}px, ${pos.y - 95}px)` }}
      >
        {hovered && <img src={hovered.img} alt={hovered.name} />}
      </div>
    </div>
  ); 
}
