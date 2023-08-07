// functions

function insert(num){
    num1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num1 + num;
}

function deleteBack(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function clean(){
    document.getElementById('result').innerHTML = "";
}


function percentage(){

    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result/100;
}

function squared(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.pow(result,2);  
}

function squareRoot(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.sqrt(result);
}


function reverse(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML =   1/result;
}


function reverseSign(){

    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = (result * -1);
} 

function result(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(result);

}