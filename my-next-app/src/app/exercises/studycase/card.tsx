// 翻牌组件示例
import { useState } from "react";

function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      style={{ width: 200, height: 120, perspective: 600, cursor: "pointer" }}
    >
      <div className="flip-card-inner" style={{
        width: "100%",
        height: "100%",
        transition: "transform 0.6s",
        transformStyle: "preserve-3d",
        position: "relative",
        transform: flipped ? "rotateY(180deg)" : "none"
      }}>
        <div className="flip-card-front" style={{
          position: "absolute", width: "100%", height: "100%",
          backfaceVisibility: "hidden", background: "#4f8cff", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
           
        }}>
          正面
        </div>
        <div className="flip-card-back" style={{
          position: "absolute", width: "100%", height: "100%",
          backfaceVisibility: "hidden", background: "#ffb84f", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
         transform: "rotateY(180deg)"
        }}>
          背面
        </div>
      </div>
    </div>
  );
}

export default FlipCard;