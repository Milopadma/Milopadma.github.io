//automatic age change functionality

//find the difference between today's date and my birthdate and then calculate
//the age in years
function Age() {
    var today = new Date();
    var birthDate = new Date(2002, 6, 27);
    var age = today.getTime() - birthDate.getTime();
    var age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("age").innerHTML = age;
}   

Age();


//menu functionality
//listen for click on Home, then go to Home page
document.getElementById("home").addEventListener("click", function(){
    window.location.href = "index.html";
});

//listen for click on Portfolio, then go to Portfolio page
document.getElementById("portfolio").addEventListener("click", function(){
    window.location.href = "portfolio.html";
});

//listen for click on Sites, then go to Sites page
document.getElementById("sites").addEventListener("click", function(){
    window.location.href = "sites.html";
});

//listen for click on Contact, then go to Contact page
document.getElementById("contact").addEventListener("click", function(){
    window.location.href = "contact.html";
});