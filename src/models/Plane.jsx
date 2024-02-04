import { useGLTF } from "@react-three/drei";
import planeScene from "../Asset/3D/plane.glb";


const Plane = ({isRotating, ...props}) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Plane;
