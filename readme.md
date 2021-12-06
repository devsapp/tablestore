### tablestore 组件

#### 主要用来初始化 tablestore表和插入一些简单数据，使用场景是在某些依赖tablestore的应用中，初始化的工作

##### 初始化表例子

``s cli tablestore createTable -p '${JSON.stringify(equipment_params)}' -a ${access} endpoint ${endpoint} instance ${instance}``

具体可以参考 [start-barrage](https://https://github.com/devsapp/tablestore)应用