var createCamera = require('./index')
var mat3 = require('gl-mat3')

var camera = createCamera({
  width: 640,
  height: 480
})

camera.setTranslation(3, 1)
console.dir(camera.getMatrix())

camera.setScale(2)
console.dir(camera.getMatrix())

camera.setRotation(Math.PI / 2)
console.dir(camera.getMatrix())

var cpy = mat3.create()
camera.getMatrix(cpy)
console.dir(cpy)
