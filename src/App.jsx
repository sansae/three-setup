import { useEffect } from "react";

import * as THREE from 'three';
import { TeapotGeometry } from "three/examples/jsm/Addons";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons";

import { GUI } from 'dat.gui'

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // add box geometry
    const boxGeometry = new THREE.BoxGeometry(6, 6, 6)
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    test.scene.add(boxMesh)

    
    // params: width, height, depth, segment, radius
    const roundedboxGeometry = new RoundedBoxGeometry(6, 6, 6, 6, 6);
    // (10, 10, 10, 10, 10) alters the rounded box and creates a perfect circle...

    const roundedboxMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      wireframe: true,
    })
    const roundedboxMesh = new THREE.Mesh(roundedboxGeometry, roundedboxMaterial);
    // roundedboxMesh.position.x = 10;
    roundedboxMesh.position.y = 8
    test.scene.add(roundedboxMesh);

    const gui = new GUI()

    // add space texture
    const spaceTexture = new THREE.TextureLoader().load("./assets/space.jpeg")
    test.scene.background = spaceTexture

    const uvTexture = new THREE.TextureLoader().load('./assets/uv.png')

    // geometry
    // material
    // mesh = geometry and material
    // const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 10, 32, 16);
    // const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinderMesh.position.x = 10
    // test.scene.add(cylinderMesh)
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
