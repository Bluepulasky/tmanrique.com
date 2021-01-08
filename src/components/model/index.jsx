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

      let pointlight = new THREE.AmbientLight(0x333333);
      let ambientLight = new THREE.DirectionalLight(0xffffff, 2.0);
      scene.add(pointlight);
      scene.add(ambientLight);

/*      let stainless_steel = new THREE.MeshPhysicalMaterial({
        map: null,
        color: 0xeeeeee,
        metalness: 1,
        roughness: 0.3,
        opacity: 1,
        side: THREE.BackSide,
        transparent: false,
        // TODO: Add custom blend mode that modulates background color by this materials color.
      });
*/

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
