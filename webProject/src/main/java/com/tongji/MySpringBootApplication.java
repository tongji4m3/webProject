package com.tongji;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
public class MySpringBootApplication
{

    public MySpringBootApplication()
    {
    }

    public static void main(String[] args)
    {
        SpringApplication.run(MySpringBootApplication.class, new String[0]);
    }
}
