import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export const textureLoader = (url, manager) => {
  const loader = new THREE.TextureLoader(manager);
  return new Promise((resolve, reject) => {
    loader.load(url, (texture) => {
      texture.format = THREE.RGBAFormat;
      texture.encoding = THREE.sRGBEncoding;
      resolve(texture);
    }),
      null,
      function (err) {
        reject(err);
      };
  });
};

export const HDRMapLoader = (url, renderer, scene, manager) => {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  new RGBELoader(manager)
    .setDataType(THREE.HalfFloatType)
    .load(url, (texture) => {
      var envMap = pmremGenerator.fromEquirectangular(texture).texture;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.format = THREE.RGBFormat;
      //   texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      //   scene.background = envMap;
      scene.environment = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });
};
