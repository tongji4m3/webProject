package com.tongji.mapper;

import com.tongji.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper
{
    boolean register(User user);

    int login(User user);

    int findUserByUsername(User user);

    User getUser(String username);
}
