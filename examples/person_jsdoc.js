/** @type {String} */
let name = 'Alex';

/** @type {Number} */
let age = 37;

/**
 * @type {Person}
 */
let presenter = { firstName: 'Alex' };

/**
 * @param {Person} person
 * returns {String}
 */
let getPresenterName = (person) => person.firstName;

let myName = getPresenterName(presenter);


/**
 * @typedef {Object} Person
 * @property {String} firstName
 */
