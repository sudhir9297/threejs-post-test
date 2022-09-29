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
      75,
      this.sizes.width / this.sizes.height,
      10,
      1000
    );
    this.camera.position.set(100, 200, 500);
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

    HDRMapLoader("/hdr/default.hdr", this.renderer, this.scene, this.manager);

    this.addObject();
    this.postProcessing();

    window.addEventListener("resize", this.resize);
    const renderLoop = () => {
      this.controls.update();
      window.requestAnimationFrame(renderLoop);

      // this.renderer.render(this.scene, this.camera);

      this.renderer.autoClear = false;
      this.renderer.clear();

      this.renderer.setClearColor(0x000000, 1);
      this.camera.layers.set(1);
      this.composer.render();

      this.renderer.clearDepth();
      this.camera.layers.set(0);

      // this.globalDarkeningVal.value = 1;
      // this.renderer.setClearColor(0x000000, 1);
      // this.composer.render();
      // this.globalDarkeningVal.value = 0;
      this.renderer.setClearColor(0x303030, 1);
      this.finalComposer.render();
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
    // this.globalDarkeningVal = {
    //   value: 1,
    // };

    const meshUrl = "/models/scene2.glb";

    const GLtfLoader = new GLTFLoader(this.manager);
    GLtfLoader.load(meshUrl, (gltf) => {
      gltf.scene.position.set(0, -1, 0);
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.name.split("_").slice(0, 2).join("_") === "light_plane") {
            child.material.emissive = new THREE.Color(0xffffff);
            child.material.emissiveIntensity = 1;
            child.material.needsUpdate = true;
            child.layers.enable(1);
            // child.material.onBeforeCompile = (shader) => {
            //   shader.uniforms.globalDarkening = this.globalDarkeningVal;
            //   shader.uniforms.hasBloom = { value: 1 };
            //   shader.fragmentShader =
            //     `
            //   uniform float globalDarkening;
            //   uniform float hasBloom;
            // ` + shader.fragmentShader;
            //   shader.fragmentShader = shader.fragmentShader.replace(
            //     `void main() {`,
            //     `void main() {
            //   if (globalDarkening > 0.5 || hasBloom < 0.5){
            // `
            //   );
            //   shader.fragmentShader = shader.fragmentShader.replace(
            //     `#include <dithering_fragment>`,
            //     `#include <dithering_fragment>
            //     } else {
            //       gl_FragColor = vec4(vec3(1.0), 1.0);
            //     }`
            //   );
            // };
          }
        }
      });

      this.scene.add(gltf.scene);
    });

    // this.material = new THREE.ShaderMaterial({
    //   extensions: {
    //     derivatives: "#extension GL_OES_standard_derivatives : enable",
    //   },
    //   side: THREE.DoubleSide,
    //   uniforms: {
    //     time: { value: 0 },
    //     resolution: { value: new THREE.Vector4() },
    //   },
    //   // wireframe: true,
    //   // transparent: true,
    //   vertexShader: vertex,
    //   fragmentShader: fragment,
    // });

    // this.geometry = new THREE.BoxBufferGeometry(1, 1, 1);

    // this.Box = new THREE.Mesh(this.geometry, this.material);
    // scene.add(this.Box);
  };

  postProcessing = () => {
    this.renderScene = new RenderPass(this.scene, this.camera);
    this.params = {
      exposure: 1,
      strength: 1,
      threshold: 0.5,
      radius: 0.5,
    };
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    this.bloomPass.threshold = this.params.threshold;
    this.bloomPass.strength = this.params.strength;
    this.bloomPass.radius = this.params.radius;
    this.bloomPass.renderToScreen = true;

    this.composer = new EffectComposer(this.renderer);
    this.composer.renderToScreen = false;
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.renderScene);
    this.composer.addPass(this.bloomPass);
    this.finalPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: this.composer.renderTarget2.texture },
        },
        vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,
        fragmentShader: `
        uniform sampler2D baseTexture;
    	  uniform sampler2D bloomTexture;
    	  varying vec2 vUv;
    	  void main() {
    		  gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
    	  }
        `,
        defines: {},
      }),
      "baseTexture"
    );
    this.finalPass.needsSwap = true;

    this.finalComposer = new EffectComposer(this.renderer);
    this.finalComposer.addPass(this.renderScene);
    this.finalComposer.addPass(this.finalPass);
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
