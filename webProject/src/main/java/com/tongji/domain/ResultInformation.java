package com.tongji.domain;

import java.io.Serializable;

public class ResultInformation implements Serializable
{
    private boolean flag;
    private Object data;//正确时返回的数据对象
    private String msg;//错误提示

    public ResultInformation()
    {
        this.flag = false;
    }

    public ResultInformation(boolean flag, String msg)
    {
        this.flag = flag;
        this.msg = msg;
    }

    @Override
    public String toString()
    {
        return "ResultInformation{" +
                "flag=" + flag +
                ", data=" + data +
                ", msg='" + msg + '\'' +
                '}';
    }

    public boolean isFlag()
    {
        return flag;
    }

    public void setFlag(boolean flag)
    {
        this.flag = flag;
    }

    public Object getData()
    {
        return data;
    }

    public void setData(Object data)
    {
        this.data = data;
    }

    public String getMsg()
    {
        return msg;
    }

    public void setMsg(String msg)
    {
        this.msg = msg;
    }
}
