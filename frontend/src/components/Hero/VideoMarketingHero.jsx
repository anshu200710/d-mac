import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Video Camera Icon - Film reel animation
const FilmReel = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.z = time * 0.5;
    groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef} position={position}>

      {/* Center hub */}
      <Sphere args={[0.3, 32, 32]}>
        <MeshDistortMaterial
          color="#00F5FF"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive="#00F5FF"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Spoke details */}
      {[0, 120, 240].map((angle, i) => (
        <Box
          key={i}
          args={[0.08, 0.08, 0.8]}
          position={[Math.cos((angle * Math.PI) / 180) * 0.6, Math.sin((angle * Math.PI) / 180) * 0.6, 0]}
        >
          <meshStandardMaterial
            color="#A855F7"
            metalness={0.7}
            roughness={0.3}
            emissive="#A855F7"
            emissiveIntensity={0.2}
          />
        </Box>
      ))}
    </group>
  );
};

// Camera lens
const CameraLens = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.3;
    groupRef.current.rotation.y = time * 0.2;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Lens barrel */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Torus args={[0.6, 0.12, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#00FF88"
            metalness={0.8}
            roughness={0.2}
            emissive="#00FF88"
            emissiveIntensity={0.3}
          />
        </Torus>
      </Float>
      
      {/* Front lens element */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
        <Sphere args={[0.5, 32, 32]} position={[0, 0, 0.8]}>
          <MeshDistortMaterial
            color="#00F5FF"
            distort={0.3}
            speed={2}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
    </group>
  );
};

// Floating geometric elements specific to video marketing
const VideoElements = () => {
  const group1Ref = useRef();
  const group2Ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group1Ref.current.rotation.y = time * 0.15;
    group2Ref.current.rotation.y = -time * 0.1;
  });

  return (
    <>
      <group ref={group1Ref}>
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <RoundedBox args={[0.6, 0.4, 0.2]} radius={0.05} smoothness={4} position={[3.5, 1.5, -3]}>
            <meshStandardMaterial color="#00F5FF" metalness={0.7} roughness={0.3} emissive="#00F5FF" emissiveIntensity={0.2} />
          </RoundedBox>
        </Float>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <Torus args={[0.35, 0.08, 16, 32]} position={[-3.5, -1, -2]}>
            <meshStandardMaterial color="#A855F7" metalness={0.8} roughness={0.2} emissive="#A855F7" emissiveIntensity={0.2} />
          </Torus>
        </Float>
      </group>
      
      <group ref={group2Ref}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
          <Box args={[0.4, 0.3, 0.3]} position={[3, -2, -4]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="#00FF88" metalness={0.9} roughness={0.1} emissive="#00FF88" emissiveIntensity={0.3} />
          </Box>
        </Float>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
          <Box args={[0.35, 0.35, 0.35]} position={[-3, 2, -5]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="#FF006E" metalness={0.6} roughness={0.4} emissive="#FF006E" emissiveIntensity={0.2} />
          </Box>
        </Float>
      </group>
    </>
  );
};

// Video Marketing Hero Scene
const VideoMarketingHeroScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[-5, 5, 5]} intensity={1} color="#00F5FF" />
      <pointLight position={[5, -5, 5]} intensity={0.8} color="#A855F7" />
      <pointLight position={[0, 0, 8]} intensity={0.4} color="#00FF88" />
      
      <FilmReel position={[-2.5, 0, 0]} />
      <CameraLens position={[2.5, 0, 0]} />
      <VideoElements />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

// Video Marketing Hero Component
const VideoMarketingHero = () => {
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
        <VideoMarketingHeroScene />
      </Canvas>
    </div>
  );
};

export default VideoMarketingHero;
export { VideoMarketingHeroScene, FilmReel, CameraLens, VideoElements };
