class Player {
    constructor(name) {
        this.name = name;
        this.namePicked = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.namePicked = namePicked;
    }
    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
    }
    gotPowerUp() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
        }
    }
    addCoin() {
        this.totalCoins++;
        if (this.totalCoins === 15) {
            this.gameActive = false;
        }
    }
    print() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

function rand() {
    return Math.floor(Math.random() * 3)
}

let colton = new Player("Colton");
colton.setName("Luigi");
// colton.print();

while (colton.gameActive) {
    switch (rand()) {
        case 0:
            colton.gotHit();
            break;
        case 1:
            colton.gotPowerUp();
            break;
        case 2:
            colton.addCoin();
    }
    colton.print();
}

if (colton.status == "Dead") {
    console.log("YOU LOST");
} else {
    console.log("YOU WIN!!")
}
// let obj = {
//     key: "value",
//     key2: "value2",
//     key3: "value3",
// }

// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }