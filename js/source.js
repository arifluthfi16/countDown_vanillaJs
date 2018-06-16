function proses(time){
    doc = document.getElementById('form');

    var hour = doc[0].value == '' ? 0 : doc[0].value;
    var min  = doc[1].value == '' ? 0 : doc[1].value;
    var sec  = doc[2].value == '' ? 0 : doc[2].value;

    //Convert Into Seconds 
    hour = hour * 60 * 60;
    min = min * 60;
    sec = sec * 1; //This is kinda dumb but well, it fix my problem somehow
    
    // Input log
    console.log('Time Set!');
    console.log('Hour   : '+hour);
    console.log('Minute : '+min);
    console.log('Second : '+sec);

    // Set The Time
    var time = hour+min + sec;
    console.log(time);

    // Remove input display
    doc.style.display = 'none';   

    // Time countdown process
    var countDown = setInterval(function(){
        
        var hour = Math.floor(time / 3600);
        var min = Math.floor((time % 3600) / 60);
        var sec = Math.floor((time % 3600) % 60);
        console.log(hour + "h " + min + "m " + sec + "s");
        timeDis = document.getElementById('hourCount');
        timeDis.style.display = "block";
        timeDis.innerHTML = hour + "h " + min + "m " + sec + "s";

        //Stop condition
        if(time <= 0){
            clearInterval(countDown);
            console.log('Timer Stop');
            var click = false;
            timeDis.innerHTML = "<h4>Time Expired! Click To Continoue</h4>";
            var continoue = timeDis.addEventListener('mousedown', function () {
                                click = true;
                                console.log('Clicked');
                                console.log(click);
                                if (click) {
                                    doc.reset();
                                    timeDis.style.display = "none";
                                    doc.style.display = "block";
                                }
                            });
           
        }
        time--; //Reduce time by 1 second
    }, 1000);
}
