'use client';
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col  items-center justify-center">
        <span className="loader"></span>
        <p style={{ color: '#fff', marginTop: 20 }}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
