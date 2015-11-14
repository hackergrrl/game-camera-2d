var createCamera = require('./index')
var mat3 = require('gl-mat3')

var camera = createCamera({
  width: 640,
  height: 480
})

camera.pan(3, 1)
console.dir(camera.getMatrix())

camera.scale(2)
console.dir(camera.getMatrix())

camera.rotate(Math.PI / 2)
console.dir(camera.getMatrix())

var cpy = mat3.create()
camera.getMatrix(cpy)
console.dir(cpy)

// camera.x = 12
// camera.rotation = 17
// camera.scale = 0.5
// console.dir(camera.getMatrix())

