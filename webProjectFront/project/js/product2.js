window.onload = function ()
{
    setInterval(changeImg, 2000);

    //登录者名字展示
    let username = document.getElementById("username");
    if(!sessionStorage.getItem("username"))
        username.innerText = "未登录状态";
    else
        username.innerText = "欢迎光临:" + sessionStorage.getItem("username");

//    两个按钮单击事件
    document.getElementById("cart").onclick = function ()
    {
        if(!sessionStorage.getItem("username"))
        {
            alert("您还未登录,即将跳转到登录页面!");
            window.location.href = '../login.html';
        }
        else
        {
            let httpRequest1 = new XMLHttpRequest();
            httpRequest1.open('POST', rootUrl + joinProductUrl, true);
            httpRequest1.setRequestHeader("Content-type", "application/json");


            //3.发送请求
            let data =
                {
                    "username": sessionStorage.getItem("username"),
                    "productName": "huawei"
                };
            httpRequest1.send(JSON.stringify(data));

            httpRequest1.onreadystatechange = function ()
            {
                if (httpRequest1.readyState === 4 && httpRequest1.status === 200)
                {
                    let json = JSON.parse(httpRequest1.responseText);
                    if(json.flag===true)
                    {
                        alert("商品已添加到购物车,即将跳转到购物车页面!");
                        window.location.href = '../shoppingCart.html';
                    }
                    else
                    {
                        alert("你已经把商品添加进了购物车,不可重复添加.将跳转到购物车页面!");
                        window.location.href = '../myOrder.html';
                    }
                }
            };
        }
    };
    document.getElementById("buy").onclick = function ()
    {
        if(!sessionStorage.getItem("username"))
        {
            alert("您还未登录,即将跳转到登录页面!");
            window.location.href = '../login.html';
        }
        else
        {
            sessionStorage.setItem("currentProduct", "huawei");
            window.location.href = '../buyProduct.html';
        }
    };
};


//切换图片效果
var number = 1;
function changeImg()
{
    number++;
    if(number>5) number = 1;
    let img = document.getElementById("img");
    img.src = "../../img/huawei/img"+number+".jpg";
}
