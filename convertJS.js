var jsToCss = require('./index.js')
const js = require('./Object.js');
const fs = require('fs');

const css = jsToCss(js);

try {
  fs.writeFileSync('style.css', css);
} catch (err) {
  console.error(err);
}


// const convertCamelCaseToDashes = (str, prefix = '') => {
//     let s = [...str];
//     s.map((l, i) => {
//       if (l === l.toUpperCase() && isNaN(l)) {
//         s[i] = '-' + l.toLowerCase();
//       }
//     });
//     return `${prefix ? `${prefix}-` : ''}${s.join('')}`;
//   };
  
//   // Poor man's “Object.fromString()” 😅
//   const createObjectFromString = (str) => {
//     // return eval(`(function () { return ${str}; })()`);
//     const fn = new Function(`return ${str};`);
//     return fn();
//   }
  
//   const isObject = (variable) => {
//     return Object.prototype.toString.call(variable) === '[object Object]';
//   };
  
//   const convertObjectToCustomPropertiesObject = (obj, prefix = '') => {
//     const toReturn = {};
    
//     Object.entries(obj).map(([key, value]) => {
//       const customPropertyName = convertCamelCaseToDashes(key, prefix);
//       if (isObject(value)) {
//         const flattenedValues = convertObjectToCustomPropertiesObject(value, customPropertyName);
//         Object.entries(flattenedValues).map(([fCustomPropertyName, fValue]) => {
//           toReturn[`${fCustomPropertyName}`] = fValue;
//         });
//       } else {
//         toReturn[`--${customPropertyName}`] = value;
//       }
//     });
    
//     return toReturn;
//   }
  
//   const convertObjectToCustomPropertiesString = (obj, prefix = '') => {
//     let toReturn = '';
  
//     const asObject = convertObjectToCustomPropertiesObject(obj, prefix);
    
//     for (let [key, value] of Object.entries(asObject)) {
//         toReturn += `${key}: ${value};
//   `;
//       }
    
//     return toReturn.trim();
//   }
  
  
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
        
//     try {
//       const input = createObjectFromString(document.querySelector('#input').value);
//       const output = convertObjectToCustomPropertiesString(input);
//       document.querySelector('output').innerHTML = output;
//     } catch (e) {
//       console.log(e);