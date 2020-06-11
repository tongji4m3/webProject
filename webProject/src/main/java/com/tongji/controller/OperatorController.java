package com.tongji.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tongji.domain.Product;
import com.tongji.domain.ResultInformation;
import com.tongji.domain.User;
import com.tongji.service.OperatorService;
import com.tongji.service.ProductService;
import com.tongji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = {"/operator"}, method = {RequestMethod.POST, RequestMethod.GET})
@CrossOrigin
public class OperatorController
{
    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    @Autowired
    OperatorService operatorService;

    @RequestMapping({"/buyProduct"})
    @ResponseBody
    public Object addBuyProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String productName = (String) map.get("productName");

        int productId = productService.getProductId(productName);
        int userId= userService.getUserId(username);

       boolean flag=operatorService.addBuyProduct(userId, productId);


        information.setFlag(flag);

        System.out.println("addBuyProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/joinProduct"})
    @ResponseBody
    public Object addJoinProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String productName = (String) map.get("productName");

        int productId = productService.getProductId(productName);
        int userId= userService.getUserId(username);

        boolean flag=operatorService.addJoinProduct(userId, productId);


        information.setFlag(flag);

        System.out.println("addJoinProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/getJoinProduct"})
    @ResponseBody
    public Object getJoinProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        int userId= userService.getUserId(username);

        List<Product> products=operatorService.getJoinProduct(userId);

        information.setFlag(true);
        information.setData(products);

        System.out.println("getJoinProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/removeJoinProduct"})
    @ResponseBody
    public Object removeJoinProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String productName = (String) map.get("productName");

        int productId = productService.getProductId(productName);
        int userId= userService.getUserId(username);

        boolean flag=operatorService.removeJoinProduct(userId, productId);

        System.out.println("removeJoinProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/getBuyProduct"})
    @ResponseBody
    public Object getBuyProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        User user = userService.getUser(username);

        int userId= userService.getUserId(username);
        List<Product> products=operatorService.getBuyProduct(userId);

        information.setFlag(true);
        Map<String,Object> userBuyProduct = new HashMap<>();
        userBuyProduct.put("user", user);
        userBuyProduct.put("products", products);

        information.setData(userBuyProduct);

        System.out.println("getBuyProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }

    @RequestMapping({"/removeBuyProduct"})
    @ResponseBody
    public Object removeBuyProduct(@RequestBody Map<String, Object> map, ModelMap modelMap) throws JsonProcessingException
    {
        ResultInformation information = new ResultInformation();
        String username = (String) map.get("username");
        String productName = (String) map.get("productName");

        int productId = productService.getProductId(productName);
        int userId= userService.getUserId(username);

       operatorService.removeBuyProduct(userId, productId);

        System.out.println("removeBuyProduct:"+information);

        //返回json数据
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(information);
    }
}
