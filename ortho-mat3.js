module.exports = function (out, left, right, bottom, top) {
  var lr = 1 / (left - right)
  var bt = 1 / (bottom - top)

  out[0] = -2 * lr
  out[1] = 0
  out[2] = 0

  out[3] = 0
  out[4] = -2 * bt
  out[5] = 0

  out[6] = 0
  out[7] = 0
  out[8] = 1

  return out
}
