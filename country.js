function chngSt(){
    let state = document.getElementById('state').value ;
    document.getElementById('city').value= state;
}
function chngCty(){
    let city  = document.getElementById('city').value;
    document.getElementById('state').value= city;
}