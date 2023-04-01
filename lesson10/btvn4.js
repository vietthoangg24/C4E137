const $name = document.getElementById('name');
const $age = document.getElementById('age');
const $address = document.getElementById('address');
const $email = document.getElementById('email');
const $pass = document.getElementById('pass');
const $btn = document.getElementById('btn');
let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$btn.addEventListener('click',function(e){
    e.preventDefault();
    if($name.value.trim()==""){
        alert("Chưa nhập họ và tên ");
        return;
    }
    else if ($age.value.trim()==""){
        alert("chưa nhập tuổi ")
        return;
    }
    else if ($address.value.trim()==""){
        alert ("Chưa nhập địa chỉ")
        return;
    }
    else if ($email.value.trim()==""){
        alert("chưa nhập email")
        return;
    }
    else if (!$email.value.match(checkEmail)){
        alert("Định đạng email không đúng  ")
        return;
    }
    else if ($pass.value.trim()==""){
        alert("chưa nhập mật khẩu ")
        return;
    }

    else{
        alert("Đăng ký thành công ")
    }

})