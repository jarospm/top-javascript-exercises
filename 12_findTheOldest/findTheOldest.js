const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest);
      const currentAge = getAge(currentPerson);
      
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function(person) {
    // If yearOfDeath is undefined, use current year
    const endYear = person.yearOfDeath || new Date().getFullYear();
    return endYear - person.yearOfBirth;
  };

// Do not edit below this line
module.exports = findTheOldest;
