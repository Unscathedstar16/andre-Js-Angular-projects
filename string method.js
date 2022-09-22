//if condition
     
    function change(){  

    let num;
    num = document.getElementById('statement').value;
    if(num > 10){
        console.log(num,'greater number');
    } if(num < 10){
        console.log(num,'lower number');
    }console.log(num);
    }
//else condition

    function actn(){

    let num1;
    num1 = document.getElementById('elsecond').value;
    if (num1 >5){
        console.log(num1, "num is greater than 5");
    } else {
        console.log(num1, "num is lesser than 5");
    }
    }

//else if  

    function actnTyp(){
    let number;
    number = document.getElementById('elseifcond').value;
    if (number < 5){
        console.log(number,'lesser than 5');
    } else if (number == 5){
        console.log(number,'equal');
    }
    }
//switch

function length(){
    let day;
    day=document.getElementById('txt').value ;
    day ? console.log(`hey! its ${day}`) : console.log("hello!");
    switch(day){
        case 'monday':
            console.log("7.30am");
            break;

        case 'tuesday':
        case 'wednesday':
            console.log("8am");
            break;
            
        case 'thursday':
            console.log("7am");
            break;
            
        case 'friday':
            console.log("6am");
            break;
            
        case 'saturday':
        case 'sunday':
            console.log("10am");
            break;
        
        default:
            console.log("12am");
            break;
        
    }
console.log(day);

//length

    let size;
    size=document.getElementById('size').value;
    let length = size.length;
    console.log(length);

//replace
    let word;
    word=document.getElementById('remove').value ;
    let add = word.replace('lost' , 'ghost');
    console.log(add); 

// uppercase
   let text1;
   text1 = document.getElementById('upper').value;
   let upper = text1.toUpperCase();
   console.log(upper);

//lowercase
   let text2;
   text2 = document.getElementById('lower').value;
   let lower = text2.toLowerCase();
   console.log(lower);

//concat
   let txt1 = "andre";
   let txt2;
   txt2 = document.getElementById('merge').value;
   let txt3 = "andre".concat("",txt2);
   console.log(txt3);

//trim
   let cut;
   cut = document.getElementById('trim').value;
   let cut1= cut.trim();
   console.log(cut1);

//charat
   let position;
   position = document.getElementById('place').value;
   let position1= position.charAt(3);
   console.log(position1);

//indexof
   let message;
   message = document.getElementById('index').value;
   let result = message.indexOf('o');
   console.log(result);

//slice
   let slc;
   slc = document.getElementById('from').value;
   let part = slc.slice(6,14);
   console.log(part);

//substring
   let str;
   str = document.getElementById('substr').value;
   let part1= str.substring(5,12);
   console.log(7,12)
   let part2= str.substring(7);
   console.log(part2)   

//split
   let msg ;
   msg = document.getElementById('expand').value;
   let msg1= msg.split("");
   console.log(msg1);
}
console.clear();
