import {firstName, lastName, year} from './profile';
import {firstName2 as otherFirstName} from './profile';

import 'lodash';//import语句可以执行所加载的模块，但是不输入任何值
import _ from 'lodash';
import _, {each, each as forEach} from 'lodash';

import {area, circumference} from './circle';
import * as circle from './circle';
import customName from './export-default';

function setName(element) {
  element.textContent = `${firstName} ${lastName} ${year}`;
}

function setName2(element) {
  element.textContent = `${otherFirstName}`;
}

console.log(`area: ${area(4)}`);
console.log(`circumference: ${circumference(4)}`);

console.log(`area: ${circle.area(4)}`);
console.log(`circumference: ${circle.circumference(4)}`);

customName();