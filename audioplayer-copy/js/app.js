const container=document.querySelector('.container');
const imgplayer=document.querySelector('.imgplayer');

const prevbtn = document.getElementById('prevbtn'),
    playbtn =document.getElementById('playbtn'),
    nextbtn = document.getElementById('nextbtn');

const musicinfo=document.querySelector('.music-info');
const range =document.querySelector('.range'),
    rangefluid=document.querySelector('.range-fluid');

const audio=document.getElementById('audio');

var songindex=0;
var totalsong=['audio1','audio2','audio3','audio4','audio5'];
var totalimg =['sample1','sample2','sample3','sample4','sample5'];

let audio1=["0.2"],
    audio2=["0.2"],
    audio3=["0.2"],
    audio4=["0.2"],
    audio5=["0.2"];

localStorage.setItem('audio1',JSON.stringify(audio1));         
localStorage.setItem('audio2',JSON.stringify(audio2));
localStorage.setItem('audio3',JSON.stringify(audio3));
localStorage.setItem('audio4',JSON.stringify(audio4));
localStorage.setItem('audio5',JSON.stringify(audio5));

function lastfunction(){

    switch(totalsong[songindex]){
        case 'audio1':
            audio1.push(rangefluid.style.width);
            localStorage.setItem('audio1',JSON.stringify(audio1));         
            // console.log(rangefluid.style.width);
            break;
        case 'audio2':
            audio2.push(rangefluid.style.width);
            localStorage.setItem('audio2',JSON.stringify(audio2));
            break;
        case 'audio3':
            audio3.push(rangefluid.style.width);
            localStorage.setItem('audio3',JSON.stringify(audio3));
            break;
        case 'audio4':
            audio4.push(rangefluid.style.width);
            localStorage.setItem('audio4',JSON.stringify(audio4));
            break;
        case 'audio5':
            audio5.push(rangefluid.style.width);
            localStorage.setItem('audio5',JSON.stringify(audio5));
            break;
        }

    // console.log(audio1);
    // console.log(audio2);
    // console.log(audio3);
    // console.log(audio4);
    // console.log(audio5);
};
console.log(totalsong[songindex]);
switch(totalsong[songindex]){
        case 'audio1':
            musicinfo.innerText='Perfect';
            const getaudio1 = JSON.parse(localStorage.getItem('audio1'));
            const getaudiowidth = getaudio1[getaudio1.length-1];
            const getaudiowithoutpercent = parseFloat(getaudiowidth);
            console.log(getaudiowidth);
            console.log(getaudiowithoutpercent);
            console.log(typeof getaudiowithoutpercent);
            // console.log(audio.duration);
            const finalresultone = (getaudiowithoutpercent / 100) * 263.448;
            console.log(finalresultone);
            // audio.currentTime = finalresult;
            break;
        case 'audio2':
            musicinfo.innerText='Shape Of You';
            break;
        case 'audio3':
            musicinfo.innerText='Let Her Go';
            break;
        case 'audio4':
            musicinfo.innerText='Into Your Arms';
            break;
        case 'audio5':
            musicinfo.innerText='See You Again';
    };

    console.log('hello world');

function loadingsong(){
    // console.log('hey');
    imgplayer.style.backgroundImage = `url('./img/${totalimg[songindex]}.jpg')`;
    audio.src=`./audio/${totalsong[songindex]}.mp3`;
    musicinfo.innerText = `${totalsong[songindex]}`;

    switch(totalsong[songindex]){
        case 'audio1':
            if(!localStorage.getItem('audio1')===null){
                audio.currentTime=finalresultone;
            }else{
                audio.currentTime=1;
            }
    }
};

function playsong(){
    container.classList.add('active');
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');

    // console.log(audio.currentTime);
    // console.log(audio.duration);
    // console.log(rangefluid.style.width);
    // console.log(range.style.width);
    // audio.currentTime = (rangefluid.style.width/range.style.width) * audio.duration;

    lastfunction();
    loadingsong();
    audio.play();
}
function pausesong(){
    container.classList.remove('active');
    playbtn.classList.remove('fa-pause');
    playbtn.classList.add('fa-play');

    lastfunction();
    loadingsong();
    audio.pause();
}
playbtn.addEventListener('click',()=>{
    // container.classList.toggle('active');
    const isplaying = container.classList.contains('active');
    // console.log(container.classList.contains('active'));
    // loadingsong();

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

prevbtn.addEventListener('click',()=>{
    songindex--;

    if(songindex<0){
        songindex=totalsong.length-1;
    };
    playsong();
})
nextbtn.addEventListener('click',()=>{
    songindex++;

    if(songindex>totalsong.length-1){
        songindex=0;
    }
    playsong();
});

//range and rangefluid

function forrangefluid(){
    // console.log(audio.currentTime);
    // console.log(audio.duration);

    const rangewidth = audio.currentTime/audio.duration *100;
    rangefluid.style.width =`${rangewidth}%`;
};
audio.addEventListener('timeupdate',forrangefluid);

//for musicfluid

function formusicfluid(e){
    const rangewidth = e.target.clientWidth;
    const currentwidth = e.offsetX;
    // console.log(e.target.clientWidth)

    // console.log(currentwidth);
    // console.log(e.target.offsetLeft);
    // console.log(e.target.clientLeft);

    audio.currentTime = (currentwidth / rangewidth) * audio.duration;
};
range.addEventListener('click',formusicfluid);

//time