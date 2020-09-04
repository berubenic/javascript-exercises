let findTheOldest = function (people) {
  for (i = 0; i < people.length; i++) {
    if (people[i].hasOwnProperty("yearOfDeath") === false) {
      let d = new Date();
      people[i].yearOfDeath = d.getFullYear();
    }
  }

  const oldest = people.sort(function (a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });

  return oldest[0];
};

module.exports = findTheOldest;
