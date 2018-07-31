const shapeType = {
  triangle: Symbol()
}

function getArea(shape, options) {
  let area = 0
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height
      break;
    default:
      break;
  }
  return area
}

getArea(shapeType.triangle, {
  width: 100,
  height: 100
})