"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function BackgroundBoxes({ className, colours, ...rest }) {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const getRandomColor = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="w-16 h-8 relative">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 relative"
            ></motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
