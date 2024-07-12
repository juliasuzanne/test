import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { PlaneGeometry } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Scene = () => {
  return (
    <Canvas>
      <pointLight position={[102, 100, 120]} />
      <mesh>
        <planeGeometry args={[3, 5]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </Canvas>
  );
};
function HomeApp() {
  return <Scene />;
}

export default HomeApp;
