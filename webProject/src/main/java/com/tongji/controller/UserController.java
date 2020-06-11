package com.tongji.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tongji.domain.ResultInformation;
import com.tongji.domain.User;
import com.tongji.mapper.ProductMapper;
import com.tongji.service.ProductService;
import com.tongji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping(value = {"/user"}, method = {RequestMethod.POST, RequestMethod.GET})
@CrossOrigin
public class UserController
{
    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    @RequestMapping({"/register"})
    @ResponseBody
    public Object register(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        //响应结果
        ResultInformation information = new ResultInformation();
        User user = new User((String) map.get("username"), (String) map.get("password"), (String) map.get("phone"), (String) map.get("address"));
        System.out.println(user.getUsername());
        information.setFlag(userService.register(user));

        System.out.println("register:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/login"})
    @ResponseBody
    public Object login(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String password = (String) map.get("password");
        boolean flag= userService.login(username,password);
        if(flag)
        {
            information.setFlag(true);
            information.setData(username);
        }

        System.out.println("login:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }
    @RequestMapping({"/getUser"})
    @ResponseBody
    public Object getUser(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String productName = (String) map.get("productName");

        int productPrice = productService.getProduct(productName);
        User user= userService.getUser(username);

        System.out.println(username);
        System.out.println(productName);
        System.out.println(productPrice);

        information.setFlag(true);
        information.setData(user);
        information.setMsg(productPrice+"");//暂时用来传递价格

        System.out.println("getUser:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }
}
