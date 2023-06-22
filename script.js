const button = document.querySelector("#btn");
let buttonState = false;

button.addEventListener('click', pressButton);

function pressButton(){
    if(buttonState === true){
        document.querySelector("#music").pause();
        buttonState = false;
        document.querySelector("#btn").textContent = "Start Timer";
    }
    else{
        document.querySelector("#music").play();
        buttonState = true;
        document.querySelector("#btn").textContent = "Stop Timer";

    }
}


let input = document.querySelector("#time").value;
let amountTime = input*60;
let minutes = 0;
let seconds = 0;
let firstTimeButton = true;

let timerId = setInterval(calculateTime,1000)

function calculateTime()
{
    if ( buttonState === false )
    {
        if (firstTimeButton === true)
        {
            input = document.querySelector("#time").value;
            amountTime = input*60;
        }
    }

    const countdown = document.querySelector("#timer");
    
    if (buttonState === true)
    {
        minutes = Math.floor(amountTime/60);
        seconds = amountTime%60;
        firstTimeButton = false;

        if (seconds<10)
        {
            seconds="0" + seconds;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        amountTime--;

        if(amountTime<0)
        {
            stopTimer();
            amountTime=0;
        }
    }

    function stopTimer()
    {
        clearInterval(timerId);
    }


}

