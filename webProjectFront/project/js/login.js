window.onload = function ()
{
    //点击输入框能交互
    let username=document.getElementById("username");
    username.onfocus = function ()
    {
        this.placeholder = '';
    };
    username.onblur = function ()
    {
        this.placeholder = '请输入您的用户名';
    };
    let password=document.getElementById("password");
    password.onfocus = function ()
    {
        this.placeholder = '';
    };
    password.onblur = function ()
    {
        this.placeholder = '请输入您的密码';
    };


//    得到表单
    document.getElementById("submit").onclick = function ()
    {
        let success = checkUsername() && checkPassword();
        if (!success) return false;

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', rootUrl + loginUrl, true);
        httpRequest.setRequestHeader("Content-type", "application/json");

        //3.发送请求
        let data =
            {
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
            };
        httpRequest.send(JSON.stringify(data));

        httpRequest.onreadystatechange = function ()
        {
            if (httpRequest.readyState === 4 && httpRequest.status === 200)
            {
                let json = JSON.parse(httpRequest.responseText);
                if(json.flag===true)
                {
                    window.location.href = 'index.html';
                    sessionStorage.setItem("username", json.data);
                    alert("登录成功,将跳转到首页!");
                }
                else
                {
                    alert("用户名或密码错误,请重新登录!");
                }
            }
        };
        alert("请稍等片刻...");
    };

    //失去焦点时也触发
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
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

