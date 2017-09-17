import {area, circumference} from './circle'
import * as circle from './circle'
import customName from './export-default'

console.log(`area: ${area(4)}`)
console.log(`circumference: ${circumference(4)}`)

console.log(`area: ${circle.area(4)}`)
console.log(`circumference: ${circle.circumference(4)}`)

customName()