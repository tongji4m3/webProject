window.onload = function ()
{
    //绑定点击事件
    document.getElementById("returnIndex").onclick = function ()
    {
        window.location.href = 'index.html';
    };
    document.getElementById("returnDetails").onclick = function ()
    {
        window.location.href = 'myOrder.html';
    };
    document.getElementById("showName").innerText =
        sessionStorage.getItem("username")+",请放心选购我们的产品!";

    //ajax请求,得到用户相关数据
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', rootUrl + getJoinProductUrl, true);
    httpRequest.setRequestHeader("Content-type", "application/json");

    //3.发送请求
    let data =
        {
            "username": sessionStorage.getItem("username"),
        };
    httpRequest.send(JSON.stringify(data));


    httpRequest.onreadystatechange = function ()
    {
        if (httpRequest.readyState === 4 && httpRequest.status === 200)
        {
            let json = JSON.parse(httpRequest.responseText);
            if (json.flag === true)
            {
                for (i = 0; i < json.data.length; i++)
                {
                    let name = json.data[i].name;
                    let money = json.data[i].money;

                    let tdName=document.createElement("td");
                    let tdNameText = document.createTextNode(name);
                    tdName.appendChild(tdNameText);

                    let tdMoney=document.createElement("td");
                    let tdMoneyText = document.createTextNode(money);
                    tdMoney.appendChild(tdMoneyText);

                    let tdBuy=document.createElement("td");
                    let buy=document.createElement("button");
                    buy.className = "button";
                    buy.innerText = "购买";
                    tdBuy.appendChild(buy);


                    let tdRemove=document.createElement("td");
                    let remove=document.createElement("button");
                    remove.className = "button";
                    remove.innerText = "移除";
                    tdRemove.appendChild(remove);

                    //给购买按钮绑定单击事件
                    buy.onclick = function ()
                    {
                        sessionStorage.setItem("currentProduct", name);
                        window.location.href = 'buyProduct.html';
                    };
                    //移除购物车
                    remove.onclick = function ()
                    {
                        //ajax请求,得到用户相关数据
                        let httpRequest = new XMLHttpRequest();
                        httpRequest.open('POST', rootUrl + removeJoinProductUrl, true);

                        httpRequest.setRequestHeader("Content-type", "application/json");
                        //3.发送请求
                        let data =
                            {
                                "username": sessionStorage.getItem("username"),
                                "productName": name
                            };
                        httpRequest.send(JSON.stringify(data));
                        alert("移除成功!");
                        location.reload();
                    };

                    let tr=document.createElement("tr");
                    tr.appendChild(tdName);
                    tr.appendChild(tdMoney);
                    tr.appendChild(tdBuy);
                    tr.appendChild(tdRemove);

                    document.getElementById("shoppingTable").appendChild(tr);
                }
            }
        }
    };
};
