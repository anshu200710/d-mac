import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, RoundedBox, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Digital Marketing Icon - Network/Graph visualization
const NetworkGraph = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  
  const nodes = useMemo(() => [
    { pos: [0, 0, 0], scale: 0.3 },
    { pos: [1.5, 0.8, 0], scale: 0.2 },
    { pos: [1.2, -0.9, 0.5], scale: 0.2 },
    { pos: [-1.3, 0.5, 0.3], scale: 0.2 },
    { pos: [-1, -0.8, -0.3], scale: 0.2 },
    { pos: [0.5, 1.2, -0.5], scale: 0.15 },
    { pos: [-0.7, -1.3, 0.4], scale: 0.15 },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.3;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={2 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.3}>
          <Sphere args={[node.scale, 32, 32]} position={node.pos}>
            <MeshDistortMaterial
              color={i === 0 ? '#00F5FF' : '#A855F7'}
              distort={0.2}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              emissive={i === 0 ? '#00F5FF' : '#A855F7'}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Connections */}
      {nodes.slice(1).map((node, i) => {
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(...node.pos);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const length = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction
        );
        
        return (
          <mesh
            key={`line-${i}`}
            position={mid.toArray()}
            quaternion={quaternion}
          >
            <cylinderGeometry args={[0.02, 0.02, length, 8]} />
            <meshStandardMaterial
              color="#00D4FF"
              transparent
              opacity={0.7}
              metalness={0.5}
              roughness={0.3}
              emissive="#00D4FF"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// Video Marketing Icon - Play button / Cinema reel
const VideoIcon = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const reelRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    reelRef.current.rotation.z = time * 2;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Film Reel */}
      <group ref={reelRef} position={[-0.8, 0.8, 0]}>
        <Torus args={[0.4, 0.08, 16, 48]}>
          <meshStandardMaterial color="#A855F7" metalness={0.8} roughness={0.2} emissive="#A855F7" emissiveIntensity={0.2} />
        </Torus>
        {/* Reel holes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <Sphere
              key={i}
              args={[0.06, 16, 16]}
              position={[Math.cos(rad) * 0.25, Math.sin(rad) * 0.25, 0]}
            >
              <meshStandardMaterial color="#00F5FF" metalness={0.7} roughness={0.3} emissive="#00F5FF" emissiveIntensity={0.3} />
            </Sphere>
          );
        })}
      </group>
      
      {/* Screen/Player */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <RoundedBox args={[2, 1.4, 0.15]} radius={0.08} smoothness={4} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#0A0A0F" metalness={0.3} roughness={0.7} />
        </RoundedBox>
        
        {/* Screen glow */}
        <RoundedBox args={[1.8, 1.2, 0.05]} radius={0.05} smoothness={4} position={[0, -0.2, 0.1]}>
          <meshStandardMaterial
            color="#0F1419"
            emissive="#A855F7"
            emissiveIntensity={0.2}
            metalness={0.1}
            roughness={0.9}
          />
        </RoundedBox>
        
        {/* Play button triangle */}
        <mesh position={[0, -0.2, 0.15]}>
          <coneGeometry args={[0.25, 0.4, 3]} />
          <meshStandardMaterial
            color="#00F5FF"
            emissive="#00F5FF"
            emissiveIntensity={0.5}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
};

// Floating geometric elements
const GeometricElements = () => {
  const group1Ref = useRef();
  const group2Ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group1Ref.current.rotation.y = time * 0.1;
    group2Ref.current.rotation.y = -time * 0.15;
  });

  return (
    <>
      <group ref={group1Ref}>
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Box args={[0.4, 0.4, 0.4]} position={[4, 2, -3]}>
            <meshStandardMaterial color="#00F5FF" metalness={0.7} roughness={0.3} wireframe />
          </Box>
        </Float>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <Torus args={[0.3, 0.1, 16, 32]} position={[-4, -1, -2]}>
            <meshStandardMaterial color="#A855F7" metalness={0.8} roughness={0.2} emissive="#A855F7" emissiveIntensity={0.2} />
          </Torus>
        </Float>
      </group>
      
      <group ref={group2Ref}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
          <Sphere args={[0.2, 32, 32]} position={[3, -2, -4]}>
            <meshStandardMaterial color="#00FF88" metalness={0.9} roughness={0.1} emissive="#00FF88" emissiveIntensity={0.3} />
          </Sphere>
        </Float>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
          <Box args={[0.3, 0.3, 0.3]} position={[-3, 2, -5]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="#F472B6" metalness={0.6} roughness={0.4} emissive="#F472B6" emissiveIntensity={0.2} />
          </Box>
        </Float>
      </group>
    </>
  );
};

// Services Hero Scene
const ServicesHeroScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[-5, 5, 5]} intensity={1} color="#00F5FF" />
      <pointLight position={[5, -5, 5]} intensity={0.8} color="#A855F7" />
      <pointLight position={[0, 0, 8]} intensity={0.4} color="#00FF88" />
      
      <NetworkGraph position={[-2.5, 0, 0]} />
      <VideoIcon position={[2.5, 0, 0]} />
      <GeometricElements />
    </>
  );
};

// Services Hero Component
const ServicesHero = () => {
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
        camera={{ position: [0, 0, 7], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ServicesHeroScene />
      </Canvas>
    </div>
  );
};

export default ServicesHero;
export { ServicesHeroScene, NetworkGraph, VideoIcon, GeometricElements };
