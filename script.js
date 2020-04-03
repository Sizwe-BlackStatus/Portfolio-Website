    function validation(){
    var name = document.getElementById("inp-Firstname").value;
    var subject = document.getElementById("inp-subject").value;
    var email = document.getElementById("inp-email").value;
    var message = document.getElementById("inp-msg").value;
    var Error_warn = document.getElementById("error");
    var text;

    if(name.length < 3){
        text = "Valid Name required!";
        Error_warn.innerHTML = text;
        return false;
    }
    if(email.length <= 8 || email.indexOf("@") == -1){
        text = "Valid Email Required!";
        Error_warn.innerHTML = text;
        return false;
    }
    if(subject.length <= 10 ){
        text = "Valid Subject Line Required!";
        Error_warn.innerHTML = text;
        return false;
    }
    if(message.length <= 100){
        text = "More Characters required!";
        Error_warn.innerHTML = text;
        return false;
    }
    if(message.length > 300){
        text = "Character limit reached!";
        Error_warn.innerHTML = text;
        return false;
    }
    alert("Submitted!");
    return true;
}
