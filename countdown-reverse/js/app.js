const getdays = document.querySelector('.getday'),
    gethours = document.querySelector('.gethour'),
    getminutes = document.querySelector('.getminute'),
    getseconds = document.querySelector('.getsecond'),
    getyears = document.querySelector('.getyear'),
    getmonths = document.querySelector('.getmonth');

const countdowncontainer=document.querySelector('.countdown-container'),
    loading = document.querySelector('.loading');    

// console.log(getdays,gethours,getminutes,getseconds,getyears);

// console.log(`${new Date()}`)


function updatetime(){

    let currentTime = new Date();
    let firstTime = new Date('June 2022 2 23:09:00');
    // console.log(getDays(currentTime));
    // console.log(getDays(firstTime));

    //getdatesinmonth
    function getdayinmonth(year,month){
        return new Date(year,month,0).getDate();
    }
    // console.log(getdayinmonth(2022,2));

    // console.log(getdayinmonth(firstTime.getFullYear(),firstTime.getMonth()))

    // console.log(firstTime.getFullYear(),firstTime.getMonth());
    // console.log(currentTime.getFullYear(),currentTime.getMonth());


    let diff = currentTime - firstTime;
    // console.log(diff);

    // getseconds
    let s = Math.floor(diff / 1000) % 60;
    getseconds.innerText = s < 10 ? '0'+s : s;
    if(s<2){
        getseconds.nextElementSibling.innerText = 'Second';
    }else{
        getseconds.nextElementSibling.innerText = 'Seconds';
    }

    //getminutes
    let min = Math.floor(diff / 1000 / 60) % 60;
    getminutes.innerText = min < 10 ? '0'+min : min;
    if(min<2){
        getminutes.nextElementSibling.innerText = "Minute";
    }else{
        getminutes.nextElementSibling.innerText = "Minutes";
    }

    //gethours
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    gethours.innerText = h < 10? '0'+h : h;
    if(h<2){
        gethours.nextElementSibling.innerText = 'Hour';
    }else{
        gethours.nextElementSibling.innerText = 'Hours';
    }

    //get day
    let daydiff = currentTime.getDate() - firstTime.getDate();
    if(daydiff >= 0){
        getdays.innerText = daydiff;
    }else{
        let lessthanday = getdayinmonth(currentTime.getFullYear(),currentTime.getMonth());
        console.log(lessthanday);
        console.log(currentTime.getMonth());

                //    28                1                   2
        daydiff = lessthanday + currentTime.getDate() - firstTime.getDate();
        getdays.innerText = daydiff;
    }

    let daydiffnum = parseInt(getdays.innerText);
    console.log(typeof daydiffnum,daydiffnum);
    if(daydiffnum<2){
        getdays.nextElementSibling.innerText = 'Day';
    }else{
        getdays.nextElementSibling.innerText = "Days";
    }


    //get month
    let month = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 ) % 12;
    // getmonths.innerText = month < 10 ? '0'+month : month;
    console.log(currentTime.getMonth(),firstTime.getMonth());
    let diffmonth = currentTime.getMonth() - firstTime.getMonth();
    if(diffmonth >= 0){
        getmonths.innerText = diffmonth;
    }else{
                              //12       1                      5
        getmonths.innerText = 11 + currentTime.getMonth() - firstTime.getMonth();
    }

    if(month<2){
        getmonths.nextElementSibling.innerText = 'Month';
    }else{
        getmonths.nextElementSibling.innerText = 'Months';
    }

    let year = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);
    getyears.innerText = year < 10 ? '0'+year : year;
    if(year<2){
        getyears.nextElementSibling.innerText = 'Year';
    }else{
        getyears.nextElementSibling.innerText = 'Years';
    }

}
setTimeout(()=>{
    loading.remove();
    countdowncontainer.style.display = 'flex';
},1000);

setInterval(updatetime,1000);