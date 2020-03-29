## 页面布局
协助进行页面级整体布局。

* ELayout：布局容器，其下可嵌套 EHeader ESider EContent EFooter 或 ELayout 本身，可以放在任何父容器中。

* EHeader：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 ELayout 中。

* ESider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 ELayout 中。

* EContent：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 ELayout 中。

* EFooter：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 ELayout 中。

:::demo 通过组合实现布局
```html
    <e-layout>
        <e-header>xxx管理系统</e-header>
        <e-content>内容</e-content>
        <e-footer>底部</e-footer>
    </e-layout>

    <e-layout>
        <e-header>xxx管理系统</e-header>
        <e-layout>
            <e-sider>导航菜单</e-sider>
            <e-content>内容</e-content>
        </e-layout>
        <e-footer>底部</e-footer>
    </e-layout>

    <e-layout>
        <e-header>xxx管理系统</e-header>
        <e-layout>
             <e-content>内容</e-content>
            <e-sider>导航菜单</e-sider> 
        </e-layout>
        <e-footer>底部</e-footer>
    </e-layout>

     <e-layout>
       <e-sider>导航菜单</e-sider> 
        
        <e-layout>
            <e-header>xxx管理系统</e-header>
             <e-content>内容</e-content>
             <e-footer>底部</e-footer>
        </e-layout>
       
    </e-layout>
```
:::