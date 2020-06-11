package com.tongji.mapper;

import com.tongji.domain.BuyProduct;
import com.tongji.domain.JoinProduct;
import com.tongji.domain.Product;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface OperatorMapper
{
    void addBuyProduct(BuyProduct buyProduct);

    void addJoinProduct(JoinProduct joinProduct);

    List<Product> getJoinProduct(int userId);

    void removeJoinProduct(JoinProduct joinProduct);

    List<Product> getBuyProduct(int userId);

    void removeBuyProduct(BuyProduct buyProduct);
}
