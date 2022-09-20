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
    let word = 'i am lost uchiha';
    word=document.getElementById('remove').value ;
    let add = word.replace('lost' , 'ghost');
    console.log(add); 

// uppercase
   let text1 = 'andre' ;
   let upper = text1.toUpperCase();
   console.log(upper);

//lowercase
   let text2 = 'THIMO';
   let lower = text2.toLowerCase();
   console.log(lower);

//concat
   let txt1 = "andre";
   let txt2 = "thimo";
   let txt3 = "andre".concat("",txt2);
   console.log(txt3);

//trim
   let cut = "   andre   ";
   let cut1= cut.trim();
   console.log(cut1);

//charat
   let position = "madara";
   let position1= position.charAt(3);
   console.log(position1);

//indexof
   let message = "i am a web developer";
   let result = message.indexOf('o');
   console.log(result);

//slice
   let slc = "orange,apple,watermelon";
   let part = slc.slice(6,14);
   console.log(part);

//substring
   let str = "lime,mango,kiwi";
   let part1= str.substring(5,12);
   console.log(7,12)
   let part2= str.substring(7);
   console.log(part2)   

//split
   let msg = "my name is andre";
   let msg1= msg.split("");
   console.log(msg1);
}
console.clear();
