function Plane() {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

let plane = new Plane()
let clonePlane = Object.create(plane)
console.log(JSON.stringify(clonePlane), clonePlane.blood, clonePlane.attackLevel, clonePlane.defenseLevel)
console.log(Object.getPrototypeOf(clonePlane) === plane) // true
console.log(Object.getPrototypeOf(plane) === Plane.prototype) // true