var mat3 = require('gl-mat3')
var vec2 = require('gl-vec2')
var orthoMat3 = require('./ortho-mat3')

module.exports = function (opts) {
  var width = opts.width || 1
  var height = opts.height || 1

  var matrix = mat3.create()
  var scratchVector = vec2.create()

  // set to orthographic view
  orthoMat3(matrix, 0, width, height, 0)

  this.pan = function (dx, dy) {
    vec2.set(scratchVector, dx, dy)
    mat3.translate(matrix, matrix, scratchVector)
  }

  this.scale = function (scl) {
    vec2.set(scratchVector, scl, scl)
    mat3.scale(matrix, matrix, scratchVector)
  }

  this.rotate = function (radians) {
    mat3.rotate(matrix, matrix, radians)
  }

  this.getMatrix = function (out) {
    if (!out) {
      return mat3.clone(matrix)
    } else {
      return mat3.copy(out, matrix)
    }
  }

  return this
}
