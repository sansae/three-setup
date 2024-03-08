import { useEffect } from "react";

import * as THREE from 'three';
import { TeapotGeometry } from "three/examples/jsm/Addons";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();
    
    // PART 1
    // Adding geometries to a three.js scene
    const boxGeometry = new THREE.BoxGeometry(10, 10, 10, 1, 1, 10, 16);
    const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true});
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -10
    // test.scene.add(boxMesh);

    // params: size, segments
    const teapotGeometry = new TeapotGeometry(5, 10)
    const teapotMaterial = new THREE.MeshNormalMaterial({wireframe: true});
    const teapotMesh = new THREE.Mesh(teapotGeometry, teapotMaterial);
    teapotMesh.position.x = -10;
    test.scene.add(teapotMesh);

    // params: width, height, depth, segment, radius
    const roundedboxGeometry = new RoundedBoxGeometry(10, 10, 10, 10, 10);
    // (10, 10, 10, 10, 10) alters the rounded box and creates a perfect circle...

    const roundedboxMaterial = new THREE.MeshNormalMaterial({wireframe: true});
    const roundedboxMesh = new THREE.Mesh(roundedboxGeometry, roundedboxMaterial);
    roundedboxMesh.position.x = 10;
    test.scene.add(roundedboxMesh);


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
