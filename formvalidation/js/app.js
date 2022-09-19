const username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    cfmpassword = document.getElementById('cfmpassword');
const form = document.querySelector('form');
// console.log(username,email,password,cfmpassword);

//Method1
// form.addEventListener('submit',(e)=>{

//     e.preventDefault();
//     if(username.value === ''){
//         showerror(username,'Username shoud not be empty');
//     }else{
//         showsuccess(username);
//         if(username.value.length > 15){
//             showerror(username,'Username should not be greater than 15');
//         }
//     }

//     if(email.value === ''){
//         showerror(email,'Email should not be empty');
//     }else if(!validateemail(email.value)){
//         showerror(email,'Should be written the right form of email')
//     }else{
//         showsuccess(email);
//     }

//     if(password.value===''){
//         showerror(password,'Password should not be empty');
//     }else{
//         showsuccess(password);
//     }

//     if(cfmpassword.value===''){
//         showerror(cfmpassword,'Password should not be empty');
//     }else if(cfmpassword.value !== password.value){
//         showerror(cfmpassword,'Password do not match');
//     }else{
//         showsuccess(cfmpassword);
//     }



// })

function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.classList.remove('success');
    formcontrol.classList.add('error');

    const span = formcontrol.querySelector('span');
    span.innerText = message;
}
function showsuccess(input){
    console.log('success')
    const formcontrol = input.parentElement;
    formcontrol.classList.remove('error');
    formcontrol.classList.add('success')
}
function validateemail(email){
    const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return re.test(String(email).toLowerCase());
}   



//Method2
//forfirstlettercapital
function getfirstletter(input){
    return input.id.charAt(0).toUpperCase() +input.id.slice(1);
}

//checklength
function checklength(input,min,max){
    if(input.value.length <min){
        showerror(input,`${getfirstletter(input)} should be greater than ${min}`);
    }else if(input.value.length > max){
        showerror(input,`${getfirstletter(input)} should be smaller than ${max}`);
    }else{
        showsuccess(input);
    }
}

//forpasswordmatch
function passwordmatch(inputone,inputtwo){
    if(inputone.value !== inputtwo.value){
        showerror(inputtwo,`Password do not match`);
    }
}

//tocheckrequired
function required(inputarrs){
    inputarrs.forEach((inputarr)=>{
        if(inputarr.value === ''){
            showerror(inputarr,`${getfirstletter(inputarr)} Should not be empty`);
        }else{
            showsuccess(inputarr);
        }
    })
}

//tocheckmail
function checkmail(mail){
    const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(re.test(mail.value)){
        showsuccess(mail);
    }else{
        showerror(mail,'Invalid Mail');
    }
}

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const formcontrols = document.querySelectorAll('.form-control')
    console.log(formcontrols);
 
    required(formcontrols);
    passwordmatch(password,cfmpassword);

    checkmail(email);

    checklength(username,2,15);


})