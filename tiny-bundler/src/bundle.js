const path = require('path');
const fs = require('fs');

const functionWrapper = [
  'function(require, module, exports) {',
  '}',
];

const boiler = fs.readFileSync(path.resolve(__dirname, 'index.bundle.boilerplate'), 'utf-8');
const target = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');
const result = functionWrapper[0] + target + functionWrapper[1];
const content = boiler.replace('/* template-module-list */', result);

fs.writeFileSync(path.resolve(__dirname, '../dist/index.bundle.js'), content, 'utf-8');