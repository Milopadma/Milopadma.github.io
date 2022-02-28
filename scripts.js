//functionality

//find the difference between today's date and my birthdate
function Age() {
    var today = new Date();
    var birthDate = new Date(2002, 6, 27);
    var age = today.getTime() - birthDate.getTime();
    var age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("age").innerHTML = age;
}   

Age();

