function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "282004priyak@gmail.com",
        Password : "#Angel",
        To : '282004priyak@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Message alert",
        Body : "name:" + document.getElementById("name").value + "<br> email:" + document.getElementById("email").value  + "<br> Messages:" + document.getElementById("message").value 
    }).then(
      message => alert("message sent successfully.")
    );
}
