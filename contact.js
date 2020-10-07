function upload(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("textip").value;
    if(fname==""){
        alert("First Name Required");
        return false;
    }
    if(msg==""){
        alert("Please enter your message!");
        return false;
    }
    if(phone.length!=10){
        alert("Invalid Phone Number");
        return false;
    }
    emailRE=/^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$/;
    var mail=document.getElementById("email").value;
    if(mail.length==0){
        alert("E-mail can't be blank.");
        return false;
    }
    if(mail.match(emailRE)){
        }
    else{
        alert("Invalid Email");
        return false;
    }
// Get a database reference to our blog
var ref = firebase.database().ref('/queries');
ref.child(phone).set({
    f_name: fname,
    l_name: lname,
    mail: email,
    mobile: phone,
    message: msg
});
document.getElementById("fname").value="";
document.getElementById("lname").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
document.getElementById("textip").value="";
}