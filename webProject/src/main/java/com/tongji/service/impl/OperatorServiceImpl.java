package com.tongji.service.impl;

import com.tongji.domain.BuyProduct;
import com.tongji.domain.JoinProduct;
import com.tongji.domain.Product;
import com.tongji.mapper.OperatorMapper;
import com.tongji.mapper.ProductMapper;
import com.tongji.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperatorServiceImpl implements OperatorService
{
    @Autowired
    private OperatorMapper mapper;

//    购买商品
    @Override
    public boolean addBuyProduct(int userId, int productId)
    {
        BuyProduct buyProduct = new BuyProduct(userId,productId);
        try
        {
            mapper.addBuyProduct(buyProduct);
            return true;
        }
        catch (RuntimeException e)
        {
        }
        return false;
    }

//    加入购物车
    @Override
    public boolean addJoinProduct(int userId, int productId)
    {
        JoinProduct joinProduct = new JoinProduct(userId, productId);

        try
        {
            mapper.addJoinProduct(joinProduct);
            return true;
        }
        catch (RuntimeException e)
        {
        }
        return false;
    }

    @Override
    public List<Product> getJoinProduct(int userId)
    {
        return mapper.getJoinProduct(userId);
    }

    @Override
    public boolean removeJoinProduct(int userId, int productId)
    {
        JoinProduct joinProduct = new JoinProduct(userId, productId);

        try
        {
            mapper.removeJoinProduct(joinProduct);
            return true;
        }
        catch (RuntimeException e)
        {
        }
        return false;
    }

    @Override
    public List<Product> getBuyProduct(int userId)
    {
        return mapper.getBuyProduct(userId);
    }

    @Override
    public void removeBuyProduct(int userId, int productId)
    {
        BuyProduct buyProduct = new BuyProduct(userId, productId);
        System.out.println("移除成功");
        try
        {
            mapper.removeBuyProduct(buyProduct);
        }
        catch (RuntimeException e)
        {
        }
    }
}
