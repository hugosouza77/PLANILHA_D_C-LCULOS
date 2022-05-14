document.querySelector("#soma").addEventListener('click' , (event) => {
    event.preventDefault();

    let valor1 = document.querySelector("#valor_base").value;
    let valor2 = document.querySelector("#ajuda_transporte").value;
    let valor3 = document.querySelector("#ajuda_alimentacao").value;

    let receitatotal = Number(valor1) + Number(valor2) + Number(valor3);

    document.querySelector("#receita_total").value = receitatotal;

});


document.querySelector("#soma").addEventListener('click' , (event) => {
    event.preventDefault();

    let valor5 = document.querySelector("#desconto_automovel").value;
    let valor6 = document.querySelector("#faltas").value;
   
    let descontototal = Number(valor5) + Number(valor6);

    document.querySelector("#desconto_total").value = descontototal;

});

document.querySelector("#soma").addEventListener('click' , (event) => {
    event.preventDefault();

    let v4 = document.querySelector("#receita_total").value;
    let v7 = document.querySelector("#desconto_total").value;

    let total = Number(v4) - Number(v7);

    document.querySelector("#total").value = total;
     
});

