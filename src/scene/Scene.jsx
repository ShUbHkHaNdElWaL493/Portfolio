import { Canvas } from '@react-three/fiber';
import CameraSystem from './CameraSystem';
import ContentBoxes from './ContentBoxes';
import RoboticArm from './RoboticArm';

export default function Scene({ onReady }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 40, near: 0.1, far: 60, position: [0, 3.4, 6.8] }} onCreated={onReady}>
      <color attach="background" args={['#0d1117']} />
      <fog attach="fog" args={['#0d1117', 9, 20]} />
      <hemisphereLight args={['#a9bcd6', '#1a1f27', 0.9]} />
      <directionalLight position={[4, 8, 5]} intensity={1.8} castShadow shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-6} shadow-camera-right={6} shadow-camera-top={6} shadow-camera-bottom={-6} />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[7, 64]} />
        <meshStandardMaterial color="#141b24" roughness={0.9} />
      </mesh>
      <gridHelper args={[14, 28, '#2a3441', '#1c2430']} position-y={0.002} />
      {/* Order matters: the arm updates before the boxes that follow its tip. */}
      <RoboticArm />
      <ContentBoxes />
      <CameraSystem />
    </Canvas>
  );
}
