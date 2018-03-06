const isLib = require('is')
const { resolve } = require('path')

const location = resolve(
  __dirname,
  '../../src/typings.d.ts'
)

isLib.is(
  'init',
   location
)

expect.extend({
  is(received, argument) {
    const pass = isLib.is(received, argument);
    if (pass) {
      return {
        message: () =>
          `expected ${received} to have typing '${argument}'`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to not have typing '${argument}'`,
        pass: false,
      };
    }
  },
  isx(received, argument) {
    const pass = isLib.isx(received, argument);
    if (pass) {
      return {
        message: () =>
          `expected ${received} to have typing '${argument}'`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to not have typing '${argument}'`,
        pass: false,
      };
    }
  }
})