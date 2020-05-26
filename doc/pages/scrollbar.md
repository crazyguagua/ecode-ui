# 自定义滚动条
浏览器滚动条默认的样式很丑，虽然可以通过css来美化，但是各个浏览器的兼容性问题也很让人头疼，最好可以用js来模拟滚动条。

## 基本用法
:::demo
```html
<div class="margin-15 scrollbarDemo" >
    <e-scrollbar style="height:300px;width:400px;">
        
                <div class="view" style="width:1000px;background:#ccc;">
                       <div>我只知道，阿森纳是冠军！！！！</div>
                        <div>我只知道，阿森纳是冠军！！！！</div>
                         <div>我只知道，阿森纳是冠军！！！！</div>
                          <div>我只知道，阿森纳是冠军！！！！</div>
                           <div>我只知道，阿森纳是冠军！！！！</div>
                            <div>我只知道，阿森纳是冠军！！！！</div>
                             <div>我只知道，阿森纳是冠军！！！！</div>
                              <div>我只知道，阿森纳是冠军！！！！</div>
                               <div>我只知道，阿森纳是冠军！！！！</div>
                                <div>我只知道，阿森纳是冠军！！！！</div>
                                 <div>我只知道，阿森纳是冠军！！！！</div>
                                  <div>我只知道，阿森纳是冠军！！！！</div>
                                   <div>我只知道，阿森纳是冠军！！！！</div>
                                    <div>我只知道，切尔西是冠军！！！！</div>
                                     <div>我只知道，利物浦是冠军！！！！</div>
            </div>
    </e-scrollbar>
</div>

```