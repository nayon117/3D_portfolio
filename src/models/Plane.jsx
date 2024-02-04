import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../Asset/3D/plane.glb";
import { useEffect, useRef } from "react";


const Plane = ({isRotating, ...props}) => {

  const ref = useRef()
  const { scene, animations } = useGLTF(planeScene);
  const {actions} = useAnimations(animations, ref)

  // handle side effects
  useEffect(()=>{
    console.log({isRotating});
    if(isRotating){
      actions['Take 001'].play();
    }else{
      actions['Take 001'].stop();
    }

  },[actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Plane;
