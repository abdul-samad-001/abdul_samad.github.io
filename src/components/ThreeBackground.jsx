import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SceneObjects = () => {
  const groupRef = useRef();
  
  useFrame(() => {
    // Parallax scrolling effect
    const scrollY = window.scrollY;
    
    // Calculate targeted transformations based on scroll position
    const targetY = -(scrollY * 0.003); 
    const targetRotX = scrollY * 0.0005;
    const targetRotY = scrollY * 0.0002;

    // Smoothly interpolate current values towards targets for a fluid feel
    if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Starfield */}
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={2} />
      
      {/* Floating abstract organic geometries */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-4, 2, -10]}>
          <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.5} speed={2} transparent opacity={0.6} envMapIntensity={1} roughness={0.1} metalness={0.5} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[1.5, 64, 64]} position={[5, -2, -15]}>
          <MeshDistortMaterial color="#06b6d4" attach="material" distort={0.4} speed={1.5} transparent opacity={0.5} roughness={0} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
        <Sphere args={[0.8, 64, 64]} position={[0, -8, -8]}>
          <MeshDistortMaterial color="#ec4899" attach="material" distort={0.6} speed={3} transparent opacity={0.6} wireframe />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[2, 64, 64]} position={[-6, -15, -20]}>
          <MeshDistortMaterial color="#a855f7" attach="material" distort={0.3} speed={1} transparent opacity={0.4} roughness={0.2} metalness={0.7} />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={3.5}>
        <Sphere args={[0.6, 64, 64]} position={[4, -22, -12]}>
          <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.8} speed={4} transparent opacity={0.8} roughness={0} />
        </Sphere>
      </Float>

    </group>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-dark">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
        <SceneObjects />
      </Canvas>
    </div>
  );
};
