import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating sphere
const FloatingSphere = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2 * speed;
    meshRef.current.rotation.y = time * 0.3 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Animated torus
const AnimatedTorus = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[1, 0.4, 32, 100]} scale={scale} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.9}
        />
      </Torus>
    </Float>
  );
};

// Particle field
const ParticleField = ({ count = 200 }) => {
  const meshRef = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ x, y, z });
    }
    return temp;
  }, [count]);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    });
    return pos;
  }, [particles, count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.x = time * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00F5FF"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Gradient Background Sphere (for depth)
const BackgroundSphere = () => {
  return (
    <Sphere args={[30, 64, 64]} position={[0, 0, -20]}>
      <meshBasicMaterial color="#0A0A0F" side={THREE.BackSide} />
    </Sphere>
  );
};

// Main Home Hero Scene
const HomeHeroScene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00F5FF" />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#A855F7" />
      <pointLight position={[0, 5, 5]} intensity={0.4} color="#00FF88" />
      
      <ParticleField count={400} />
      
      <FloatingSphere position={[3.5, 0.5, 0]} color="#0A1628" scale={1.8} speed={0.6} />
      <FloatingSphere position={[-2.5, 1.5, -2]} color="#00F5FF" scale={0.9} speed={1.2} />
      <FloatingSphere position={[-3.5, -1.5, 1]} color="#A855F7" scale={0.7} speed={1} />
      <FloatingSphere position={[1, -2, -1]} color="#00D4FF" scale={0.5} speed={1.4} />
      
      <AnimatedTorus position={[0, -2.5, -3]} color="#00F5FF" scale={0.8} />
      <AnimatedTorus position={[2.5, 2, -4]} color="#A855F7" scale={0.5} />
      <AnimatedTorus position={[-1, 0, -5]} color="#00FF88" scale={0.4} />
    </>
  );
};

// Home Hero Component
const HomeHero = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      zIndex: 0 
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <HomeHeroScene />
      </Canvas>
    </div>
  );
};

export default HomeHero;
export { HomeHeroScene, FloatingSphere, AnimatedTorus, ParticleField };
