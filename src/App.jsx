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
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";

import { FilmGrainShader } from "./utils/shaderPass/FilmGrainShader";
import { LensDistortionShader } from "./utils/shaderPass/LensDistortionShader";

import Model from "./assets/models/scene.glb?url";
import HDR from "./assets/hdr/default.hdr?url";
import { GTAOPass } from "./utils/shaderPass/Gtao/GTAOPass";

import * as dat from "dat.gui";

import fragment from "./utils/shader/fragment.glsl";
import vertex from "./utils/shader/vertex.glsl";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.params = {
      color: "#ffffff",
      emissiveColor: "#0ef8ec",
      emissiveIntensity: 10,
      toneMapped: false,

      enableBloom: true,
      bloomStrength: 1,
      bloomThreshold: 1,
      bloomRadius: 1,

      enableNoise: false,
      noiseSpeed: 0.01,
      noiseIntensity: 0.005,

      enableDistortion: false,
      baseIor: 1,
      bandOffset: 0.001,
      jitterIntensity: 0.5,
      samples: 8,
      distortionMode: "rgb",

      enabled: true,
      rotationJitter: 1,
      radiusJitter: 0,

      directionOffset: 0.0,
      stepOffset: 0.0,
      numSteps: 8,
      numDirections: 1,
      intensity: 1.0,
      radius: 2.0,

      enableFalloff: true,
      falloffStart: 0.4,
      falloffEnd: 2.0,

      blurMode: GTAOPass.BOX_BLUR,
      blurIterations: 5,
      blurStride: 1,

      display: GTAOPass.DEFAULT,
      renderTargetScale: 0.5,
      scene: "pyramid",

      ambientLightColor: [255, 255, 255],
      ambientLightIntensity: 0,

      enableLightBounce: false,
      lightBounceIntensity: 1.0,
    };

    this.InitialSetup();
  }

  InitialSetup = () => {
    // THREE.ColorManagement.legacyMode = false;
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
    this.addGui();

    window.addEventListener("resize", this.resize);

    const renderLoop = () => {
      this.controls.update();
      window.requestAnimationFrame(renderLoop);

      if (this.scene.update) this.scene.update();

      this.bloomPass.threshold = this.params.bloomThreshold;
      this.bloomPass.strength = this.params.bloomStrength;
      this.bloomPass.radius = this.params.bloomRadius;
      this.bloomPass.enabled = this.params.enableBloom;

      this.grainPass.enabled = this.params.enableNoise;
      this.grainPass.material.uniforms.noiseOffset.value +=
        this.params.noiseSpeed;
      this.grainPass.material.uniforms.intensity.value =
        this.params.noiseIntensity;

      this.distortPass.enabled = this.params.enableDistortion;
      this.distortPass.material.uniforms.baseIor.value = this.params.baseIor;
      this.distortPass.material.uniforms.bandOffset.value =
        this.params.bandOffset;
      this.distortPass.material.uniforms.jitterOffset.value += 0.01;
      this.distortPass.material.uniforms.jitterIntensity.value =
        this.params.jitterIntensity;

      this.gtaoPass.debug.display = parseInt(this.params.display);
      this.gtaoPass.enabled = this.params.enabled;
      this.gtaoPass.singlePass = this.params.singlePass;
      this.gtaoPass.rotationJitter = parseInt(this.params.rotationJitter);
      this.gtaoPass.radiusJitter = parseInt(this.params.radiusJitter);
      this.gtaoPass.blurMode = parseFloat(this.params.blurMode);
      this.gtaoPass.blurIterations = this.params.blurIterations;
      this.gtaoPass.blurStride = this.params.blurStride;
      this.gtaoPass.numSteps = this.params.numSteps;
      this.gtaoPass.numDirections = this.params.numDirections;
      this.gtaoPass.intensity = this.params.intensity;
      this.gtaoPass.radius = this.params.radius;
      this.gtaoPass.falloffStart = this.params.falloffStart;
      this.gtaoPass.falloffEnd = this.params.falloffEnd;
      this.gtaoPass.enableFalloff = this.params.enableFalloff;
      this.gtaoPass.directionOffset = this.params.directionOffset;
      this.gtaoPass.stepOffset = this.params.stepOffset;

      this.gtaoPass.lightBounceIntensity = this.params.enableLightBounce
        ? this.params.lightBounceIntensity
        : 0.0;

      // ambientLight.color.setRGB( ...this.params.ambientLightColor.map( c => c / 255 ) );
      // ambientLight.intensity = this.params.ambientLightIntensity;

      this.gtaoPass.ambientColor.setRGB(
        ...this.params.ambientLightColor.map((c) => c / 255)
      );
      this.gtaoPass.ambientIntensity = this.params.ambientLightIntensity;

      // gammaPass.enabled = this.gtaoPass.debug.display === GTAOPass.DEFAULT;
      this.gtaoPass.debug.display === GTAOPass.DEFAULT;

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

  addGui() {
    const gui = new dat.GUI();

    const bloomFolder = gui.addFolder("Bloom");
    bloomFolder.add(this.params, "enableBloom");
    bloomFolder.add(this.params, "bloomStrength").min(0).max(10).step(0.001);
    bloomFolder.add(this.params, "bloomThreshold").min(0).max(1).step(0.01);
    bloomFolder.add(this.params, "bloomRadius").min(-1).max(1).step(0.01);
    // bloomFolder.open();

    const noiseFolder = gui.addFolder("Flim Grain");
    noiseFolder.add(this.params, "enableNoise");
    noiseFolder.add(this.params, "noiseSpeed").min(0).max(0.1).step(0.00001);
    noiseFolder.add(this.params, "noiseIntensity").min(0).max(1).step(0.001);
    // noiseFolder.open();

    const distortionFolder = gui.addFolder("distortion");
    distortionFolder.add(this.params, "enableDistortion");
    distortionFolder
      .add(this.params, "baseIor")
      .min(0.75)
      .max(1.25)
      .step(0.001);
    distortionFolder
      .add(this.params, "bandOffset")
      .min(-0.02)
      .max(0.02)
      .step(0.001);
    distortionFolder
      .add(this.params, "jitterIntensity")
      .min(0)
      .max(2.0)
      .step(0.01);
    distortionFolder
      .add(this.params, "samples")
      .min(1)
      .max(20)
      .step(1)
      .onChange((v) => {
        this.distortPass.material.defines.CHROMA_SAMPLES = v;
        this.distortPass.material.needsUpdate = true;
      });
    distortionFolder
      .add(this.params, "distortionMode", ["none", "rgb", "rygcbv"])
      .onChange((v) => {
        switch (v) {
          case "none":
            this.distortPass.material.defines.BAND_MODE = 0;
            break;
          case "rgb":
            this.distortPass.material.defines.BAND_MODE = 1;
            break;
          case "rygcbv":
            this.distortPass.material.defines.BAND_MODE = 2;
            break;
        }
        this.distortPass.material.needsUpdate = true;
      });
    // distortionFolder.open();

    const settingsFolder = gui.addFolder("Gtao");
    settingsFolder.add(this.params, "directionOffset").step(0.01);
    settingsFolder.add(this.params, "stepOffset").step(0.01);
    settingsFolder.add(this.params, "rotationJitter", {
      NONE: 0,
      RANDOM: 1,
      BLUE_NOISE: 2,
    });
    settingsFolder.add(this.params, "radiusJitter", {
      NONE: 0,
      RANDOM: 1,
      BLUE_NOISE: 2,
    });
    settingsFolder.add(this.params, "numSteps").step(1);
    settingsFolder.add(this.params, "numDirections").step(1);
    settingsFolder.add(this.params, "intensity").step(0.01);
    settingsFolder.add(this.params, "radius").step(0.01);

    settingsFolder.add(this.params, "enableFalloff");
    settingsFolder.add(this.params, "falloffStart").step(0.01);
    settingsFolder.add(this.params, "falloffEnd").step(0.01);

    settingsFolder
      .add(this.params, "renderTargetScale")
      .step(0.01)
      .onChange((v) => {
        this.gtaoPass.renderTargetScale = v;
      });
    // settingsFolder
    //   .add(this.params, "directionOffset")
    //   .min(0.0)
    //   .max(1)
    //   .step(0.01);
    // settingsFolder.add(this.params, "stepOffset").min(0.0).max(1).step(0.01);
    // settingsFolder.add(this.params, "rotationJitter", {
    //   NONE: 0,
    //   RANDOM: 1,
    //   BLUE_NOISE: 2,
    // });
    // settingsFolder.add(this.params, "radiusJitter", {
    //   NONE: 0,
    //   RANDOM: 1,
    //   BLUE_NOISE: 2,
    // });
    // settingsFolder.add(this.params, "numSteps").min(1).max(32).step(1);
    // settingsFolder.add(this.params, "numDirections").min(1).max(32).step(1);
    // settingsFolder.add(this.params, "intensity").min(0).max(2.0).step(0.01);
    // settingsFolder.add(this.params, "radius").min(0).max(10.0).step(0.01);

    // settingsFolder.add(this.params, "enableFalloff");
    // settingsFolder.add(this.params, "falloffStart").min(0).max(10.0).step(0.01);
    // settingsFolder.add(this.params, "falloffEnd").min(0).max(10.0).step(0.01);

    // settingsFolder
    //   .add(this.params, "renderTargetScale")
    //   .min(0.1)
    //   .max(1.0)
    //   .step(0.01)
    //   .onChange((v) => {
    //     this.gtaoPass.renderTargetScale = v;
    //   });
    // settingsFolder.open();

    const blurFolder = gui.addFolder("blur");
    blurFolder.add(this.params, "blurMode", {
      NO_BLUR: GTAOPass.NO_BLUR,
      BOX_BLUR: GTAOPass.BOX_BLUR,
      CROSS_BLUR: GTAOPass.CROSS_BLUR,
      DIAGONAL_BLUR: GTAOPass.DIAGONAL_BLUR,
    });
    blurFolder.add(this.params, "blurIterations").min(1).max(20).step(1);
    blurFolder.add(this.params, "blurStride").min(1).max(5).step(1);
    // blurFolder.open();

    const ambientLightFolder = gui.addFolder("ambient light");
    ambientLightFolder.addColor(this.params, "ambientLightColor").name("color");
    ambientLightFolder
      .add(this.params, "ambientLightIntensity")
      .name("intensity")
      .min(0)
      .max(10)
      .step(0.1);
    // ambientLightFolder.open();

    const lightBounceFolder = gui.addFolder("illumination");
    lightBounceFolder.add(this.params, "enableLightBounce");
    lightBounceFolder
      .add(this.params, "lightBounceIntensity")
      .min(0.0)
      .max(5.0)
      .step(0.01);
    // lightBounceFolder.open();

    const debugFolder = gui.addFolder("debug");
    debugFolder.add(this.params, "display", {
      DEFAULT: GTAOPass.DEFAULT,
      DEPTH: GTAOPass.DEPTH,
      NORMAL: GTAOPass.NORMAL,
      AO_SAMPLE: GTAOPass.AO_SAMPLE,
      COLOR_SAMPLE: GTAOPass.COLOR_SAMPLE,
    });
    // debugFolder.open();

    this.gtaoPass.renderTargetScale = this.params.renderTargetScale;

    gui.open();
  }

  createKnotScene() {
    const group = new THREE.Group();

    const ground = new THREE.Mesh(
      new THREE.BoxBufferGeometry(),
      new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.8 })
    );
    ground.receiveShadow = true;
    ground.scale.set(50, 0.1, 50);
    ground.position.y = -1;
    group.add(ground);

    const wall = new THREE.Mesh(
      new THREE.BoxBufferGeometry(),
      new THREE.MeshStandardMaterial({ color: 0xff8700, roughness: 0.8 })
    );
    wall.receiveShadow = true;
    wall.castShadow = true;
    wall.scale.set(0.1, 3, 3);
    wall.position.x = -1.25;
    group.add(wall);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotBufferGeometry(1, 0.35, 200, 32, 2, 5),
      new THREE.MeshStandardMaterial({ color: 0xcf031f, roughness: 1 })
    );
    knot.position.y = 0.1;
    knot.castShadow = true;
    knot.scale.setScalar(0.5);
    knot.receiveShadow = true;
    group.add(knot);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 2, 1);
    directionalLight.castShadow = true;

    const shadowCam = directionalLight.shadow.camera;
    shadowCam.left = shadowCam.bottom = -3;
    shadowCam.right = shadowCam.top = 3;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    group.add(directionalLight);

    const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry());
    directionalLight.add(sphere);

    group.update = function () {
      const t = (Math.sin(window.performance.now() * 0.001) + 1.0) / 2.0;
      const angle = THREE.MathUtils.lerp(-Math.PI / 10.0, Math.PI / 2.0, t);

      directionalLight.position.set(10.0, 0.0, 0.0);
      directionalLight.position.applyAxisAngle(
        new THREE.Vector3(0, 0, 1),
        angle
      );
    };

    return group;
  }

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
            child.material.emissive = new THREE.Color("#e2e2e2");
            child.material.emissiveIntensity = 10;
            child.material.needsUpdate = true;
          }
        }
      });

      this.scene.add(gltf.scene);
    });

    // const knotScene = this.createKnotScene();
    // this.scene.add(knotScene);
  };

  postProcessing = () => {
    const target = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding,
      }
    );
    target.samples = 8;

    this.renderScene = new RenderPass(this.scene, this.camera);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.sizes.width, this.sizes.height),
      1,
      1,
      1
    );
    const chromaticAberration = {
      uniforms: {
        tDiffuse: { type: "t", value: null },
        resolution: {
          value: new THREE.Vector2(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio
          ),
        },
        power: { value: 0.5 },
      },

      vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
          `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;

        vec2 barrelDistortion(vec2 coord, float amt) {
          vec2 cc = coord - 0.5;
          float dist = dot(cc, cc);
          return coord + cc * dist * amt;
        }
  
        float sat( float t )
        {
          return clamp( t, 0.0, 1.0 );
        }
  
        float linterp( float t ) {
          return sat( 1.0 - abs( 2.0*t - 1.0 ) );
        }
  
        float remap( float t, float a, float b ) {
          return sat( (t - a) / (b - a) );
        }
  
        vec4 spectrum_offset( float t ) {
          vec4 ret;
          float lo = step(t,0.5);
          float hi = 1.0-lo;
          float w = linterp( remap( t, 1.0/6.0, 5.0/6.0 ) );
          ret = vec4(lo,1.0,hi, 1.) * vec4(1.0-w, w, 1.0-w, 1.);
          return pow( ret, vec4(1.0/2.2) );
        }
  
        const float max_distort = 2.2;
        const int num_iter = 12;
        const float reci_num_iter_f = 1.0 / float(num_iter);
  
        void main()
        {	
          vec2 uv=(gl_FragCoord.xy/resolution.xy*.5)+.25;
  
          vec4 sumcol = vec4(0.0);
          vec4 sumw = vec4(0.0);	
          for ( int i=0; i<num_iter;++i )
          {
            float t = float(i) * reci_num_iter_f;
            vec4 w = spectrum_offset( t );
            sumw += w;
            sumcol += w * texture2D( tDiffuse, barrelDistortion(uv, .6 * max_distort*t ) );
          }
  
          gl_FragColor = sumcol / sumw;
        }
        `,
    };
    let chromaticAberrationPass = new ShaderPass(chromaticAberration);

    this.gammaCorrection = new ShaderPass(GammaCorrectionShader);
    this.grainPass = new ShaderPass(FilmGrainShader);
    this.distortPass = new ShaderPass(LensDistortionShader);
    this.gtaoPass = new GTAOPass(this.scene, this.camera);

    this.composer = new EffectComposer(this.renderer, target);

    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.renderScene);
    // this.composer.addPass(chromaticAberrationPass);
    this.composer.addPass(this.grainPass);
    this.composer.addPass(this.distortPass);
    this.composer.addPass(this.gtaoPass);

    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.gammaCorrection);
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
