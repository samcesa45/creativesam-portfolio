import { useGLTF } from '@react-three/drei';

const EarthModel = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

useGLTF.preload('./planet/scene.gltf');

export default EarthModel;
