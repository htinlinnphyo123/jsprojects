const form=document.querySelector('form');

const bubbleinput = document.querySelector('.bubbleinputs');
const terms = document.querySelector('.years')
const loading = document.getElementById('loading');
const result = document.getElementById('result');

bubbleinput.addEventListener('input',()=>{
    let val = bubbleinput.value;
    terms.innerText = val > 1? val + ' Months' : val + ' Month';
})


form.addEventListener('submit',((e)=>{

    loading.style.display="block";

    result.style.display='none';

    setTimeout(calculate,2000)

    e.preventDefault();
}))


function calculate(){

    const totalamountel = document.getElementById('totalamount'),
        interestel = document.getElementById('interest');

    const totalamount = parseFloat(totalamountel.value);
    const interest = parseFloat(interestel.value);
    const rangevalue = bubbleinput.value;

    // console.log(typeof totalamount,interest,rangevalue);

    let monthlypayment = document.getElementById('monthlypayment'),
        totalinterest = document.getElementById('totalinterest'),
        totalpayment = document.getElementById('totalpayment');

    // console.log(monthlypayment,totalinterest,totalpayment);

    //calculate

    let monthlyinteest = totalamount * (interest / 100) / 12 ;
    
    caltotalinterest = monthlyinteest * rangevalue;


    if(caltotalinterest){
        totalinterest.value = caltotalinterest.toFixed(2);

        totalpayment.value = (totalamount + caltotalinterest).toFixed(2) ;

        monthlypayment.value = (totalpayment.value / rangevalue).toFixed(2);
        
        loading.style.display = 'none';
        result.style.display = 'block'
    }else{
        showerror('Fill in all blanks');
    }
}


function showerror(message){

    loading.style.display = 'none';

    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode(message));
    console.log(div);

    const heading = document.getElementById('heading');
    const card = document.querySelector('.card');
    card.insertBefore(div,heading);

    setTimeout(cleardiv,2000);

};  

function cleardiv(div){
    document.querySelector('.alert').remove();
}