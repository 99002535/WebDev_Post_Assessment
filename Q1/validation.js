function validationForm()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }
    
    else if(validateUsername()){
        alert("The Username should be of minimum 5 characters and should not exceed 15 characters!");
        document.myform.username.focus();
    }
    
    else if(document.getElementById("pass").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    
    else if(validatePassword()){
        alert("The Password should contain atleast one lowercase, uppercase, number and a special character");
        document.myform.password.focus();
    }
    
    else if(validateEmail()&&document.getElementById("email").value!=""){
        alert("The Email ID entered is not of valid type! (Should be of the format xyz@mail.com (or) xyz@mail.ext.com (or) xyz@mail.co.in (or) xyz@mail.in)");
        document.myform.emailID.focus();
    }

    else if(validatePhone()){
        alert("Please enter a 10 digit valid phone number!");
        document.myform.phone.focus();
    }
    else{
        validateUser();
     } 
}
    
   function validateUser(){
    var ppl = ['Suraj', 'Shweta', 'Tejasvi'];
    for(var i=0;i<ppl.length;i++)
    {
        var uname = document.getElementById("uname").value;
        if(uname==ppl[i])
        {
            alert('Username already exists! Please choose a different Username!'); 
            var flag=1;
            break;
        }
    }
        if(flag!=1)
        {
            document.getElementById("mydiv").innerHTML = 'Welcome and Have a nice day '+uname+'!';
        }       
    }
   function validateUsername()
   {
       var str = document.getElementById("uname").value;
       if(str.length>=5&&str.length<=15)
        return false;
       else 
        return true;
   }
   function validatePassword()
   {
    
     var str = document.getElementById("pass").value; 
        if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g)) 
            return false;
    
        else 
            return true; 
    
   }
   function validateEmail()  
    {
        var str = document.getElementById("email").value; 
        if (str.match(/@/g)&&str.match(/[.com,.in,.co.in]/g))
            return false;
        else 
            return true; 
    } 
    function validatePhone()
    {
        var str = document.getElementById("phone").value; 
        if(str.length==10)
            return false;
        else
            return true;
    }