window.onload = function ()
{
    //绑定点击事件
    document.getElementById("returnIndex").onclick = function ()
    {
        window.location.href = 'index.html';
    };
    document.getElementById("returnDetails").onclick = function ()
    {
        window.location.href = 'productDetails/product1.html';
    };


    //得到用户名
    document.getElementById("name").innerText = sessionStorage.getItem("username");
    document.getElementById("productName").innerText = sessionStorage.getItem("currentProduct");

    //ajax请求,得到用户相关数据
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', rootUrl + getUserUrl, true);
    httpRequest.setRequestHeader("Content-type", "application/json");

    //3.发送请求
    let data =
        {
            "username": sessionStorage.getItem("username"),
            "productName": sessionStorage.getItem("currentProduct")
        };
    httpRequest.send(JSON.stringify(data));

    httpRequest.onreadystatechange = function ()
    {
        if (httpRequest.readyState === 4 && httpRequest.status === 200)
        {
            let json = JSON.parse(httpRequest.responseText);
            if(json.flag===true)
            {
                document.getElementById("productPrice").innerText = json.msg;
                document.getElementById("phone").innerText = json.data.phone;
                document.getElementById("address").innerText = json.data.address;
            }
        }
    };

//提交
    document.getElementById("buy").onclick = function ()
    {
        let httpRequest1 = new XMLHttpRequest();
        httpRequest1.open('POST', rootUrl + buyProductUrl, true);
        httpRequest1.setRequestHeader("Content-type", "application/json");


        //3.发送请求
        let data =
            {
                "username": sessionStorage.getItem("username"),
                "productName": sessionStorage.getItem("currentProduct")
            };
        httpRequest1.send(JSON.stringify(data));

        httpRequest1.onreadystatechange = function ()
        {
            if (httpRequest1.readyState === 4 && httpRequest1.status === 200)
            {
                let json = JSON.parse(httpRequest1.responseText);
                if(json.flag===true)
                {
                    window.location.href = 'myOrder.html';
                    alert("购买成功,将跳转到订单页面!");
                }
                else
                {
                    alert("你已经买过了该商品,不可重复购买.将跳转到订单页面!");
                    window.location.href = 'myOrder.html';
                }
            }
        };
    };
};
