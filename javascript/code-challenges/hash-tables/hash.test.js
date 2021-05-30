
const LinkedList = require('./linked-list.js');
const HashMap = require('./hashmap');


let people = new HashMap(16);
people.set('Anne', 'Student');
people.set('Taylor', 'Student');
people.set('Michael', 'Student');
people.set('Mark the avenger', 'Student');
people.set('TJ', 'Student');
people.set('Jenner', 'Student');
people.set('Nassir', 'Student');
people.set('Dawit', 'Student');
people.set('Rosie', 'Dog');

describe('HashMap Tests', () => {
  it('Adds a key/value | retrieve value', () => {
    expect(people.get('Jenner')).toEqual({ Jenner: 'Student' });
  });

  it('Invalid key', () => {
    expect(people.get('Not in')).toEqual('Invalid key');
  });

  it('Hash key in range', () => {
    expect(people.hash('Max')).toBeLessThanOrEqual(16);
  });

  it('Successful collision', () => {
    let collison = people.set('Nassir', 'Student');
    expect(collison).toBeUndefined();
  });
});


