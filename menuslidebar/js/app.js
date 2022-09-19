const togglebtn = document.querySelector('.togglebtn');
const toggleclosebtn = document.querySelector('.closenavbar');

//opentoggle
togglebtn.addEventListener('click',()=>{
    // console.log('hey');
    document.body.classList.toggle('active');
})

//close toggle
toggleclosebtn.addEventListener('click',()=>{
    document.body.classList.remove('active');
})


//openmodal
const signupbtn = document.querySelector('.signupbtn');
signupbtn.addEventListener('click',()=>{
    document.body.classList.add('modalactive');
})
//closemodal
const closemodalbtn = document.querySelector('.closemodal');
closemodalbtn.addEventListener('click',()=>{
    document.body.classList.remove('modalactive');
})