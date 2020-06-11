package com.tongji.domain;

public class BuyProduct
{
    private int userId;
    private int productId;

    public BuyProduct()
    {
    }


    @Override
    public String toString()
    {
        return "BuyProduct{" +
                "userId=" + userId +
                ", productId=" + productId +
                '}';
    }

    public BuyProduct(int userId, int productId)
    {
        this.userId = userId;
        this.productId = productId;
    }

    public int getProductId()
    {
        return productId;
    }

    public void setProductId(int productId)
    {
        this.productId = productId;
    }

    public int getUserId()
    {
        return userId;
    }

    public void setUserId(int userId)
    {
        this.userId = userId;
    }
}
