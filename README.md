

# mock-server



### 背景

前端开发要mock数据，

1. 不想用setTimeout堆到页面里面，到头来还要删掉
2. 想用mockjs，但鉴于业务关系，不能直接引进来
3. 鉴于上面两条，使用Express做mock服务，再将mockjs集成到这个服务里

### 如何使用

```
1. git clone https://github.com/iWuzhi/mock-server

2. npm i

3. npm run start
```

### 如何mock数据

在api目录下新增对应功能模块的模拟数据（可参考已有数据user/product）。

修改或编辑后，服务会自动更新(nodemon)

### 如何获取数据

http://127.0.0.1:8084[你定义的路径]



### TODO

1. 是否需要方法参数校验

2. 是否需要将API目录单独存放

   * 将服务以命令行的方式启动

   * API目录可自定义（path参数）