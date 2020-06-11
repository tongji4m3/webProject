package com.tongji.domain;

//购物车实体类 关联了用户id和产品id
public class JoinProduct
{
    private int userId;
    private int productId;

    public JoinProduct()
    {
    }

    public JoinProduct(int userId, int productId)
    {
        this.userId = userId;
        this.productId = productId;
    }

    @Override
    public String toString()
    {
        return "BuyProduct{" +
                "userId=" + userId +
                ", productId=" + productId +
                '}';
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
