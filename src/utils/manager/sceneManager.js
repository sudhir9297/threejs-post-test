import * as THREE from "three";

export class Scene {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.raycaster = new THREE.Raycaster();
  }

  pick = (mouseCoordinate) => {
    this.raycaster.setFromCamera(mouseCoordinate, this.camera);
    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );

    return intersects[0] !== undefined ? intersects[0].object : null;
  };
}
