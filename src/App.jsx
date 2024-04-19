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

    const gui = new GUI()

    // add textures...
    const spaceTexture = new THREE.TextureLoader().load("./assets/space.jpeg")
    spaceTexture.wrapS = THREE.RepeatWrapping
    spaceTexture.wrapT = THREE.RepeatWrapping
    spaceTexture.repeat.set(2,2)
    
    const uvTexture = new THREE.TextureLoader().load('./assets/uv.png')
    const earthTexture = new THREE.TextureLoader().load('./assets/earth.jpeg')
    const crateTexture = new THREE.TextureLoader().load('./assets/crate.png')
    test.scene.background = spaceTexture

    
    // geometries
    const boxGeometry = new THREE.BoxGeometry(6, 6, 6)
    const boxGeometry2 = new THREE.BoxGeometry(6, 6, 6)
    const boxGeometry3 = new THREE.BoxGeometry(6, 6, 6)
    // when each argument for RoundedBoxGeometry is the same number, it alters the rounded box and creates a perfect circle...
    const roundedBoxGeometry = new RoundedBoxGeometry(6, 6, 6, 6, 6);
    const roundedBoxGeometry2 = new RoundedBoxGeometry(6, 6, 6, 6, 6, 6)
    const roundedBoxGeometry3 = new RoundedBoxGeometry(6, 6, 6, 6, 6, 6)
    
    // material that goes on geometries
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })    
    // const boxMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const boxMaterial2 = new THREE.MeshPhongMaterial({ map: crateTexture })
    const boxMaterial3 = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const roundedBoxMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      wireframe: true,
    })
    // const roundedBoxMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const roundedBoxMaterial2 = new THREE.MeshPhongMaterial({ map: crateTexture })
    // const roundedBoxMaterial3 = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const roundedBoxMaterial3 = new THREE.MeshPhongMaterial({ map: earthTexture })
    
    // the mesh that brings geomtries and materials together
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    const boxMesh2 = new THREE.Mesh(boxGeometry2, boxMaterial2)
    const boxMesh3 = new THREE.Mesh(boxGeometry3, boxMaterial3)
    const roundedBoxMesh = new THREE.Mesh(roundedBoxGeometry, roundedBoxMaterial);
    const roundedBoxMesh2 = new THREE.Mesh(roundedBoxGeometry2, roundedBoxMaterial2)
    const roundedBoxMesh3 = new THREE.Mesh(roundedBoxGeometry3, roundedBoxMaterial3)

    // positioning of geometries
    boxMesh2.position.x = 8
    boxMesh3.position.x = -8
    // roundedBoxMesh.position.y = 8
    roundedBoxMesh.position.set(null, 8)
    roundedBoxMesh2.position.set(8, 8)
    roundedBoxMesh3.position.set(-8, 8)

    // adding the geometries to the scene
    test.scene.add(boxMesh, boxMesh2, boxMesh3, roundedBoxMesh, roundedBoxMesh2, roundedBoxMesh3)



    const bg = new THREE.BoxGeometry(6, 6, 6, 6, 6, 6)
    const bmat = new THREE.MeshStandardMaterial({ map: uvTexture })
    const bmesh = new THREE.Mesh(bg, bmat)
    bmesh.position.set(0, -8)
    test.scene.add(bmesh)
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
