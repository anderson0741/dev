import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: "$40",
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: "$900",
            timeToGo: "Winter"
        }, {
            place: "China",
            price: "$1200",
            timeToGo: "Fall"
        }, {
            place: "Russia",
            price: "$1100",
            timeToGo: "Summer"
        }, {
            place: "Lebanon",
            price: "$400",
            timeToGo: "Spring"
        }
    ];
    return (
        <div>
            {vacationSpots.map(vacationSpot => 
                <ul>
                    <li>{vacationSpot.place}</li>
                    <li>{vacationSpot.price}</li>
                    <li>{vacationSpot.timeToGo}</li>
                </ul>
            )}
        </div>
    )
}



export default App;