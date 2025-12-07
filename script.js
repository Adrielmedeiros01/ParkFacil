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
    else if(hrs === 3){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 3}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 3) - ((((valor*2+3))*10)/100)}`;   
        };
    }
    else if(hrs === 4){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 6}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 6) - ((((valor*2+6))*10)/100)}`;   
        };
    }
    else if(hrs === 5){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 9}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 9) - ((((valor*2+9))*10)/100)}`;   
        };
    }
    else if(hrs === 6){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 12}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 12) - ((((valor*2+12))*10)/100)}`;   
        };
    }
    else if(hrs === 7){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 15}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 15) - ((((valor*2+15))*10)/100)}`;   
        };
    }
    else if(hrs === 8){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 18}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 3) - ((((valor*2+18))*10)/100)}`;   
        };
    }
    else if(hrs === 9){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 21}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 21) - ((((valor*2+21))*10)/100)}`;   
        };
    }
    else if(hrs === 10){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 24}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 24) - ((((valor*2+24))*10)/100)}`;   
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

    else if(hrs === 3){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 2}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 2) - ((((valor*2+2))*10)/100)}`;   
        };
    }
    else if(hrs === 4){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 4}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 4) - ((((valor*2+4))*10)/100)}`;   
        };
    }
    else if(hrs === 5){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 8}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 8) - ((((valor*2+8))*10)/100)}`;   
        };
    }
    else if(hrs === 6){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 10}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 10) - ((((valor*2+10))*10)/100)}`;   
        };
    }
    else if(hrs === 7){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 12}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 12) - ((((valor*2+12))*10)/100)}`;   
        };
    }
    else if(hrs === 8){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 14}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 14) - ((((valor*2+14))*10)/100)}`;   
        };
    }
    else if(hrs === 9){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 16}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 16) - ((((valor*2+16))*10)/100)}`;   
        };
    }
    else if(hrs === 10){
        if(mensal === "n"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${(valor*2) + 18}`;   
        }
        else if(mensal === "s"){
            document.getElementById("result").innerText = `Valor a pagar por ${hrs}h = R$ ${((valor*2) + 18) - ((((valor*2+18))*10)/100)}`;   
        };
    }
}

