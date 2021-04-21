var Login = function () {
    
}

Login.prototype.login = function () {


    //


    let email = $('#user-email')

    let password = $('#user-password')

    let errors = false

    if (email.val().length <= 0) {

        email.parent().parent().addClass('login-error')
        
        errors = true
    }
     
    if (password.val().length <=0) {
        
        password.parent().parent().addClass('login-error')

        errors = true
    }

    if (errors) {
        
        return;
        
    }else{

        httpRequest.login(email.val(),password.val());
    }
}

var login = new Login()