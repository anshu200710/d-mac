import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Box, Sphere, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Megaphone-ish shape (simplified)
const Megaphone = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // slightly faster and larger swing to make it stand out
    ref.current.rotation.y = Math.sin(t * 0.9) * 0.22;
  });

  return (
    <group ref={ref} position={position}>
      <RoundedBox args={[1.2, 0.6, 0.6]} radius={0.08} smoothness={6} position={[-0.6, 0, 0]}> 
        <meshStandardMaterial color="#00F5FF" metalness={0.6} roughness={0.25} emissive="#00F5FF" emissiveIntensity={0.15} />
      </RoundedBox>
      <Torus args={[0.28, 0.08, 16, 60]} rotation={[0, Math.PI / 2, 0]} position={[0.6, 0, 0]}>
        <meshStandardMaterial color="#A855F7" metalness={0.7} roughness={0.2} emissive="#A855F7" emissiveIntensity={0.12} />
      </Torus>
    </group>
  );
};

// Analytics bars
const AnalyticsBars = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // rotate slightly faster for a livelier scene
    groupRef.current.rotation.y = t * 0.22;
  });

  return (
    <group ref={groupRef} position={position}>
      {[0.35, 0.6, 0.9].map((h, i) => (
        <Box key={i} args={[0.35, h, 0.35]} position={[i * 0.5 - 0.5, -0.2 + h / 2, 0]}> 
          <meshStandardMaterial color={i === 2 ? '#00FF88' : '#00D4FF'} metalness={0.6} roughness={0.3} emissive={i === 2 ? '#00FF88' : '#00D4FF'} emissiveIntensity={0.12} />
        </Box>
      ))}
    </group>
  );
};

// Target / bullseye
const Target = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // faster wobble and bigger amplitude so it catches the eye
    ref.current.rotation.z = Math.sin(t * 1.2) * 0.28;
  });

  return (
    <group ref={ref} position={position}>
      <Torus args={[0.5, 0.08, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FF006E" metalness={0.6} roughness={0.2} emissive="#FF006E" emissiveIntensity={0.1} />
      </Torus>
      <Torus args={[0.32, 0.06, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#A855F7" metalness={0.6} roughness={0.2} emissive="#A855F7" emissiveIntensity={0.08} />
      </Torus>
      <Sphere args={[0.15, 16, 16]} position={[0, 0, 0.2]}>
        <meshStandardMaterial color="#00F5FF" metalness={0.7} roughness={0.15} emissive="#00F5FF" emissiveIntensity={0.14} />
      </Sphere>
    </group>
  );
};

// Monitor (represents conversion / dashboard)
const Monitor = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <group ref={ref} position={position}>
      <Float speed={1} rotationIntensity={0.6} floatIntensity={0.3}>
        <RoundedBox args={[1.6, 1.0, 0.08]} radius={0.06} smoothness={6} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.3} emissive="#00121A" emissiveIntensity={0.03} />
        </RoundedBox>
        {/* Screen */}
        <RoundedBox args={[1.4, 0.76, 0.02]} radius={0.04} smoothness={4} position={[0, 0.12, 0.05]}>
          <meshStandardMaterial color="#abb7c1" metalness={0.2} roughness={0.2} emissive="#002833" emissiveIntensity={0.2} />
        </RoundedBox>
        {/* Stand */}
        <Box args={[0.24, 0.12, 0.12]} position={[0, -0.5, 0.03]}> 
          <meshStandardMaterial color="#cfd0d1" metalness={0.6} roughness={0.4} />
        </Box>
      </Float>
    </group>
  );
};

// Growth Arrow (upward arrow representing growth)
const GrowthArrow = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // float a bit higher and give it a livelier wobble
    ref.current.position.y = 0.25 + Math.sin(t * 1.0) * 0.12;
    ref.current.rotation.z = Math.sin(t * 1.0) * 0.12;
  });

  return (
    <group ref={ref} position={position}>
      {/* Shaft */}
      <Box args={[0.08, 0.9, 0.08]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00FF88" metalness={0.6} roughness={0.25} emissive="#00FF88" emissiveIntensity={0.12} />
      </Box>
      {/* Head */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.18, 0.36, 16]} />
        <meshStandardMaterial color="#00FF88" metalness={0.6} roughness={0.2} emissive="#00FF88" emissiveIntensity={0.12} />
      </mesh>
    </group>
  );
};

// TrendLine (simple diagonal rising line made from small boxes)
const TrendLine = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // subtle rotation, slightly faster
    ref.current.rotation.y = Math.sin(t * 0.28) * 0.10;
  });

  return (
    <group ref={ref} position={position}>
      {[0,1,2,3].map((i) => (
        <Box key={i} args={[0.18, 0.18 + i * 0.18, 0.08]} position={[i * 0.28 - 0.42, -0.6 + (i * 0.12), 0]}>
          <meshStandardMaterial color={i === 3 ? '#A855F7' : '#00D4FF'} metalness={0.6} roughness={0.25} emissive={i === 3 ? '#A855F7' : '#00D4FF'} emissiveIntensity={0.08} />
        </Box>
      ))}

    </group>
  );
};

// Particle field (copied from HomeHero for star-like background)
const ParticleField = ({ count = 400 }) => {
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

const DigitalMarketingScene = () => {
  return (
    <>
      <ambientLight intensity={0.18} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#00F5FF" />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#A855F7" />

      {/* star-like particle field */}
      <ParticleField count={400} />

      <Megaphone position={[-3.2, 0.9, -1.6]} />
      <AnalyticsBars position={[1.8, -1.2, -1.4]} />
      <Target position={[3.6, 1.0, -2.2]} />

      {/* New growth shapes (more scattered) */}
      <Monitor position={[-1.6, -0.4, 0.8]} />
      <GrowthArrow position={[2.4, 0.4, -0.6]} />
      <TrendLine position={[0.2, -0.9, -1.0]} />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const DigitalMarketingHero = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} style={{ background: 'transparent' }} dpr={[1, 2]}>
        <DigitalMarketingScene />
      </Canvas>
    </div>
  );
};

export default DigitalMarketingHero;
export { DigitalMarketingScene, Megaphone, AnalyticsBars, Target };