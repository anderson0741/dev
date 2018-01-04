//seperate all the words into an array;
// loop through the array
// for each string, check if it appears elsewhere in the array;
// if so, check if its not already in output array, and push it there

let matchWords = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ");
    // console.log(arr);
    for(let i = 0; i < arr.length; i++){
        let currentWord = arr.splice(i, 1)[0];
        // console.log(arr);
        currentWord = currentWord.replace(/[^\w]/g, "");
        for(let j = 0; j < arr.length; j++) {
            let checkAgainst = arr[j].replace(/[^\w]/g, "");
            if(currentWord === checkAgainst && !output.includes(arr[j])){
                output.push(currentWord);
                arr.splice(j, 1);
            }
        }
    }
    return output
}



console.log(matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."));
// console.log(output)