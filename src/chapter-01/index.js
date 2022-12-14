import * as THREE from 'three'
import { initGui, initStats } from '../util'

let camera;
let scene;
let renderer;

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function init() {

  const stats = initStats()

  // 创建创建
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0, 1.0));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 开启阴影
  renderer.shadowMap.enabled = true

  // 创建面板
  const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);

  // 创建立方体
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  scene.add(cube);

  // 创建球
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);

  const ambientLight = new THREE.AmbientLight(0x0c0c0c)
  scene.add(ambientLight)

  // 创建光源
  const spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-40, 60, -10)
  spotLight.castShadow = true
  scene.add(spotLight)

  document.getElementById('three')
    .appendChild(renderer.domElement);

  let step = 0

  const controls = initGui()

  render()

  function render() {
    stats.update()

    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += controls.rotationSpeed
    cube.rotation.z += controls.rotationSpeed

    step += controls.bouncingSpeed
    sphere.position.x = 20 + (10 * Math.cos(step))
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)))

    requestAnimationFrame(render)
    renderer.render(scene, camera);
  }
}

window.onload = init
window.addEventListener('resize', onResize, false)
