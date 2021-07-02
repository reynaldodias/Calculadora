


function insert(num){

    //document.getElementById('resultado').innerHTML= num; // assim pega o numero mas apaga da tela quando digito outro. Par resolver abaixo:
     
     numero = document.getElementById('resultado').innerHTML;
    
         
    document.getElementById('resultado').innerHTML = numero + num;

    if (document.getElementById('resultado').innerHTML.length > 16){
        document.getElementById('resultado').innerHTML = "Memória cheia...";
     }

    //desta forma pego o que ja estava salvo na variavel + o numero digitado.
}

function clean(){
    document.getElementById('resultado').innerHTML = ''; // para limpar a tela
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring( resultado.length -1 , 0)
    // para ir apagando de 1 em 1.
}

function calcular(){
    
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        // essa funçao já faz todos os calculos automaticamente
    }else{
        document.getElementById('resultado').innerHTML = " Vazio...";
    }
    if (document.getElementById('resultado').innerHTML.length > 16){
        document.getElementById('resultado').innerHTML = "Memória cheia...";
     }

}
