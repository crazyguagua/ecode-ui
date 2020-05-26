# 自定义滚动条
浏览器滚动条默认的样式很丑，虽然可以通过css来美化，但是各个浏览器的兼容性问题也很让人头疼，最好可以用js来模拟滚动条。

## 基本用法
:::demo
```html
<div class="margin-15 scrollbarDemo" >
    <e-scrollbar style="height:300px;width:400px;">
        
                <div class="view" style="width:1000px;background:#fff;">
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
:::

## 动态加载内容
:::demo
```html
<div class="margin-15 scrollbarDemo" >
    <e-scrollbar style="height:300px;width:400px;">
        
            <div class="view" style="width:1000px;background:#fff;min-height:100px;">
                <div v-for="index of variable">
                    我只知道 阿森纳是冠军 {{index}}
                </div>
            </div>
    </e-scrollbar>
</div>
<script>
    export default {
        created(){
            setTimeout(()=>{
                this.variable = 10
                 setTimeout(()=>{
                    this.variable = 20
                },5000)
            },5000)
        },
        data(){
            return {
                variable:0
            }
        }
    }
</script>

```
:::