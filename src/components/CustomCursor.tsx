import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dotConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  
  const dotX = useSpring(cursorX, dotConfig);
  const dotY = useSpring(cursorY, dotConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOnBlue, setIsOnBlue] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for hover effect on buttons/links
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
      
      // Check if background is blue (brand-accent or brand-deep)
      const blueElement = target.closest('.bg-brand-accent, .bg-brand-deep, .bg-brand-black');
      setIsOnBlue(!!blueElement);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      {/* Outer technical ring */}
      <motion.div
        className="custom-cursor"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : (isActive ? 0.8 : 1),
          borderWidth: isHovering ? "1px" : "1.5px",
          borderColor: isHovering ? "rgba(0, 136, 209, 0.4)" : "rgba(0, 51, 102, 0.2)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
           <div className="w-[1px] h-1 bg-brand-deep/50 absolute top-0" />
           <div className="w-[1px] h-1 bg-brand-deep/50 absolute bottom-0" />
           <div className="h-[1px] w-1 bg-brand-deep/50 absolute left-0" />
           <div className="h-[1px] w-1 bg-brand-deep/50 absolute right-0" />
        </div>
      </motion.div>

      {/* Primary Dot - Very fast */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isActive ? 1.5 : 1,
          backgroundColor: isOnBlue ? "rgba(255, 255, 255, 1)" : (isHovering ? "rgba(0, 136, 209, 1)" : "rgba(0, 51, 102, 1)"),
        }}
      />
    </div>
  );
}
