


//select number and append to question header
const onClick = (e) => {
    var targetBtn = e.target.id
    var targetClass = e.target.className
    var inner = document.getElementById(`${targetBtn}`).innerText
    var qNumber = document.querySelector("#questionNum")
    var check = document.querySelector("#"+`${targetBtn}`)

    if (targetClass === 'timzy') {
    qNumber.append(inner)
    check.style.backgroundColor="red"
    check.parentElement.disable = "true"
    }else{}
}
window.addEventListener('click',onClick) 






/* Function for timer */ 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        else {
          
        }
    }, 1000);
}

var timerStarter = document.getElementById("timerStarter")

timerStarter.addEventListener("click" , function () {
    var fiveMinutes = 60 * 0.25,
        display = document.querySelector('.time');
    startTimer(fiveMinutes, display);
    
});



// function to select questions
let min = document.getElementById("min");
let showQtn = document.getElementById("show");
let max = document.getElementById("max")

show.addEventListener("click", function() {
    let showMin = min.value
    let showMax = max.value
    let qNo = document.querySelector(".qNo")
    var range = (showMax - showMin)
    var rangePlus= range + 1

    for(i=0; i < rangePlus; i++){
        
        var newBtn= document.createElement("button")
        newBtn.setAttribute('class', 'timzy')
        newBtn.setAttribute('id', "q"+`${i}` )
        qNo.appendChild(newBtn)
        var y = newBtn.append(showMin++)
    }

    
})


var submit = document.getElementById("submit")
let qNo = document.querySelector(".qNo")

submit.addEventListener("click", function() {

if () {
    fetch('./questions.json')
    .then(response => response.json())
    .then(qtnData => {
      

       for(var i=`${qNo}`, l = 1; i < l; i++){
        
        var id = qtnData[i].sn
        var quest = qtnData[i].questions
        var answers = qtnData[i].answer
        var qt = document.getElementById("qt")
        var ans = document.getElementById('ans')
        qt.append(quest)
        ans.append(answers)
       }  
    })
}else {

}
})
    
