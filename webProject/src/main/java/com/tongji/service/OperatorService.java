package com.tongji.service;

import com.tongji.domain.Product;

import java.util.List;

public interface OperatorService
{
    boolean addBuyProduct(int userId, int productId);

    boolean addJoinProduct(int userId, int productId);

    List<Product> getJoinProduct(int userId);

    boolean removeJoinProduct(int userId, int productId);

    List<Product> getBuyProduct(int userId);

    void removeBuyProduct(int userId, int productId);
}
