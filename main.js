import * as THREE from 'three'
import './style.css'
// scene (think of this as a movie scene this is the enviorment)
const scene = new THREE.Scene()

// creating the sphere (this is what will create the shape and texture)
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83'
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//  sizes

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// lights
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

// camera (params are field of view)
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.z = 20
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
