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

      // 0xddf6ff = hex de la luz
      const light = new THREE.PointLight(0xddf6ff, 5, 150);
      light.position.set(-5, 5, -5);
      scene.add(light);

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
