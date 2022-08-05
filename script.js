
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
          timer = "Time Up"
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
    
    console.log(qtnData)

   
        
        
    })



 // data.results.map(theNews => {
    //     console.log(theNews.title);

        // let a = document.createElement("a");
        // a.setAttribute('href',theNews.url);
        // a.innerHTML = theNews.title;
        // news.appendChild(a);

    //     let b = document.createElement('img');
    //     b.setAttribute('src', theNews.multimedia[1].url);
        

    //     news.appendChild(b)
    //     news.appendChild(a)
