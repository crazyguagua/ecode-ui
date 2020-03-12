# ecode UI vue组件库
[![Build Status](https://www.travis-ci.org/crazyguagua/ecode-ui.svg?branch=master)](https://www.travis-ci.org/crazyguagua/ecode-ui)
## 这是我个人学习其他vue组件库，自己维护的ui库，学习别人的，提高自己。

## 开始使用
1. ie8 及以上版本
2. 需要开启 box-sizing:border-box;
``` css
*{
    box-sizing:border-box;
    *::after{
        box-sizing:border-box;
    }
    *::before{
        box-sizing:border-box;
    }
} 
```
3. 还需要设置默认样式的变量（后续会修复）
``` css
    html{
        --font-size:14px;
        --button-height:32px;
        --button-bg:#fff;
        --button-active-bg:rgb(158, 158, 158);
        --button-hover-bg:rgb(192, 192, 192);
        --button-color:#000;
        --border-radius:5px;
        --border-color:#333;
        --border-active-color:rgb(22, 21, 21);
    }
```
4. 安装组件
``` bash
    npm install ecode-ui -S
```
5. 引入 EcodeUI
```
import  {EButton,EButtonGroup,EIcon} from 'ecode-ui'
import 'ecode-ui/dist/index.css'
```
## 文档

## 提问

## 修改记录

## 联系方式

## 贡献代码