'use strict';

function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter((bird) => {
    return geese.every((goose) => {
      return bird !== goose;
    });
  });
  // return an array containing all of the strings in the input array except those that match strings in geese
}

console.log(gooseFilter(['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish']));
