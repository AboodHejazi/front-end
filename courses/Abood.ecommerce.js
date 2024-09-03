let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let searchfailed = document.getElementById('searchfailed');
let searchingcourse = document.getElementById('searchingcourse');
let cardbody = document.getElementById('cardbody');
let exampleInputEmail1 = document.getElementById('exampleInputEmail1');
let maseege = document.getElementById('maseege');
let send = document.getElementById('send');
let Register = document.getElementById('Register');
let name_signup = document.getElementById('form3Example1c');
let email_signup = document.getElementById('form3Example3c');
let password_signup = document.getElementById('form3Example4c');
let reapeat_password_signup = document.getElementById('form3Example4cd');
let i_agree = document.getElementById('form2Example3c');
let login = document.getElementById('login');
let email_login = document.getElementById('typeEmailX');
let password_login = document.getElementById('typePasswordX');
let empty_field =document.getElementById('field_empty_warning');
let connact = document.getElementById('connact');
let login_empty_warning = document.getElementById('login_empty_warning');
let warning_login_massege = document.getElementById('warning_login_massege');
let repeat_password_massege_warning = document.getElementById('repeat_password_massege_warning');
let pass_warning = document.getElementById('pass_warning');
let courses = {
    title: ['html', 'javascript', 'datastructure', 'php', 'css', 'python'],
    teachers: ['Ahmad', 'arwa', 'salwa'],
    price: '200'//in dolar

};



function SearchAboutCourse() {
    let inputvalue = searchfailed.value;
    switch (inputvalue.toUpperCase()) {
        case 'HTML': card2.style.background = 'rgb(235, 169, 83)'; break;
        case 'PYTHON': card6.style.background = 'rgb(235, 169, 83)';; break;
        case 'CSS': card4.style.background = 'rgb(235, 169, 83)';; break;
        case 'JAVASCRIPT': card3.style.background = 'rgb(235, 169, 83)';; break;
        case 'JS': card3.style.background = 'rgb(235, 169, 83)';; break;
        case 'PHP': card1.style.background = 'rgb(235, 169, 83)';; break;
        case 'DATASTRUCTURE': card5.style.background = 'rgb(235, 169, 83)';; break;
        default: alert("This course Unvailable");; break;
    }

}

let clients;
if (localStorage.client != null) {
    clients = JSON.parse(localStorage.client);
}
else {
    clients = [];
}
function send1() {
    if (exampleInputEmail1.value != '' && maseege.value != '') {
        let client = {
            email: exampleInputEmail1.value,
            maseege: maseege.value
        };

        clients.push(client);
        localStorage.setItem('client', JSON.stringify(clients));
        empty_field.style.display = 'none';
        connact.style.borderBlockStyle = 'solid';
        connact.style.borderColor = '#A9A9A9';
        
        maseege.value = '' ;
        exampleInputEmail1.value = '';
    }
    else
    {
       
        empty_field.style.display = 'block';
        connact.style.borderBlockStyle = 'solid';
        connact.style.borderColor = 'red';
        send1.document.rel = 'no-refresh';
    }
    



}

let user;
if (localStorage[" newuser "] != null) {
    user = JSON.parse(localStorage[" newuser "]);
}
else {
    user = [];
}



function reg_new_user() {
    if (name_signup.value != '' && email_signup.value != '' && password_signup.value != '' && reapeat_password_signup.value != '') {
        if (reapeat_password_signup_fun()) {
            let newuser = {

                name: name_signup.value,
                email: email_signup.value,
                password: password_signup.value,
                reapeat_password: reapeat_password_signup.value


            };

            user.push(newuser);
            localStorage.setItem(' newuser ', JSON.stringify(user));
            repeat_password_massege_warning.style.display = 'none';
            clear_signup();
            pass_warning.style.display = 'none';
        }
         
        else {
            repeat_password_massege_warning.style.display = 'block';
        }
         
           
    }
   
  

}
function clear_signup() {
    name_signup.value = '';
    email_signup.value = '';
    password_signup.value = '';
    reapeat_password_signup.value = '';
}
function clear_login() {
    email_login.value = '';
   password_login.value = '';
}
function reapeat_password_signup_fun() {
    if (reapeat_password_signup.value == password_signup.value  )
        return true;

    return false;
}
//check user details **!!

function check_user_details() {
    if (email_login.value != '' && password_login.value != '' ) {
        
        let isEmailExists = false;
        let isPasswordExists = false;
        for (let i = 0; i < user.length; i++) {

            let _user = JSON.parse(localStorage[" newuser "])[i];
            if (_user.email == email_login.value && _user.password == password_login.value) {
                isEmailExists = true;
                isPasswordExists = true;
                break;
            }
        }
        if(isEmailExists && isPasswordExists  ){
            warning_login_massege.style.display = 'none';
            clear_login();
        }
        
           
        else{
            warning_login_massege.style.display = 'block';
    }
    
    }
    else
    {
                warning_login_massege.style.display = 'block';
            
    }
}



