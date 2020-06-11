
//加载后再执行
window.onload = function ()
{
    let img = document.getElementById("checkCodeImg");
    img.src = rootUrl + checkCodeUrl;
    img.onclick = function ()
    {
        img.src=rootUrl + checkCodeUrl+"?"+new Date().getTime();
    };

//    得到表单
    document.getElementById("submit").onclick = function ()
    {
        //调用用户名校验方法
        //调用密码校验方法
        //调用确认密码校验方法
        //调用手机号校验方法
        //调用地址校验方法
        //调用验证码校验方法
         let success=checkUsername() && checkPassword() && checkConfirmPassword() && checkPhone() && checkAddress() && checkCheckCode();
         if(!success) return false;

        //发送ajax请求
        //1.创建核心对象
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST',  rootUrl + registerUrl, true);
        httpRequest.setRequestHeader("Content-type", "application/json");

        //3.发送请求
        let data =
            {
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "phone": document.getElementById("phone").value,
                "address": document.getElementById("address").value,
                "checkCode": document.getElementById("checkCode").value,

            };
        httpRequest.send(JSON.stringify(data));

        //4.接受并处理来自服务器的响应结果
        //当xmlhttp对象的就绪状态改变时，触发事件onreadystatechange。
        httpRequest.onreadystatechange = function ()
        {
            //判断readyState就绪状态是否为4
            if (httpRequest.readyState === 4 && httpRequest.status === 200)
            {
                //获取服务器的响应结果
                let json = JSON.parse(httpRequest.responseText);
                if(json.flag===true)
                {
                    window.location.href = 'login.html';
                    alert("注册成功,将跳转到登录界面!");
                }
                else
                {
                    alert("注册失败,用户名已存在!");
                }
            }
        };
        alert("请稍等片刻...");
    };
    //失去焦点时也触发
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
    document.getElementById("confirmPassword").onblur = checkConfirmPassword;
    document.getElementById("phone").onblur = checkPhone;
    document.getElementById("address").onblur = checkAddress;
    document.getElementById("checkCode").onblur = checkCheckCode;
};

//    校验用户名
function checkUsername()
{
    //获取用户名的值
    let usernameVal = document.getElementById("username").value;
    //    提示信息
    let usernameMsg = document.getElementById("usernameMsg");

    //    定义正则表达式
    let regUsername = /^\w{3,12}$/;
    //    判断是否符合正则
    let flag = regUsername.test(usernameVal);
    if (flag)
    {
        usernameMsg.innerHTML = "";
    } else
    {
        usernameMsg.innerHTML = "用户名必须在3-12位之间!";
    }
    return flag;
}

//    校验密码
function checkPassword()
{
    //获取密码的值
    let passwordVal = document.getElementById("password").value;
    //    提示信息
    let passwordMsg = document.getElementById("passwordMsg");

    //    定义正则表达式
    let regPassword = /^\w{6,12}$/;
    //    判断是否符合正则
    let flag = regPassword.test(passwordVal);
    if (flag)
    {
        passwordMsg.innerHTML = "";
    } else
    {
        passwordMsg.innerHTML = "密码必须在6-12位之间!";
    }
    return flag;
}

//    校验确认密码
function checkConfirmPassword()
{
    //获取确认密码的值
    let confirmPasswordVal = document.getElementById("confirmPassword").value;
    //    提示信息
    let confirmPasswordMsg = document.getElementById("confirmPasswordMsg");

    //    定义正则表达式
    let regConfirmPassword = document.getElementById("password").value;
    //    判断是否符合正则
    let flag = (regConfirmPassword === confirmPasswordVal);
    if (flag)
    {
        confirmPasswordMsg.innerHTML = "";
    } else
    {
        confirmPasswordMsg.innerHTML = "两次输入的密码不同!";
    }
    return flag;
}


//    校验手机号
function checkPhone()
{
    //获取手机号的值
    let phoneVal = document.getElementById("phone").value;
    //    提示信息
    let phoneMsg = document.getElementById("phoneMsg");

    //    定义正则表达式
    let regPhone = /^\d{11}$/;
    //    判断是否符合正则
    let flag = regPhone.test(phoneVal);
    if (flag)
    {
        phoneMsg.innerHTML = "";
    } else
    {
        phoneMsg.innerHTML = "手机号必须是11位的数字!";
    }
    return flag;
}


//    校验地址
function checkAddress()
{
    //获取地址的值
    let addressVal = document.getElementById("address").value;
    //    提示信息
    let addressMsg = document.getElementById("addressMsg");

    //    定义正则表达式 中文英文数字
    let regAddress = /^[\u0391-\uFFE5A-Za-z0-9]+$/;
    //    判断是否符合正则
    let flag = regAddress.test(addressVal);
    if (flag)
    {
        addressMsg.innerHTML = "";
    } else
    {
        addressMsg.innerHTML = "地址只能包含中文,英文和数字!";
    }
    return flag;
}

//    校验验证码
function checkCheckCode()
{
    //获取验证码的值
    let checkCodeVal = document.getElementById("checkCode").value;
    //    提示信息
    let checkCodeMsg = document.getElementById("checkCodeMsg");

    //    定义正则表达式
    let regCheckCode = /^\w{4}$/;
    //    判断是否符合正则
    let flag = regCheckCode.test(checkCodeVal);
    if (flag)
    {
        checkCodeMsg.innerHTML = "";
    } else
    {
        checkCodeMsg.innerHTML = "验证码长度必须为4!";
    }
    return flag;
}
