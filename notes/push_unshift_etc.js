let necklace = [];

necklace.unshift("1 clear bead");
necklace.push("2 red bead");
necklace.push("3 blue bead");
necklace.push("4 purple bead");
necklace.unshift("5 clear bead");
necklace.push("6 red bead");
necklace.push("7 blue bead");
necklace.push("8 purple bead");
necklace.unshift("9 clear bead");
necklace.push("10 clear bead");
necklace.push("11 red bead");
necklace.push("12 blue bead");
necklace.push("13 purple bead");
necklace.unshift("14 clear bead");
// .unshift Adds one or more elements to the beginning of an array and returns the new length of the array.
necklace.slice(0,1);
// .slice does non destructive ish

// necklace.splice(0, 1);
// necklace.splice(1, 1);
// .splice removes the items you want, first number is start, second is how many to cut out

for(var i = 0; i < necklace.length; i++){
    console.log(necklace[i]);
}
// necklace.pop();
// .pop removes the last one 

// necklace.shift();
// .shift adds stuff to the beginning 
