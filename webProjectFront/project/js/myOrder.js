window.onload = function ()
{
    //绑定点击事件
    document.getElementById("returnIndex").onclick = function ()
    {
        window.location.href = 'index.html';
    };
    document.getElementById("returnDetails").onclick = function ()
    {
        window.location.href = 'shoppingCart.html';
    };
    document.getElementById("showName").innerText =
        sessionStorage.getItem("username") + ",悦生活，购享受。";

    //ajax请求,得到用户相关数据
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', rootUrl + getBuyProductUrl, true);
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
                console.log(json);
                for (i = 0; i < json.data.products.length; i++)
                {


                    let name = json.data.products[i].name;
                    let money = json.data.products[i].money;
                    let phone = json.data.user.phone;
                    let address = json.data.user.address;

                    let tdName=document.createElement("td");
                    let tdNameText = document.createTextNode(name);
                    tdName.appendChild(tdNameText);

                    let tdMoney=document.createElement("td");
                    let tdMoneyText = document.createTextNode(money);
                    tdMoney.appendChild(tdMoneyText);

                    let tdPhone=document.createElement("td");
                    let tdPhoneText = document.createTextNode(phone);
                    tdPhone.appendChild(tdPhoneText);

                    let tdAddress=document.createElement("td");
                    let tdAddressText = document.createTextNode(address);
                    tdAddress.appendChild(tdAddressText);

                    let tdRemove=document.createElement("td");
                    let remove=document.createElement("button");
                    remove.className = "button";
                    remove.innerText = "移除";
                    tdRemove.appendChild(remove);

                    //移除订单
                    remove.onclick = function ()
                    {
                        //ajax请求,得到用户相关数据
                        let httpRequest = new XMLHttpRequest();
                        httpRequest.open('POST', rootUrl + removeBuyProductUrl, true);

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
                    tr.appendChild(tdPhone);
                    tr.appendChild(tdAddress);
                    tr.appendChild(tdRemove);

                    document.getElementById("shoppingTable").appendChild(tr);
                }
            }
        }
    };
};


