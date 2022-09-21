function calculate(){
    let a;
    let b;
    a = document.getElementById("salary").value ;

 //tax calculation//
    if(a<=300000){
        b = (a/100)*8;
        document.getElementById('result').value =b;
    }

    else if(a >300000 && a<=500000){
        b = (a/100)*10;
        document.getElementById('result').value =b;
    }

    else if(a >500001 && a<=800000){
        b = (a/100)*12;
        document.getElementById('result').value =b;
    }

    else if(a>800001 && a<=1000000){
        b = (a/100)*14;
        document.getElementById('result').value=b;
    }

    else if(a>1000001){
        b = (a/100)*16;
        document.getElementById('result').value=b;
    }

    // exemption// 
    let age;
    let exe;

    age = document.getElementById('dateOfBirth').value;

    if(age<18 || age>65){
        y = document.getElementById('result').value;
        exe = (y/100)*50;
        document.getElementById('waiveOff').value=exe;
    }

    //female//
    let female;
    let waive;

    female =  document.getElementById('female').value;

    if(female)
    z= document.getElementById('waiveOff').value;
    waive =(z/100)*10;
    document.getElementById('waive').value=waive;


   
}
    
