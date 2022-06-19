var addPx = require('add-px-to-style')
var hyphenate = require('hyphenate-style-name')

const isObject = (variable) => Object.prototype.toString.call(variable) === '[object Object]';

module.exports = function createMarkup(obj, className = '') {
  return createClass(className, obj)
}

// let times = 1;

function createClass(className, rulesObject, parent = '') {

  let css = ''
  let childClasses = ''

  // console.log('\n*******\nTurn: ' + times)
  // times++
  // console.log(className)
  // console.log(rulesObject)
  // console.log('Starting execution...\n*******\n')

  // If there are no rules go back
  var ruleList = Object.keys(rulesObject)

  if (!ruleList.length) {
    return ''
  }
  else {
    // find class the create classes and add to css
    if(className == '') {
      const classNames = Object.keys(rulesObject)
      for (var i = 0; i < classNames.length; i++) {
        css += createClass(classNames[i], rulesObject[classNames[i]])
      }
    }
    // create class add to css
    else {
      // class has a parent
      if(className[0] == '&') {
        className = className.replace(/&/ig, '.' + parent);
        className = className.substring(1)
      }
      // class don't have a parent
      
      css = '.' + className + '{'
      for (var i = 0; i < ruleList.length; i++) {
        var rule = ruleList[i]
        var value = rulesObject[rule]

        // Create a class alongwith parent name
        if(isObject(value)) {
          childClasses += createClass(rule, value, className)
        }
        else {
          css += hyphenate(rule) + ':' + addPx(rule, value) + ';'
        }
      }
      css += '}'
    }
  }

  css += childClasses;

  // console.log('\n***************\n')
  // console.log('CSS GENERATED IN TURN ' + times)
  // console.log(css)
  // console.log('\n***************\n')
  return css;
}
