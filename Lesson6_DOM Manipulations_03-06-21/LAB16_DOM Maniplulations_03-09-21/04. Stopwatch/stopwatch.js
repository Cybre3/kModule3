function stopwatch() {
    let id;
    let seconds = 0;
    let minutes = 0;

    const time = document.querySelector('#time');

    document.body.addEventListener('click', action);

    function action(e){
        if(e.target.id == 'startBtn'){
            id = setInterval(timer, 1000);
            e.target.setAttribute('disabled', 'true');
            e.target.nextElementSibling.removeAttribute('disabled');
        }
        if (e.target.id == 'stopBtn'){
            clearInterval(id);
            seconds = 0;
            e.target.setAttribute('disabled', 'true');
            e.target.previousElementSibling.removeAttribute('disabled');
        }
    }

    function timer (){
        if(seconds >= 59){
            seconds = 0;
            minutes++;
        } else {
            seconds++;
        }

        minutes = Number(minutes);
        seconds = Number(seconds);

        if(seconds < 10){
            seconds = '0' + seconds;
        }

        if(minutes < 10){
            minutes = '0' + minutes;
        }
    }

    time.textContent = `${minutes}:${seconds}`;
}