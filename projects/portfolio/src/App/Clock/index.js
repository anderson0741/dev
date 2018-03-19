import React, { Component } from 'react'
// import Clock_Shot from '../ShrunkPix/Clock.png';
import '../level_up/NextLast.css';
import './clock.css';

const timeInDays = 1.25;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInDays * 24 * 60 * 60 * 1000);

const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}

const initializeClock = (endtime) => {
    let clockDays = document.getElementById("days");
    let clockHours = document.getElementById("hours");
    let clockMinutes = document.getElementById("minutes");
    let clockSeconds = document.getElementById("seconds");
    let timeinterval = setInterval(function () {
        let t = getTimeRemaining(endtime);
        clockDays.innerHTML = ('0' + t.days).slice(-2);
        clockHours.innerHTML = ('0' + t.hours).slice(-2);
        clockMinutes.innerHTML = ('0' + t.minutes).slice(-2);
        clockSeconds.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            alert("Merry Christmas!!");
        }
    }, 1000);
}


initializeClock(deadline);

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }
    render() {
        let { clockDays, clockHours, clockMinutes, clockSeconds } = this.state;
        return (
            <div className="clock-wrapper">
                <div className="next_last">
                    <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
                </div>
                <h1 class="doomsday">Count Down Clock</h1>
                <div id="clock">
                    <div class="border border_day">Days</div>
                    <div id="days" class="border"></div>
                    <div class="border border_hours">Hours</div>
                    <div id="hours" class="border"></div>
                    <div class="border border_min">Minutes</div>
                    <div id="minutes" class="border"></div>
                    <div class="border">Seconds</div>
                    <div id="seconds" class="border"></div>
                </div>
                <div className="next_last">
                    <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
                </div>
            </div>
        )
    }
}

// 


    // )
// }
// function Clock() {
//      return (
// export default Clock
    // < div className = "contact_parent levelHome_parent" >
    //     <div className="disclaimer">
    //         <h3>The following are screenshots from Level Up Auto</h3>
    //     </div>
    //     <div className="next_last">
    //         <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
    //     </div>
    //     <div class="addresses">
    //         <img className='contact_shot' src={Clock_Shot} alt="" />
    //     </div>
    //     <div className="next_last">
    //         <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
    //     </div>
    // </div >