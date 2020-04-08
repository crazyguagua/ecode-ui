## Tab 选项卡

:::demo 基本用法
```html
    <e-tabs v-model="current">
        <e-tab label="利物浦" name="liverpool">
            萨拉赫 马内 菲儿米诺
        </e-tab>
        <e-tab label="曼城" name="man_city">
            <div>斯特林 阿奎罗 德布劳内</div>
        </e-tab>
        <e-tab label="热刺" name="hotspurs">
            <div >孙新民 凯恩 阿里</div>
        </e-tab>
    </e-tabs>
    <script>
        export default {
            data(){
                return {
                    current:'liverpool'
                }
            }
        }
    </script>
```
:::