const collection_container = document.querySelector('.collection-container');
const collections = document.querySelectorAll('.collection');
const close_btn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const views = document.querySelectorAll('.view');
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const slideContainers = document.querySelectorAll('.slide-container');

let curidx = 0;

function showmodal(){
    modal.style.display = 'flex';
}
function closemodal(){
    modal.style.display = 'none';
}

//to show display from container
collections.forEach(function(collection,idc){

    collection.addEventListener('click',()=>{
        showmodal();

        curidx = idc;
        // console.log(curidx);
        viewdisplay();
        slideactive();

    })

})
//for viewdisplay
function viewdisplay(){
            
    views.forEach(function(view){
        view.style.display= 'none';
        views[curidx].style.display = 'block';
    })
}
//for slideactive
function slideactive(){
    // console.log(slideContainers);
    slideContainers.forEach(function(slide){
        // console.log(slide);
        // console.log(slideContainers[0]);
        slide.classList.remove('active');
        slideContainers[curidx].classList.add('active');
    })
}

//from slideactive
slideContainers.forEach(function(slide,idslide){
    slide.addEventListener('click',()=>{
        // console.log(slide,curidx);

        curidx = idslide;
        slideactive();
        viewdisplay();

    })
})

//to close modal
window.addEventListener('click',(e)=>{
    // console.log(e.target);

    if(e.target.classList.contains('modal')){
        closemodal();
    }
})

//prevbtn
prevbtn.addEventListener('click',()=>{
    // console.log('prev');

    curidx--;
    if(curidx<0){
        curidx = views.length-1;
    }
    viewdisplay();
    slideactive();
    removereactionhistory();
    removereddot();
})

prevbtn
nextbtn.addEventListener('click',()=>{
    // console.log('next')

    curidx++;
    if(curidx>views.length-1){
        curidx=0;
    }
    viewdisplay();
    slideactive();
    removereactionhistory();
    removereddot();
})

//for reaction
const reaction_container = document.querySelector('.reactions');
// console.log(reactions);
const reactions = document.querySelectorAll('.reaction');
// console.log(reactions[2]);
const reaction_history = document.querySelector('.reaction-history-container');
// console.log(reaction_history);

//for reactionhistory
reactions.forEach(function(reaction){

    // console.log(reaction);

    reaction.addEventListener('click',(e)=>{
        const idreaction =e.target.parentElement.id;

        switch(idreaction){
            case 'like':
                let likespan = document.createElement('span');
                likespan.innerHTML = `
                <i class="fa-solid fa-thumbs-up" style="color:blue;"></i>
                `
                reaction_history.appendChild(likespan);
                // console.log(reaction_history.childElementCount);
            break;
            case 'love':
                let lovespan = document.createElement('span');
                lovespan.innerHTML = `
                <i class="fa-solid fa-heart" style="color:red;"></i>
                `
                reaction_history.appendChild(lovespan);
            break;
            case 'haha':
                let hahaspan = document.createElement('span');
                hahaspan.innerHTML = `&#128516;`;
                reaction_history.appendChild(hahaspan)
            break;
            case 'sad':
                let sadspan = document.createElement('span');
                sadspan.innerHTML = `&#128542;`;
                reaction_history.appendChild(sadspan);
            break;
            case 'wow':
                let wowspan = document.createElement('span');
                wowspan.innerHTML = `&#128559;`;
                reaction_history.appendChild(wowspan);
            break;
            case 'angry':
                let angryspan = document.createElement('span');
                angryspan.innerHTML = `&#128544;`;
                reaction_history.appendChild(angryspan);
            break;
        }

        // console.log(reaction_history)
        // console.log(reaction_history.childElementCount);
        // console.log(reaction_history.firstElementChild);

        if(reaction_history.childElementCount > 5){
            reaction_history.removeChild(reaction_history.firstElementChild);
        }

        //removereddot
        let x;
        for(x=0;x<reactions.length;x++){
            reactions[x].classList.remove('active');
        }
        e.target.parentElement.classList.add('active');

        //for reaction red dot
        // console.log(e.target.parentElement)


    })
});

function removereddot(){
    reactions.forEach(function(reaction){
        reaction.classList.remove('active');
    })
}
//removereactionhistory
function removereactionhistory(){
    reaction_history.innerHTML = '';
}








