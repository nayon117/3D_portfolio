/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../Asset/3D/Island.glb";


const Island = ({isRotating, setIsRotating, ...props}) => {
 
  const islandRef = useRef();
  
  const {gl, viewport} = useThree()
  const { nodes, materials } = useGLTF(islandScene);
  
  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor =  0.9;

  const handlePointerDown = (e) =>{
    e.stopProgation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerUp = (e) =>{
    e.stopProgation();
    e.preventDefault();
    setIsRotating(false);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta =( clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.01 * Math.PI 
    lastX.current = clientX;
    rotationSpeed.current += delta * 0.01 * Math.PI
  }
   
  const handlePointerMove = (e) =>{
    e.stopProgation();
    e.preventDefault();

    if(isRotating){
      handlePointerUp(e);
    }
    
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating (true);
      islandRef.current.rotation.y += 0.01 * Math.PI
    } else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating (true);
      islandRef.current.rotation.y -= 0.01 * Math.PI
    }
  }
  

  // handle side efffect
  useEffect(()=>{
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    
    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
    }

  },[gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface989_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface951_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface970_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1005_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1009_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube195_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCylinder139_fox_readyfox_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCylinder139_fox_readyfox_black_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1150_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1153_roof1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1138_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1139_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1140_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1141_roof1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1159_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface1160_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube12_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
