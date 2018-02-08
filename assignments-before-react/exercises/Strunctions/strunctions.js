// concat
// 1
// var dresser = {
//     top: ["Shirts", "undershirts"],
//     mid: ["socks", "shoes"],
//     bottom: ["pants", "pantelones"],
// }

// console.log(dresser.bottom.concat());

// 2 

// var threeBoxes = {
//     first: "a cat",
//     second: "a dog",
//     third: "nothing"
// }

// console.log(threeBoxes.second.concat());

// 3 

// var three = {
//     zero: "one",
//     one: "two",
//     two: "three"
// }

// console.log(three.two.concat());

// indexOf
// 1
// var str = "first example";
// var theIndex = str.indexOf("e");
// console.log(theIndex);

// 2
// var str = "a sentence that uses or makes use of a lot of words that combine to one long run on sentence";
// var indexForLetters = str.indexOf("that")

// console.log(indexForLetters);

// 3
// var str = "Welcome to Your state here";
// var indexForState = str.indexOf("Y", 5)

// console.log(indexForState);

// lastIndexOf
// 1
// var str = "Words that make people feel important";
// var importanceYep = str.lastIndexOf("t");

// console.log(importanceYep);

// 2 
// var str = "words that dont include the last letter of the alphabet";
// var doesNotHaveZ = str.lastIndexOf("z");

// console.log(doesNotHaveZ)

// 3
// var str = "last example for lastOfIndex";
// var doneIndex = str.lastIndexOf("a", 3)

// console.log(doneIndex);

//match
// 1


// var matchRegex = function(inputStr, pattern){
//     return inputStr.match(pattern);
// }
// console.log(matchRegex("juan", /Juan/));

// 2

// var matchRegex = function(inputStr, pattern){
//     return inputStr.match(pattern);
// }
// console.log(matchRegex("Juan", /Juan/));

// 3

// var matchRegex = function(inputStr, pattern){
//     return inputStr.match(pattern);
// }
// console.log(matchRegex("juan", /u/));

// replace
// 1
// var rep = "Germany!";
// var replacing = /Germany/g;
// var result = rep.replace(replacing, "USA");

// console.log(result);

// 2
// var rep = "the batter hit the ball with the bat";   
// var ridThis = /ball/g;  
// var result = rep.replace(ridThis, "fence");  
// console.log(result); 

//3
// var original = "the rain in spain falls mainly on the plane";
// var theChanged = /spain/g;
// var theFinal = original.replace(theChanged, "portugal");
// console.log(theFinal);

// slice 
// 1
// var str = 'ajnfknakljvngajkngasecretalkmflakmf';  
// var mssg = str.slice(19,25);  
// console.log(mssg);

// 2
// var str = 'the rain in somewhere';
// var rain = str.slice(4,8);
// console.log(rain);

// 3

// split 
// 1
// var bop = 'hello I am john, I am a real human being, which is something a lizardman wouldnt say';  
// var first = bop.split(' ');  
// var second = bop.split(','); 
// var third = bop.split(''); 

// console.log(first); 
// console.log(second);
// console.log(third);



// .toLowerCase()
// 1
// var str ="LOWERCASEWORDS";
// var low = str.toLowerCase();
// console.log(low);

// 2
// var str = "STOP THE SCREAMING";
// var quiet = str.toLowerCase();
// console.log(quiet);

// 3 
// var str = "YAYAYAAYA";
// var yaya = str.toLowerCase();
// console.log(yaya);

// .toUpperCase()
// 1
// var rts = "loud noises";
// var toMakeLoud = rts.toUpperCase();
// console.log(toMakeLoud);

// // 2
// var det = "stop yelling";
// var shutUp = det.toUpperCase();
// console.log(shutUp);

// // 3
// var bop = 'we heard you the first thirty times';
// var shhh = bop.toUpperCase();
// console.log(shhh);

// .substr()
// 1
// var substr1 = function(str1) {
//     return str1.substr(2, 3);
// }

// console.log(substr1("a lot of unique words"));

// var words = function(num2) {
//     return num2.substr(4,9);
// }
// console.log(words("the sentence has an end"));


// var spanish =  function(num3) {
//     return num3.substr(2,2)
// }

// console.log(spanish("que?"));