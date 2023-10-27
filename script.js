let DateOfBirth;
let settingIconEl = document.querySelector("#gear");
let settingCon = document.querySelector("#settingContent");

let beforeToggleEl = document.querySelector("#beforeToggle");
let afterToggleEl = document.querySelector("#afterToggle");

let inputDob=document.querySelector("#dateinput");

let button = document.querySelector("button");


let yearEl=document.querySelector("#year");
let monthsEl=document.querySelector("#months");
let daysEl=document.querySelector("#days");
let hoursEl=document.querySelector("#hours");
let minutesEl=document.querySelector("#minutes");
let secondEl=document.querySelector("#second");



const timeToggle = () => {
    DateOfBirth=inputDob.value;
    if (DateOfBirth) {
        beforeToggleEl.classList.add("hide");
        afterToggleEl.classList.remove("hide");
        setInterval(timeUpdate,1000)
    } else {
        afterToggleEl.classList.add("hide");
        beforeToggleEl.classList.remove("hide");
        
    }
}
timeToggle();

const timeUpdate=()=>{
    let birthDate=new Date(DateOfBirth);
    let currentDate=new Date;
    let ageinmilliseconds=currentDate-birthDate;
    yearEl.innerText=Math.floor(ageinmilliseconds/(1000 * 60 * 60 * 24 * 365));
    monthsEl.innerText=Math.floor(ageinmilliseconds/(1000 * 60 * 60 * 24)%12);
    daysEl.innerText=Math.floor(ageinmilliseconds/(1000 * 60 * 60 * 24)%30);
    hoursEl.innerText=Math.floor(ageinmilliseconds/(1000 * 60 * 60)%24);
    minutesEl.innerText=Math.floor(ageinmilliseconds/(1000 * 60)%60);
    secondEl.innerText=Math.floor(ageinmilliseconds/(1000)%60);
}


button.addEventListener('click',timeToggle);

settingIconEl.addEventListener('click', function () {
    settingCon.classList.toggle('hide');

});


