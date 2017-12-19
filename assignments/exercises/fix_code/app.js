var myName = "John Doe";  
console.log(name);  

function movieCheck(age) {  
    if(age < 0) {
      throw "Error cannot be less than 0";
    } else if(age <= 12) {
      console.log("You can see PG movies");
    } else if(age >= 13 && age < 18) {
      console.log("You can see PG-13 movies");
    } else if(age >= 18) {
      console.log("You can see R rated movies");
    }
  }
  movieCheck(-1); 

  try{
      console.log(movieCheck(21));
  } catch(err){
      console.log(err.message);
  } finally{
      console.log("Im going to run. I dont give af")
  }