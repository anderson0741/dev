// let data = [
//   {
//     firstName: "Sarah",
//     lastName: "Palin",
//     age: 47,
//     pets: ["dog", "cat"]
//   }, {
//     firstName: "Frank",
//     lastName: "Zappa",
//     age: 12,
//     pets: ["dog"]
//   }, {
//     firstName: "Rick",
//     lastName: "Sanchez",
//     age: 78,
//     pets: ["cat", "parrot"]
//   }, {
//     firstName: "Morty",
//     lastName: "Smith",
//     age: 13,
//     pets: ["cat", "parrot", "dog"]
//   }, {
//     firstName: "Kyle",
//     lastName: "Mooney",
//     age: 27,
//     pets: ["dog"]
//   }
// ];

// function sortedDogOwners(perOwners) {
//   let dogOwners = perOwners.filter((petOwner) => {
//     return petOwner.pets.includes("dog");
//   })
//   return dogOwners.sort((dogOwner1, dogOwner2)=>{
//     let age1 = dogOwner1.age;
//     let age2 = dogOwner2.age;
//     return age2 - age1;
//   })
// }

// console.log(sortedDogOwners(data));

let data = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: [
      {
        name: "Alfred",
        type: "dog",
        nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
      }, {
        name: "Charles",
        type: "cat",
        nickNames: ["Charley"]
      }, {
        name: "Bark Obama",
        type: "dog",
        nickNames: ["Barack", "Mr. President"]
      }, {
        name: "Christopher George Latore Wallace",
        type: "dog",
        nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
      }

    ]
  }, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: [
      {
        name: "Howard",
        type: "dog",
        nickNames: []
      }, {
        name: "Bear",
        type: "dog",
        nickNames: []
      }
    ]
  }, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: [
      {
        name: "Bird Person",
        type: "bird",
        nickNames: ["Phoenixperson"]
      }, {
        name: "Krombopulos Michael",
        type: "Gromflomite",
        nickNames: ["Assassin man"]
      }, {
        name: "Squanchy",
        type: "Cat-person",
        nickNames: ["Squanch", "Smarf", "Thunder Cat"]
      }

    ]
  }, {
    firstName: "Morty",
    lastName: "Smith",
    age: 23,
    pets: [
      {
        name: "Morty Jr.",
        type: "Gazorpazorp",
        nickNames: ["Gwendolyn Jr."]
      }, {
        name: "Snuffels",
        type: "dog",
        nickNames: ["Snowball"]
      }

    ]
  }
];

function checkForDogs(pets) {
  return pets.some((pet) => {
    return pet.type === "dog";
  });
}

function checkForNickName(pets) {
  return pets.every((pet) => {
    return pet.nickNames.length > 0;
  })
}

function practice(petOwners) {
  let output = petOwners.filter((petOwner) => {
    let isOver20 = petOwner.age > 20;
    let hasDogs = checkForDogs(petOwner.pets);
    let hasNickNames = checkForNickName(petOwner.pets);

    return isOver20 && hasDogs && hasNickNames;
  });
  let names = [];
  for (let i = 0; i < output.length; i++) {
    let petOwner = output[i];
    petOwner.pets.forEach((pet) => {
      names.push(`<li>${pet.name}</li>`);
    });
  }
  return names;
}

console.log(practice(data));
