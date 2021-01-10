import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./index.scss";

export default function Model(props) {
  const { model } = props;
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const scene = new THREE.Scene();
      // (FOV, aspect, near dist, far dist)
      const camera = new THREE.PerspectiveCamera(45, 1024 / 768, 0.01, 100000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(1024, 768);

      // Actualiza el DOM con el canvas nuevo
      sceneRef.current.innerHTML = "";
      sceneRef.current.appendChild(renderer.domElement);

      // const gridHelper = new THREE.GridHelper(10, 20);
      // scene.add(gridHelper);

      //lights

      scene.add(new THREE.AmbientLight(0x666666));

      const light = new THREE.DirectionalLight(0xdfebff, 1);
      light.position.set(50, 200, 100);
      light.position.multiplyScalar(1.3);

      light.castShadow = true;

      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;

      const d = 300;

      light.shadow.camera.left = -d;
      light.shadow.camera.right = d;
      light.shadow.camera.top = d;
      light.shadow.camera.bottom = -d;

      light.shadow.camera.far = 1000;

      scene.add(light);

      /*let stainless_steel = new THREE.MeshPhysicalMaterial({
        map: null,
        color: 0xff00000,
        metalness: 0,
        roughness: 0.3,
        opacity: 1,
        transparent: false,
      });*/

      // https://threejs.org/docs/#examples/en/controls/OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);

      camera.position.z = 1.66;
      camera.position.x = -1.66;
      camera.position.y = 1.66;

      controls.update();

      function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.render(scene, camera);
      }

      const loader = new GLTFLoader();

      loader.load(
        model,
        function (loadedModel) {
          console.log("Loaded OK!");
          loadedModel.scene.translateY(-0.25);
          scene.add(loadedModel.scene);
          render();
          // aca va una funcion para modificar el material del mesh "estructura", material "Clean Stainless" a stainless_steel definido en linea 32
          // chair = new THREE.Mesh(chair.Mesh, stainless_steel); la idea es esta pero hay que definir "chair"
        },
        console.log, // aca va una funcion para actualizar un loader
        console.error
      );
    }
  }, [model, sceneRef]);

  return (
    <div className="model-container">
      <div className="model" ref={sceneRef} />
    </div>
  );
}

Model.propTypes = {
  model: PropTypes.string,
};
