import { useState, useEffect } from "react";

const CustomCursor = ({ cursorImage, isActive }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Follower Cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full bg-yellow  transition-transform duration-300 ${
          isActive ? "transform scale-100" : "transform scale-0"
        }`}
        style={{
          left: position.x - 48,
          top: position.y - 48,
          width: "96px",
          height: "96px",
        }}
      >
        <div className="flex items-center justify-center pt-9">
          <h3 className="tracking-wider">VIEW</h3>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
