'use client';
import React, { lazy, Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Points,
  PointMaterial,
  Preload,
} from '@react-three/drei';
import { random } from 'maath';
import { Mesh } from 'three';
import Loader from '@/components/Loader';

// Lazy load Earth model
const Earth = lazy(() => import('../earth/EarthModel'));

const Stars = (props: any) => {
  const ref = useRef<Mesh>(null);

  // Reduce number of points for performance
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500 * 3), { radius: 1.2 }),
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Cleanup GPU resources on unmount
  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.geometry?.dispose();
        (ref.current.material as any)?.dispose?.();
      }
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SpaceScene = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="w-full h-auto absolute inset-0 z-[-1]"
    >
      <Suspense fallback={<Loader />}>
        {/* Stars background */}
        <Stars />

        {/* Earth */}
        <Earth />

        {/* Controls */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Preload all assets once */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default React.memo(SpaceScene);
