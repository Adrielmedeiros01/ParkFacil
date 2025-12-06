function processar(){
    let veiculo = document.getElementById("veiculo").value;
    if(veiculo == "c"){
        carro();
    }
    else if("m") {
        moto();
    }
}

function carro(){
    let valor = 5;
    let hrs = Number(document.getElementById("hrs").value); 
    let mensal = document.getElementById("mensal").value;
    if(hrs === 1){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor - (valor*10)/100}`;   
        }
    }
    else if(hrs === 2){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor*2}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor*2 - ((valor*2)*10)/100}`;   
        };
    }
  }

function moto(){
    let valor = 4;
    let hrs = Number(document.getElementById("hrs").value); 
    let mensal = document.getElementById("mensal").value;
    if(hrs === 1){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor - (valor*10)/100}`;   
        }
    }
    else if(hrs === 2){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor*2}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${valor*2 - ((valor*2)*10)/100}`;   
        };
    }
}

