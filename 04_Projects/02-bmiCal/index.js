const uw = "You are Underweight";
const nrml = "You are Normal";
const ow = "You are Overweight";

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if (h === '' || w === '' || h < 0 || w < 0 || isNaN(h) || isNaN(w)){
        result.textContent = "Please give a valid Height or Weight";
    }else{
        let bmi = w/(h*h);

        if (bmi < 18.6)
            result.textContent = `${bmi}: ${uw}`;
        else if (bmi >= 18.6 && bmi < 24.9)
            result.textContent = `${bmi}: ${nrml}`;
        else
            result.textContent = `${bmi}: ${ow}`;
    }

    
});