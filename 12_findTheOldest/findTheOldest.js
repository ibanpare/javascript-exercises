const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  const ages = array.map((item) => {
    if (item.yearOfDeath == undefined) item.yearOfDeath = currentYear;
    let itemAge = item.yearOfDeath - item.yearOfBirth;
    return { name: item.name, age: itemAge };
  });
  ages.sort((a, b) => b.age - a.age);
  return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;

/*

calcola anno attuale che fa sempre comodo
calcola anno di ognuno con map
sortali per più grande
ritorna più grande

      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
*/
