import { useGLTF } from "@react-three/drei";

import planeScene from "../Asset/3D/plane.glb";
const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};
export default Plane;
