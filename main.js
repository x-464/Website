import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//renderer
const renderer = new WebGLRenderer();

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
THREE.ColorManagement.legacyMode = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(7, 10, 5);

//orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 15;
controls.maxPolarAngle = 1.5;
controls.minPolarAngle = 1;
controls.zoomSpeed = 3;
controls.target.set(0, 1.55, 0);
controls.update();

//raycaster
const raycaster = new THREE.Raycaster();

document.addEventListener('mousedown', onMouseDown);

//finding where the raycaster intersected
function onMouseDown(event) {
  const coords = new THREE.Vector2(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -((event.clientY / renderer.domElement.clientHeight) * 2 - 1)
  );

  raycaster.setFromCamera(coords, camera);

  const intersections = raycaster.intersectObjects(scene.children, true);
  const selectedObject = intersections[0].object;

  if (selectedObject.name === 'About_Me_Shortcut') 
  {
    console.log('About Me Shortcut clicked');
  } 
  else if (selectedObject.name === 'About_Me_Notepad_Close') 
  {
    console.log('About Me Notepad Close clicked');
  }
}

//Load model
const loader = new GLTFLoader();
loader.load('PortfolioDesk.glb', function(gltf) 
{
  console.log('loading model');
  const object = gltf.scene;
  object.traverse((child) => 
  {
    if (child.isMesh) 
    {
      child.castShadow = true;
      child.receiveShadow = true;
    }
    
  });

  object.position.set(0, 0, 0);
  scene.add(object);
  document.getElementById('progress-container').style.display = 'none';
}, 

//Tells me how quick it loaded the GLTF
function(xhr) 
{
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, 
function(error) 
{
  console.error(error);
}
);

//Add spotlight
const spotLight = new THREE.SpotLight(0xf5e7d5);
spotLight.position.set(0, 4.5, 0);
spotLight.castShadow = true;
const target = new THREE.Object3D();
target.position.set(0, 0, 0);
scene.add(target);
spotLight.target = target;
spotLight.intensity = 50;
spotLight.angle = 0.7;
spotLight.penumbra = 0.1;
spotLight.decay = 4;
spotLight.distance = 20;
scene.add(spotLight);

//Add ambient spotlight
const ambiencespotLight = new THREE.SpotLight(0xf5e7d5);
ambiencespotLight.position.set(-0.1, 10, 0);
ambiencespotLight.castShadow = true;
const ambiencetarget = new THREE.Object3D();
ambiencetarget.position.set(0, 0, 0);
scene.add(ambiencetarget);
ambiencespotLight.target = ambiencetarget;
ambiencespotLight.intensity = 15;
ambiencespotLight.angle = 1;
ambiencespotLight.penumbra = 0.1;
ambiencespotLight.decay = 1;
ambiencespotLight.distance = 20;
scene.add(ambiencespotLight);

//Animate loop
function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

//Handle window resize
function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);