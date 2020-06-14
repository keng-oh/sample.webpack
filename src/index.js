import _ from 'lodash';
// import { NAME, NiJou } from './utilities';
// import * as utilities from './utilities.js';
// import { NAME as NAME_OF_KENG } from './utilities';
import Lion from './utilities';
import Tiger from './utilities';

// console.log(NiJou(43));
// console.log(NAME);
// console.log(utilities.NAME);
// console.log(NAME_OF_KENG);
console.log(Lion.say());
console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
