window.onload = function ()
{
    let username = document.getElementById("username");
    if(!sessionStorage.getItem("username"))
        username.innerText = "未登录状态";
    else
        username.innerText = "欢迎光临:" + sessionStorage.getItem("username");

    let close = document.getElementById("close");
    close.onclick = function ()
    {
        username.innerText = "未登录状态";
        sessionStorage.removeItem("username");
    };

    //未登录者不能进入购物车,订单界面
    document.getElementById("shoppingCart").onclick = function ()
    {
        if(!sessionStorage.getItem("username"))
        {
            alert("您还未登录,即将跳转到登录页面!");
            window.location.href = 'login.html';
        }
        else
        {
            window.location.href = 'shoppingCart.html';
        }
    };
    document.getElementById("myOrder").onclick = function ()
    {
        if(!sessionStorage.getItem("username"))
        {
            alert("您还未登录,即将跳转到登录页面!");
            window.location.href = 'login.html';
        }
        else
        {
            window.location.href = 'myOrder.html';
        }
    };

    for (i = 1; i <= 10; i++)
    {

        let imgDiv=document.createElement("div");
        imgDiv.className = "pro-img";
        let img=document.createElement("img");
        img.src = "../img/other/img" + i + ".jpg";
        imgDiv.appendChild(img);

        //名称
        let title = document.createElement("h3");
        title.innerHTML = "good product";

        //文字信息
        let information = document.createElement("p");
        information.className = "desc";
        information.innerHTML = "【下单至高减400元】2020年新款特朗普牌猪肉";

        //价格
        let price=document.createElement("p");
        price.className = "price";
        let priceSpan = document.createElement("span");
        priceSpan.innerHTML = "1666元";
        let del = document.createElement("del");
        del.innerHTML = "8848";
        price.appendChild(priceSpan);
        price.appendChild(del);


        //短评
        let reviewDiv=document.createElement("div");
        reviewDiv.className = "review";
        let review=document.createElement("span");
        review.className = "msg";
        review.innerHTML = "剁手永不停歇!";
        reviewDiv.appendChild(review);

        //加入到a标签里面
        let a=document.createElement("a");
        a.href = "productDetails/product1.html";
        a.appendChild(imgDiv);
        a.appendChild(title);
        a.appendChild(information);
        a.appendChild(price);
        a.appendChild(reviewDiv);

        //加入到li里面
        let li=document.createElement("li");
        li.appendChild(a);

        //加入到ui里面
        let ui = document.getElementById("addProduct");
        ui.appendChild(li);
    }
};

