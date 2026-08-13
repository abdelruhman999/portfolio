"use client";

import { StarTrip } from "@helperd/starfield-react";

export default function StarfieldBackground() {
  return (
    <StarTrip
      numStars={500}
      speed={1.2}
      starSize={1.5}
      maxOpacity={0.8}
      maxDepth={600}
      zIndex={-1}
      backgroundColor="#020617"
    />
  );
}