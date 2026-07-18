import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  RoundedBox,
  Environment,
  ContactShadows,
  Sparkles,
  Torus,
  Cylinder,
  Cone,
} from '@react-three/drei'
import * as THREE from 'three'

/* ---------- Floating gradient orb with an orbiting ring ---------- */
function GradientSphere({ position, color, speed = 1, size = 1, ring = false }) {
  const ref = useRef(null)
  const ringRef = useRef(null)

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.25 * speed
    if (ringRef.current) ringRef.current.rotation.z = state.clock.elapsedTime * 0.4 * speed
  })

  return (
    <Float speed={speed} rotationIntensity={0.45} floatIntensity={1.3}>
      <group position={position}>
        <mesh ref={ref}>
          <sphereGeometry args={[size, 48, 48]} />
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={1.4}
            roughness={0.3}
            metalness={0.35}
          />
        </mesh>
        {ring && (
          <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0.3, 0]}>
            <torusGeometry args={[size * 1.7, 0.015, 16, 100]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.4} />
          </mesh>
        )}
      </group>
    </Float>
  )
}

/* ---------- Laptop with a glowing "code editor" screen ---------- */
function ScreenGlow() {
  const lines = useMemo(
    () => [
      { w: 0.9, x: -0.5, color: '#FF6B35' },
      { w: 1.3, x: -0.35, color: '#ffffff' },
      { w: 0.7, x: -0.6, color: '#7C3AED' },
      { w: 1.1, x: -0.45, color: '#ffffff' },
      { w: 0.5, x: -0.7, color: '#FFB800' },
      { w: 1.4, x: -0.3, color: '#ffffff' },
    ],
    []
  )
  return (
    <group position={[0, 0, 0.052]}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, 0.5 - i * 0.16, 0]}>
          <planeGeometry args={[l.w, 0.045]} />
          <meshBasicMaterial color={l.color} toneMapped={false} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  )
}

function Laptop() {
  return (
    <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.7}>
      <group position={[0, -0.3, 0]} rotation={[0.15, -0.4, 0]}>
        {/* base */}
        <RoundedBox args={[2.4, 0.12, 1.6]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color="#222226" roughness={0.35} metalness={0.4} />
        </RoundedBox>
        {/* keyboard deck hint */}
        <mesh position={[0, 0.065, 0]}>
          <planeGeometry args={[2.1, 1.3]} />
          <meshStandardMaterial color="#0f0f12" roughness={0.6} rotation={[-Math.PI / 2, 0, 0]} />
        </mesh>
        {/* screen */}
        <group position={[0, 0.75, -0.78]} rotation={[-1.15, 0, 0]}>
          <RoundedBox args={[2.4, 1.5, 0.08]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="#1b1b1f" roughness={0.4} metalness={0.15} />
          </RoundedBox>
          <mesh position={[0, 0, 0.045]}>
            <planeGeometry args={[2.2, 1.3]} />
            <meshStandardMaterial
              color="#1a1024"
              emissive="#FF6B35"
              emissiveIntensity={0.15}
              toneMapped={false}
            />
          </mesh>
          <ScreenGlow />
        </group>
      </group>
    </Float>
  )
}

/* ---------- Small desk props for personality ---------- */
function CoffeeMug({ position }) {
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.9}>
      <group position={position} rotation={[0, 0.4, 0]}>
        <Cylinder args={[0.14, 0.12, 0.22, 24]}>
          <meshStandardMaterial color="#FFB800" roughness={0.3} metalness={0.15} />
        </Cylinder>
        <Torus args={[0.09, 0.02, 12, 24]} position={[0.17, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#FFB800" roughness={0.3} metalness={0.15} />
        </Torus>
      </group>
    </Float>
  )
}

function DeskPlant({ position }) {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position}>
        <Cylinder args={[0.13, 0.16, 0.2, 16]}>
          <meshStandardMaterial color="#7C3AED" roughness={0.5} />
        </Cylinder>
        {[0, 1, 2, 3, 4].map((i) => (
          <Cone
            key={i}
            args={[0.06, 0.35, 8]}
            position={[Math.cos((i / 5) * Math.PI * 2) * 0.06, 0.28, Math.sin((i / 5) * Math.PI * 2) * 0.06]}
            rotation={[0, 0, (i / 5) * Math.PI * 0.3]}
          >
            <meshStandardMaterial color="#2ecc71" roughness={0.6} />
          </Cone>
        ))}
      </group>
    </Float>
  )
}

/* ---------- Thin glassy floating panels ---------- */
function FloatingPanel({ position, color, rotation = [0, 0, 0], size = [0.9, 0.6, 0.04] }) {
  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={1.1}>
      <RoundedBox args={size} radius={0.06} smoothness={4} position={position} rotation={rotation}>
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.1}
          transparent
          opacity={0.82}
        />
      </RoundedBox>
    </Float>
  )
}

/* ---------- Full scene ---------- */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <pointLight position={[3.5, 3.5, 4]} intensity={0.7} color="#FF6B35" />
      <pointLight position={[-3.5, -1.8, -3]} intensity={0.5} color="#7C3AED" />
      <pointLight position={[0, 2.5, 2]} intensity={0.35} color="#FFB800" />

      <Environment preset="studio" />

      {/* ambient floating particles for depth */}
      <Sparkles count={60} scale={[8, 5, 6]} size={2} speed={0.3} opacity={0.35} color="#FFB800" />

      <Laptop />

      <GradientSphere position={[2.5, 1.3, -1]} color="#7C3AED" size={0.55} speed={1.2} ring />
      <GradientSphere position={[-2.3, -0.8, -0.6]} color="#FF6B35" size={0.4} speed={0.8} />
      <GradientSphere position={[1.9, -1.5, 0.7]} color="#FFB800" size={0.3} speed={1.4} ring />

      <FloatingPanel position={[-2.1, 1.5, 0.4]} color="#222226" rotation={[0.1, 0.3, 0]} />
      <FloatingPanel position={[2.7, -0.6, 0.9]} color="#1b1b1f" rotation={[-0.1, -0.25, 0.05]} />
      <FloatingPanel
        position={[-2.6, -1.2, -0.4]}
        color="#7C3AED"
        rotation={[0.05, 0.5, -0.05]}
        size={[0.55, 0.4, 0.03]}
      />

      <CoffeeMug position={[1.15, -0.22, 0.55]} />
      <DeskPlant position={[-1.15, -0.22, 0.5]} />

      <ContactShadows position={[0, -1.25, 0]} opacity={0.15} scale={5} blur={2.2} far={1.4} color="#000000" />
    </>
  )
}

export default function Workspace3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0.6, 5], fov: 42 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}