function CalculoIMC() {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    const calculofinal = 0;
    
    
    function recebeEventoForm(evento) {
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);

        calculofinal (peso.value / altura.value * altura.value);
    
    
    function rotulo() { 
        if (calculofinal < 18,5)
       {console.log (`Abaixo do peso`);} 
        else if (calculofinal >= 18,5 || calculofinal <= 24,9)
       {console.log (`Peso normal`);}
        else if (calculofinal >= 25 || calculofinal <= 29,9)
        {console.log (`Sobrepeso`);}
        else if (calculofinal >= 30 || calculofinal <= 34,9)
        {console.log (`Obesidade grau 1`);}
        else if (calculofinal >= 35 || calculofinal <= 39,9)
        {console.log (`Obesidade grau 2`);}   
        else (calculofinal >= 40)
        {console.log (`Obesidade grau 3`);}

        resultado.innerHTML += `<p>Seu IMC é ${calculofinal} ${rotulo}</p>`;
    }}

    form.addEventListener('submit', recebeEventoForm);
    e.preventDefault();
    console.log (`evento prevenido`);
}
CalculoIMC();