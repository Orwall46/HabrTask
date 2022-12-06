$( document ).ready(function() {
    var s = `<span class="step"></span>`
    for (i = 0; i < len; i++){
            $('#s').append('<span class="step"></span>');
        }
    activateTimer(time_end)
})
var currentTab = 0;
var errors = 0;
showTab(currentTab);
const timerBox = document.getElementById('timer-box')

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        for (i = 1; i < len; i++){
            x[n+i].style.display = "none";
        }
    document.getElementById("prevBtn").style.display = "none";
    } else {
    document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Подтвердить";
    } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("addForm").submit();
    }
    showTab(currentTab);
}

function validateForm() {
    errors = 0
    var x, y, i = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByClassName("inp-div");
    if (errors == 0) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    if(errors > 0){
        return false
    }else{
        return true
    }
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    }
}

const activateTimer = (time) => {
    if (time.toString().length < 2) {
        timerBox.innerHTML = `<b>0${time}:00</b>`
    } else {
        timerBox.innerHTML = `<b>${time}:00</b>`
    }

    let minutes = time - 1
    let seconds = 60
    let displaySeconds
    let displayMinutes

    const timer = setInterval(()=>{
        seconds --
        if (seconds < 0) {
            seconds = 59
            minutes --
        }
        if (minutes.toString().length < 2) {
            displayMinutes = '0'+minutes
        } else {
            displayMinutes = minutes
        }
        if(seconds.toString().length < 2) {
            displaySeconds = '0' + seconds
        } else {
            displaySeconds = seconds
        }
        if (minutes === 0 && seconds === 0) {
            timerBox.innerHTML = "<b>00:00</b>"
            setTimeout(()=>{
                clearInterval(timer)
                alert('Time over')
                document.getElementById("addForm").submit();
            }, 500)
        }

        timerBox.innerHTML = `<b>${displayMinutes}:${displaySeconds}</b>`
    }, 1000)
}
