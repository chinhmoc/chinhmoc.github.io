function phepcong(){
    var A= document.getElementById('a1').value;
    var B= document.getElementById('b1').value;
    var result =0;
    result= parseInt(A) + parseInt(B);
    document.getElementById('result1').value= result;
}
function pheptru(){
    var A= document.getElementById('a2').value;
    var B= document.getElementById('b2').value;
    var result =0;
    result= parseInt(A) - parseInt(B);
    document.getElementById('result2').value= result;
}
function phepnhan(){
    var A= document.getElementById('a3').value;
    var B= document.getElementById('b3').value;
    var result =0;
    result= parseInt(A) * parseInt(B);
    document.getElementById('result3').value= result;
}
function phepchia(){
    var A= document.getElementById('a4').value;
    var B= document.getElementById('b4').value;
    var result =0;
    if(B==0){
        alert("Không thể chia cho 0");
    } else {
        result= parseInt(A) / parseInt(B);
        document.getElementById('result4').value= result;
    }
}
