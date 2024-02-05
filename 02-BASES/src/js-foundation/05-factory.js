// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthday: birthday }) => {
    return {
      id: getUUID(),
      name: name,
      birthday: birthday,
      age: getAge(birthday),
    };
  };
};

// const obj = { name: 'John', birthday: '1985-10-21' };

// const john = buildPerson( obj );

// console.log(john);

module.exports = {
  buildMakePerson,
};
