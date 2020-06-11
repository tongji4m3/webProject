package com.tongji.service.impl;

import com.tongji.domain.User;
import com.tongji.mapper.UserMapper;
import com.tongji.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserMapper userMapper;


    @Override
    public boolean register(User user)
    {
        try
        {
//            找到了,就不会报错,就说明用户名重复了!
            userMapper.findUserByUsername(user);
            return false;
        }
        catch (RuntimeException e)
        {
        }

        userMapper.register(user);
        return true;
    }

    @Override
    public boolean login(String username, String password)
    {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
//        正常退出说明找到了这个用户,否则用户名或者密码错误!
        try
        {
            userMapper.login(user);
            return true;
        }
        catch (RuntimeException e)
        {
        }
        return false;
    }

    @Override
    public User getUser(String username)
    {
        return userMapper.getUser(username);
    }

    @Override
    public int getUserId(String username)
    {
        User user = new User();
        user.setUsername(username);
        return userMapper.findUserByUsername(user);
    }
}
