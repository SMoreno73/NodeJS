//if I want, I can unstructured the object. It's the way I can import modules in nodeJS
const { getAge, getUUID } = require("./plugins");

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
//const { buildMakePerson } = require('./js-foundation/05-factory')
const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

// token access
// Public

// ! Reference to the factory function and use
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthday: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });
