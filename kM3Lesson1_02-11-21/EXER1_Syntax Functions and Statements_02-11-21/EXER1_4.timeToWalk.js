function formatTime(hours, mins, secs){
    if (secs <= 59 && secs < 10) {
        secs = `0${secs}`;
    }
    if (secs >= 60) {
        secs = secs - 60;
        mins++;
        if (sec < 10) {
            secs = `0${secs}`;
        }
    }
    if (mins <= 59 && mins < 10) {
        mins = `0${mins}`;
    }
    if (mins >= 60) {
        mins = mins - 60;
        hours++;
        if (mins < 10) {
            mins = `0${mins}`;
        }
    }
    if (hours <= 59 && hours < 10) {
        hours = `0${hours}`;
    }

    console.log(`${hours}:${mins}:${secs}`);
}

function main(NumOfSteps, footPrintLengthMeters, speedKmh) {
    let minutesBreak = Math.floor((NumOfSteps * footPrintLengthMeters) / 500);
    let speedMh = speedKmh * 1000;
    let hours = Math.floor((NumOfSteps * footPrintLengthMeters) / speedMh);
    let mins =
        minutesBreak +
        Math.floor(((NumOfSteps * footPrintLengthMeters) / speedMh) * 60);
    let secs = Math.ceil(
        ((minutesBreak +
            ((NumOfSteps * footPrintLengthMeters) / speedMh) * 60) *
            60) %
            60
    );

    formatTime(hours, mins, secs);
}

main(4000, 0.6, 5);
main(2564, 0.7, 5.5);
