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
    bloomFolder.open();

    const noiseFolder = gui.addFolder("noise");
    noiseFolder.add(this.params, "enableNoise");
    noiseFolder.add(this.params, "noiseSpeed").min(0).max(0.1).step(0.00001);
    noiseFolder.add(this.params, "noiseIntensity").min(0).max(1).step(0.001);
    noiseFolder.open();

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
    distortionFolder.open();
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

    this.composer = new EffectComposer(this.renderer, target);

    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.renderScene);
    // this.composer.addPass(chromaticAberrationPass);
    this.composer.addPass(this.grainPass);
    this.composer.addPass(this.distortPass);
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
