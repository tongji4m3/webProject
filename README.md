# webProject
同济大学_Web系统与技术_购物网站项目

1. 本项目是基于BS架构的简单购物网站。主要实现了用户注册登录，商品展示，添加购物车，结算下单，查询历史订单信息五个功能。前后端分为两个项目，都采用了IDEA进行开发。其中前端使用了HTML，CSS，JavaScript技术，并且使用原生ajax向后端发起请求。后端则使用maven管理依赖，使用springboot框架，并且整合了mybatis框架以连接MySQL数据库。并且该项目前后端分离，且严格分离html，css和js。其中，整个项目部署在了云服务器上，访问地址为：

   **http://47.103.203.188:8080/project/html/index.html**

2. 项目包含项目要求,项目说明文档,前端项目,后端项目,可以按顺序阅读

3. 运行流程:可以直接运行前端项目webProjectFront查看效果,但是这是连接远程后端,远程数据库的。如果想运行本地后端和数据库，需要修改

   ```
   1.修改访问后端地址：
   webProjectFront/project/js/api.js文件中的 rootUrl = "http://llocalhost:9080"
   2.修改数据库访问地址：
   webProject/src/main/resources/application.properties中
   spring.datasource.url=jdbc:mysql://localhost:3306/webProject
   ```

4. 数据库名称:webProject,端口号:33306 用户名:root 密码:root

5. 后端端口号:9080

   ​