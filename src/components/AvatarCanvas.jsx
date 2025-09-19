import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";

export default function AvatarCanvas({ animation }) {
  return (
    <Canvas
      className="min-h-screen opacity-0 animate-fade-in-delay-4"
      camera={{ position: [0, 2, 9], fov: 15 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <group position-y={-1}>
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="rgba(0, 0, 0, 1)"
        />
        <Avatar animation={animation} />
      </group>
    </Canvas>
  );
}