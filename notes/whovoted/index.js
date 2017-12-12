



var voters = [
{name:'Jake', age: 32, voted: true},
{name:'Kate', age: 25, voted: false},
{name:'Sam', age: 20, voted: false},
{name:'Phil', age: 21, voted: true},
{name:'Ed', age: 55, voted: true},
{name:'Tami', age: 54, voted: true},
{name:'Mary', age: 31, voted: false},
{name:'Becky', age: 43, voted: false},
{name:'Joey', age: 41, voted: true},
{name:'Jeff', age: 30, voted: true},
{name:'Zack', age: 19, voted: false},
];

//output will look like this:
//18-25: n%
//26-36: n%
//36-55: n%

//plan:
//1) group by age groups
//2) group by who voted
//3) calculate percentage of who voted out of the total of that group
//4) ouput to the console the result

//carry out:
var young = [];
var mid = [];
var experienced = [];

function ageSort(){
    var youngTot = 0;
    var youngVoted = 0;
    var midTot = 0;
    var midVoted = 0;
    var experiencedTot = 0;
    var experiencedVoted = 0;
    for(var i = 0; i < voters.length; i++) {
        if(voters[i].age < 26) {
            // young.push(voters[i]);
            youngTot++;
            if (voters[i].voted){
                youngVoted++;
            }
        } else if (voters[i].age < 36) {
            // mid.push(voters[i]);
            midTot++;
            if (voters[i].voted){
                midVoted++;
            }
        } else if(voters[i].age < 56){
            // experienced.push(voters[i]);
            experiencedTot++;
            if (voters[i].voted){
                experiencedVoted++;
            }
        }
    }
    console.log("18-25: " + ((youngVoted/youngTot)*100).toFixed(0) + "%");
    console.log("26-35: " + ((midVoted/midTot)*100).toFixed(0) + "%");
    console.log("36-55: " + ((experiencedVoted/experiencedTot)*100).toFixed(0) + "%");
    //below returns everybodys details
    // console.log(young);
    // console.log(mid);
    // console.log(experienced);
}
ageSort();
//makes everyones name a string
// console.log(JSON.stringify(young));

function calculatePercentage(arr){
    var total = arr.length;
    var voted = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].voted){
            voted++;
        }
    }
    return ((voted / total)*100).toFixed(0);
    //.toFixed lets you specify how many decimals you want
}

// console.log("18-25: " + calculatePercentage(young) + "%");
// console.log("26-35: " + calculatePercentage(mid) + "%");
// console.log("36-55: " + calculatePercentage(experienced) + "%");

// function pctVotersByAge(arr){

// }