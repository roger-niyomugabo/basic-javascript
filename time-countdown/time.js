let countdown=new Date("Jan 27 2023 16:24:00").getTime();

//callback function to repeatedly calculate the time left
let myfunction=setInterval(() => {
    let now=new Date().getTime();
    let timeleft=countdown - now;

    //calculating time left
    let days=Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours=Math.floor(timeleft % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let minutes=Math.floor(timeleft % (1000 * 60 * 60)/(1000 * 60));
    let seconds=Math.floor(timeleft % (1000 * 60)/(1000));

    //displaying days, hours, minutes, seconds
    document.getElementById("count").innerHTML='COUNTDOWN:';
    document.getElementById("days").innerHTML=days + 'd ';
    document.getElementById("hours").innerHTML=hours + 'h ';
    document.getElementById("minutes").innerHTML=minutes + 'm ';
    document.getElementById("seconds").innerHTML=seconds + 's ';

    //when timeleft is 0
    if(timeleft<0){
        document.getElementById("count").innerHTML='';
        document.getElementById("days").innerHTML='';
        document.getElementById("hours").innerHTML='' ;
        document.getElementById("minutes").innerHTML='';
        document.getElementById("seconds").innerHTML='';
        document.getElementById("end").innerHTML="Oops! TIME IS UP.";
    }
}, 1000);