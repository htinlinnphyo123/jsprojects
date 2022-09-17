const getdays = document.querySelector('.getday'),
    gethours = document.querySelector('.gethour'),
    getminutes = document.querySelector('.getminute'),
    getseconds = document.querySelector('.getsecond'),
    getyears = document.querySelector('.getyear');

const countdowncontainer=document.querySelector('.countdown-container'),
    loading = document.querySelector('.loading');    

// console.log(getdays,gethours,getminutes,getseconds,getyears);

let currentyear = new Date().getFullYear();
getyears.innerText = `${currentyear + 1}`

// console.log(`${new Date()}`)


function updatetime(){

    let getcurrentyear = new Date();
    let getnextyear = new Date(`Jan 01 ${currentyear+1} 00:00:00`);

    let diff = getnextyear - getcurrentyear;
    // console.log(diff);

    const s = Math.floor(diff / 1000) % 60;
    getseconds.innerText = s < 10 ? '0'+s : s ;

    const m = Math.floor(diff / 1000 / 60) % 60;
    getminutes.innerText = m < 10? '0'+m : m;

    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    gethours.innerText = h < 10 ? '0'+h : h;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    getdays.innerText = d < 10 ? '0' + d : d;

}

setTimeout(()=>{
    loading.remove();
    countdowncontainer.style.display = 'flex';
},2000);

setInterval(updatetime,1000);

