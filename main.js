import * as THREE from 'three'

// scene (think of this as a movie scene this is the enviorment)
const scene = new THREE.Scene()

// creating the sphere (this is what will create the shape and texture)
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83'
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// camera
// params are field of view
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)
