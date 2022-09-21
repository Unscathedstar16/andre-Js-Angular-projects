function calculator(actType){
   console.log(actType)
   let num1="0"; let num2="0";
   let res;
   if(actType=='add'){
    num1=document.getElementById('number1').value;
    num2=document.getElementById('number2').value;
    res=+num1 + +num2;
    document.getElementById('result').value=res;
   }
   else if(actType=='sub'){
      num1=document.getElementById('number1').value;
      num2=document.getElementById('number2').value;
      res=num1 - num2;
      document.getElementById('result').value=res;
     }
     else if(actType=='mul'){
      num1=document.getElementById('number1').value;
      num2=document.getElementById('number2').value;
      res=num1 * num2;
      document.getElementById('result').value=res;
     }
     else if(actType=='div'){
      num1=document.getElementById('number1').value;
      num2=document.getElementById('number2').value;
      res=num1 / num2;
      document.getElementById('result').value=res;
     }
   }

