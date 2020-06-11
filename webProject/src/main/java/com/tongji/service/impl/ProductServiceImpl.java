package com.tongji.service.impl;

import com.tongji.mapper.ProductMapper;
import com.tongji.mapper.UserMapper;
import com.tongji.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService
{
    @Autowired
    private ProductMapper mapper;

    @Override
    public int getProduct(String productName)
    {
        System.out.println(productName);
        return mapper.getProduct(productName);
    }

    @Override
    public int getProductId(String productName)
    {
        return mapper.getProductId(productName);
    }
}
