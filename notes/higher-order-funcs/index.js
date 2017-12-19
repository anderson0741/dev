var errandBoy = function(errand){
    errand();
}

function goShopping(){
    console.log("I bought some stuff");
}

function pickupDryCleaning(){
    console.log("I got the stuff");
}

function cleanToiletAtMySummerHome(){
    console.log("I did that nasty thing you wanted");
}

function fetchAndMakeCoffee(){
    console.log("Heres your coffee");
}

// errandBoy(goShopping);

function errandMaster(command){
    switch(command){
        case "I need a new doghouse":
            return goshopping;
        case "I need my suit pressed":
            return pickupDryCleaning;
        case "I want to visit my summer home":
            return cleanToiletAtMySummerHome;
        case "Im tired and grumpy":
            return fetchAndMakeCoffee;
    }
}

console.log(errandMaster("I need a new doghouse"));