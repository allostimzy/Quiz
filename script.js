
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

window.onload = function () {
    var fiveMinutes = 60 * 0.25,
        display = document.querySelector('.time');
    startTimer(fiveMinutes, display);
};



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
        newBtn.setAttribute('id', "q"+`${i}`)
        qNo.appendChild(newBtn)
        var y = newBtn.append(showMin++)
    }
    
})




fetch('./questions.json')
.then(response => response.json())
.then(qtnData => {
    
   for(var i=`${inner}`; i < 1; i++){
    
    var idd = qtnData[2].sn
    var quest = qtnData[(i)].questions
    var answers = qtnData[2].answer
    console.log(quest)
    
   }
    
     
    })


//select number and append to question header
const onClick = (e) => {
    var targetBtn = e.target.id
    var inner = document.getElementById(`${targetBtn}`).innerText
    let qNumber = document.querySelector("#questionNum")

    qNumber.append(inner)
    
}
window.addEventListener('click',onClick)

   
