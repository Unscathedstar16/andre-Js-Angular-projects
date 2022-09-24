function actn(){
    let stName = document.getElementById('name').value ;
    let stNum  = document.getElementById('rollno').value ;
    let stClass= document.getElementById('stuclass').value;
    let stuSec = document.getElementById('stusection').value;
    let stMarks= document.getElementById('stumarks').value;

    if(stMarks >90 && stMarks<=100){
        document.getElementById('result').innerHTML="A+ Grade";
    } else if(stMarks >80 && stMarks<=90){
        document.getElementById('result').innerHTML="A Grade";
    } else if(stMarks >70 && stMarks <=80){
        document.getElementById('result').innerHTML="B Grade";
    } else if(stMarks >60 && stMarks <=70){
        document.getElementById('result').innerHTML="C Grade";
    } else if(stMarks >50 && stMarks <=60){
        document.getElementById('result').innerHTML="D Grade";
    } else if(stMarks >40 && stMarks <=50){
        document.getElementById('result').innerHTML="E Grade";
    } else if(stMarks >0 && stMarks <=40){
        document.getElementById('result').innerHTML="Failed! Don't give up.";
    } else{
        document.getElementById('result').innerHTML="Abscent! Invalid marks"
    }          
}