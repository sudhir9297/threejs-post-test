import React from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { OrbitControls } from "./utils/others/orbitControl";
import { OrbitControlsGizmo } from "./utils/others/Gizmo";
import { HDRMapLoader } from "./utils/manager/textureLoader";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import Model from "./assets/models/scene.glb?url";
import HDR from "./assets/hdr/default.hdr?url";

import fragment from "./utils/shader/fragment.glsl";
import vertex from "./utils/shader/vertex.glsl";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.InitialSetup();
  }

  InitialSetup = () => {
    this.container = document.getElementById("container");
    const item = document.getElementById("container").getBoundingClientRect();
    this.sizes = {
      width: item.width,
      height: item.height,
    };

    this.canvas = document.querySelector("canvas.webgl");
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#1c1c1c");
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      10,
      2000
    );
    this.camera.position.set(2, 300, 700);
    this.scene.add(this.camera);

    this.manager = new THREE.LoadingManager();
    this.manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      const ProgressVal = (itemsLoaded / itemsTotal) * 100;
      if (ProgressVal === 100) {
        console.log("scene loaded");
      }
    };

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.addEventListener("change", () => {});
    // this.controls.enableDamping = true;
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    this.controlsGizmo = new OrbitControlsGizmo(this.controls, {
      size: 100,
      padding: 8,
    });
    this.container.appendChild(this.controlsGizmo.domElement);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    HDRMapLoader(HDR, this.renderer, this.scene, this.manager);

    this.addObject();
    this.postProcessing();

    window.addEventListener("resize", this.resize);
    const renderLoop = () => {
      this.controls.update();
      window.requestAnimationFrame(renderLoop);

      this.composer.render();
    };
    renderLoop();
  };

  resize = () => {
    this.sizes.width = this.container.offsetWidth;
    this.sizes.height = this.container.offsetHeight;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  };

  addObject = () => {
    const GLtfLoader = new GLTFLoader(this.manager);
    GLtfLoader.load(Model, (gltf) => {
      gltf.scene.position.set(0, -1, 0);
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (
            child.name.split("_").slice(0, 2).join("_") === "light_plane" ||
            child.name.split("_").slice(0, 2).join("_") === "wallLamp_light" ||
            child.name.split("_")[0] === "ceilingLight" ||
            child.name.split("_")[0] === "lightPlane"
          ) {
            child.material.toneMapped = false;
            child.material.emissive = new THREE.Color(0xffffff);
            child.material.emissiveIntensity = 10;
            child.material.needsUpdate = true;
          }
        }
      });

      this.scene.add(gltf.scene);
    });
  };

  postProcessing = () => {
    const target = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height,
      {
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding,
      }
    );
    target.samples = 8;

    this.renderScene = new RenderPass(this.scene, this.camera);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.sizes.width, this.sizes.height),
      2,
      1,
      1
    );

    this.composer = new EffectComposer(this.renderer, target);

    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.renderScene);
    this.composer.addPass(this.bloomPass);
  };

  render() {
    return (
      <div id="container">
        <canvas className="webgl"></canvas>
      </div>
    );
  }
}

export default App;
