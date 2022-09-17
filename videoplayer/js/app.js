const video = document.querySelector('.video');

const prevbtn = document.querySelector('.prev i'),
    playbtn = document.querySelector('.play i'),
    nextbtn = document.querySelector('.next i');

const progress = document.querySelector('.progress'),
    progressBar = document.querySelector('.progress-bar');

const timestamp = document.querySelector('.timestamp-text');

const text = document.querySelector('.text');

//toggle video play pause
function togglevideo(){
    if (video.paused){
        video.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
    }else{
        video.pause();
        playbtn.classList.remove('fa-pause');
        playbtn.classList.add('fa-play');
    }
}
// video.addEventListener('click',togglevideo);
playbtn.parentElement.addEventListener('click',togglevideo);

//nextvideo and prev video
let result = 0;
let videos = ['sample1','sample2','sample3','sample4'];

function nextvideo(){
    result++;
    if(result>3){
        result = 0;
    }
    video.src= `./video/${videos[result]}.mp4`;
    text.textContent =`${videos[result]}`;
    video.play();
    togglevideo;
    video.removeAttribute('poster');
}
nextbtn.parentElement.addEventListener('click',nextvideo);

function prevvideo(){
    result--;
    if(result<0){
        result=3;
    }
    video.src= `./video/${videos[result]}.mp4`;
    text.textContent =`${videos[result]}`;
    video.play();
    togglevideo;
}
prevbtn.parentElement.addEventListener('click',prevvideo);

// progressbar update
video.addEventListener('timeupdate',()=>{
    // console.log('hey');
    // console.log(video.currentTime);
    // console.log(video.duration);

    // console.log(progressBar.style.width);
    updatewidth = video.currentTime / video.duration * 100;
    progressBar.style.width = `${updatewidth}%`;
    console.log(typeof progressBar.style.width);
    
    if(progressBar.style.width === '100%'){
        console.log('hey');
        
    }
    }
);

//video currenttime
progress.addEventListener('click',(e)=>{

    console.log(progress.clientWidth);
    console.log(e.offsetX);
    // console.log(e.target.offsetX);

    video.currentTime = e.offsetX / progress.clientWidth * video.duration;
})

//fortimestamp
video.addEventListener('timeupdate',()=>{
    //for minute
    var getminute = Math.floor(video.currentTime / 60);
    // console.log(getminute);
    if(getminute<10){
        getminute = '0' + getminute;
    }
    //for second
    var getsecond = Math.floor(video.currentTime % 60);
    // console.log(getsecond);
    if(getsecond < 10){
        getsecond = '0' + getsecond;
    }

    timestamp.textContent = `${getminute}:${getsecond}`;
})

//30sec

let clicktime = 0;
let container = document.querySelector('.container');
video.addEventListener('click',(e)=>{

    if(clicktime === 0){
        clicktime = new Date().getTime();
        // console.log('hello');
    }else{
        clicktime = 0;
        // console.log('hey');
    
        let ctarget = e.target.clientWidth / 2;
        // console.log(e.offsetX);
    
        if(e.offsetX < ctarget){
            // console.log('i am left container');
            container.classList.remove('rightplay');
            container.classList.add('leftplay');
            video.currentTime -= 30;
        }else{
            // console.log('i am right container');
            container.classList.remove('leftplay');
            container.classList.add('rightplay');
            video.currentTime += 30;
        }
        console.log(container.className);
    }
    // video.play();
});