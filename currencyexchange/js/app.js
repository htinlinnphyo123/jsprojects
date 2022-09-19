const cucroneel = document.querySelector('.cuoneselect'),
    cucrtwoel = document.querySelector('.cutwoselect');

const inputoneel = document.querySelector('.cuinone'),
    inputtwoel = document.querySelector('.cuintwo');

const swaptext = document.querySelector('.swaptext');
// console.log(cucroneel.value);
// console.log(cucrtwoel.value);

// console.log(inputoneel.value);
// console.log(inputtwoel.innerText);


function calculate(){

    const cucrone = cucroneel.value;
    const cucrtwo = cucrtwoel.value;

    const inputone = inputoneel.value;
    const inputtwo = inputtwoel.value;

    var myHeaders = new Headers();
    myHeaders.append("apikey", "HOW7gsULwxM5OD2pBoj47o4EBXwCCKW5");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(`https://api.apilayer.com/currency_data/convert?to=${cucrtwo}&from=${cucrone}&amount=${inputone}`, requestOptions)
    .then(res=>res.json())
    .then(ans=>{
        console.log(ans);
        if(inputone>0){
            inputtwoel.value = ans.result.toFixed(2);
            let swap = (ans.result / inputone).toFixed(4);
            swaptext.innerText = `1${cucrone} = ${swap}${cucrtwo}`;
        }else{
            console.log('hey');            
        }

    })
}
inputoneel.addEventListener('input',calculate);
inputtwoel.addEventListener('input',calculate);
cucroneel.addEventListener('change',calculate);
cucrtwoel.addEventListener('change',calculate);


const swapbtn = document.querySelector('.swapbtn');
swapbtn.addEventListener('click',()=>{
    // console.log('hah')

    let temp = cucroneel.value;
    cucroneel.value = cucrtwoel.value;
    cucrtwoel.value = temp;

    calculate()

});



