function checkIfIsEmpty(){
        if(document.querySelector('#userName').value == ''){
            document.getElementById('userName').className="form-control is-invalid";
        }else{
            document.querySelector('#userName').value.split(' ').join('');
            document.getElementById('userName').className="form-control is-valid";
        }
        if(document.querySelector('#eMail').value == ''){
            document.getElementById('eMail').className="form-control is-invalid";
        }
        else{
            document.getElementById('eMail').className="form-control is-valid";
        }
        if(document.querySelector('#phone').value == ''){
            document.getElementById('phone').className="form-control is-invalid";
        }else{
            document.getElementById('phone').className="form-control is-valid";
        }
        if(document.querySelector('#passWord').value == '' || checkPassword() === false){
            document.getElementById('passWord').className="form-control is-invalid";
        }else{
            document.getElementById('passWord').className="form-control is-valid";
        }
        if(document.querySelector('#rePassWord').value == '' || checkPassword() === false){
            document.getElementById('rePassWord').className="form-control is-invalid";
        }else{
            document.getElementById('rePassWord').className="form-control is-valid";
        }
}
function checkPassword(){
    if(document.querySelector('#rePassWord').value.lenght >= 48 || document.querySelector('#rePassWord').value.lenght <= 8){
        document.querySelector('#rePassWord').value ="";
        document.querySelector('#rePassWord').placeholder="Maximun 48 characters and minimun 8 characters...";
        return false;
    }
    if(document.querySelector('#rePassWord').value != document.querySelector('#passWord').value){
        document.querySelector('#rePassWord').value ="";
        document.querySelector('#rePassWord').placeholder="Wrong Password...";
        return false;
    }
}
    
