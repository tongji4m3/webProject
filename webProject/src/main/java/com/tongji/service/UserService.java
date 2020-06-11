package com.tongji.service;

import com.tongji.domain.User;

import java.util.List;

public interface UserService
{
    boolean register(User user);

    boolean login(String username, String password);

    User getUser(String username);

    int getUserId(String username);
}
