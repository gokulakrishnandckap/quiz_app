//questions for the quiz
const questions = [{
    id: 1,
    text: "1. Solve 3 + 6( 5 + 4)/3 - 7?",
    key: "14",
    ans: [{ text: "11" },
    { text: "14" },
    { text: "15" },
    { text: "16" }]
},
{
    id: 2,
    text: "2.Who is the prime minister of india?",
    key: "Modi",
    ans: [{ text: "Man mohan sigh" },
    { text: "Modi" },
    { text: "malliagrjun" },
    { text: "jeeva" }
    ]
},
{
    id: 3,
    text: "3.Which is the district of kolkata?",
    key: "west bengal",
    ans: [{ text: "Chennai" },
    { text: "Orrisa" },
    { text: "Thirvandram" },
    { text: "west bengal" }
    ]
},
{
    id: 4,
    text: "4.60 Times of 8 Equals to?",
    key: "480",
    ans: [{ text: "480"},
    { text: "300"},
    { text: "240"},
    { text: "360" }
    ]
},
{
    id: 5,
    text: "5.css stands for?",
    key: "casade styling sheet",
    ans: [{ text: "casade styling sheet" },
    { text: "casade sheet style" },
    { text: "casade structure sheet" },
    { text: "casade styling structure" }
    ]
},
{
    id: 6,
    text: "6.Look at this series: 36, 34, 30, 28, …, 22 What number should come to fill in the blank space?",
    key: "24",
    ans: [{ text: "25" },
    { text: "24" },
    { text: "26" },
    { text: "None" }
    ]
},
{
    id: 7,
    text: "7.Which of the following methods can be used to display data in some form using Javascript?",
    key: "All the above",
    ans: [{ text: "document.write()" },
    { text: "windoe.alert()" },
    { text: "console.log()" },
    { text: "All the above" }
    ]
},
{
    id: 8,
    text: "8.Which of the following is used in pencils?",
    key: "Graphite",
    ans: [{ text: "Silicon" },
    { text: "Graphite" },
    { text: "Charcoal" },
    { text: "Phosphorous" }
    ]
},
{
    id: 9,
    text: "9.Who is the mr.ipl?",
    key: "Raina",
    ans: [{ text: "Dhoni" },
    { text: "virat" },
    { text: "Raina" },
    { text: "Hardik" }
    ]
},
{
    id: 10,
    text: "10.Which year india has got the first world cup?",
    key: "1983",
    ans: [{ text: "1981" },
    { text: "1987" },
    { text: "1983" },
    { text: "1985" }
    ]
}
]

//Targeting the needed HTMl tags
const p = document.querySelector("p")
const h1 = document.querySelector("h1")
const submit = document.querySelector(".submit")
const btn = document.querySelectorAll(".btn")
const container1 = document.querySelector(".container1")
const main = document.querySelector(".main")
const next = document.querySelector(".next")
const answer = document.querySelector(".answer")
const count = document.querySelector(".count")
const start = document.querySelector(".start")
const submit1 = document.querySelector(".submit1")
const watch = document.querySelector(".watch")
const evalate = document.querySelector(".evalate")
const marks = document.querySelector(".marks")
const body = document.querySelector("body")

//using increment method for countssers
countssers = 0


//Assinging the default questions and optins in the HMTL
function validation(counts) {
    p.innerText = questions[counts].text
    document.querySelector("#btn1").innerText = questions[counts].ans[0].text
    document.querySelector("#btn2").innerText = questions[counts].ans[1].text
    document.querySelector("#btn3").innerText = questions[counts].ans[2].text
    document.querySelector("#btn4").innerText = questions[counts].ans[3].text
}

//next button for redirect to the next questions
next.addEventListener("click", () => {
    values = 1
    for (let c = 0; c < btn.length; c++) {
        btn[c].style.background = "";
    }
    countssers++
    if (countssers > questions.length - 1) {
        countssers = 0
    }
    if (countssers == questions.length - 1) {
        next.style.display = "none"
        submit.style.display = "block"
    }
    validation(countssers)
})


let total = 0;
//start button for start the quiz
start.addEventListener("click", () => {
    count.style.display = "block"
    watch.style.display = "block"
    display()
    start.style.display = "none"
})

let vall = 1


let values = 1;
//looping the all options buttons
for (let x = 0; x < btn.length; x++) {
    btn[x].addEventListener("click", (e) => {

        let tar = e.target
        let vall = values++;
        if (vall == 1) {
            if (tar.innerText== questions[countssers].key) {
                tar.style.background = "green"
                total++
            }
            else {
                tar.style.background = "red"
            }
        }
    })
}

let counts = 3
//display function for timer
function display() {
    let myinterval = setInterval(function add() {
        count.innerText = counts--
        if (counts == -1) {
            displayAlerts()
            timeOut()
            clearInterval(myinterval)
        }
    }, 700)
}


function displayAlerts() {
    count.style.display = "none"
    main.style.display = "block"
    p.innerText = questions[0].text
    btn[0].innerText = questions[0].ans[0].text
    btn[1].innerText = questions[0].ans[1].text
    btn[2].innerText = questions[0].ans[2].text
    btn[3].innerText = questions[0].ans[3].text
    start.style.display = "none"

}




let intervalId = null;
//timeout function is used for to starting the timer
function timeOut() {
    if(!intervalId) intervalId = setInterval(startss,1000)
}

//stop function for stop the timer
function stop() {
    clearInterval(intervalId)
    intervalId = null
}

counting = 60;
minute = 1;
//startss function for start the timer
function startss() {
        counting--
        second = counting;
        if (counting == 0) {
            counting = 60
            second = 0
            minute--
        }

        let newS = (second < 10) ? "0" + second : second
        let newM = (minute < 10) ? "0" + minute : minute

        watch.innerText = `${newM} : ${newS}`
        if (newM == 0 && newS == 1) {
            clearInterval(intervalId)
            main.style.display = "none"
            h1.innerText = "Quiz Completed"
            marks.innerText = total++;
            evalate.style.display = "block"
            minute = 1
        }
        if (newM == 0 && newS == 30) {
            watch.style.color = "red"
        }
  
}

//submit button for quiz submission
submit.addEventListener("click", () => {
    main.style.display = "none"
    marks.innerText = total++;
    h1.innerText = "Quiz Completed"
    evalate.style.display = "block"
    body.style.background = "url(quizf.gif)"
    stop();
})


