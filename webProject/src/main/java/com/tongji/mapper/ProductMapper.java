package com.tongji.mapper;

import com.tongji.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ProductMapper
{
    int getProduct(String productName);

    int getProductId(String productName);
}
