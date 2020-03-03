import Vue from 'vue'
import EButton from '../src/button'
import EIcon from '../src/icon'
import EButtonGroup from '../src/buttonGroup'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
{
   // console.log(EButton)  //这个EButton是一个对象，不能够初始化
    const Ctor = Vue.extend(EButton)
    //console.log(Ctor) //这是构造函数，可以被实例化
    var button = new Ctor({
        propsData:{
            icon:'ecode-downlaod'
        }
    })
    // var testDiv = document.querySelector('.test')
    button.$mount()
    //1 通过Vue.extend 得到组件的构造函数。
    //2 实例化构造函数
    //3 组件挂载到dom上
}

//测试props是否正确
{
    const Ctor = Vue.extend(EButton)
    var eButton = new Ctor({
        propsData:{
            icon:'ecode-download'
        }
    })
    //创建一个div，并把eButton挂载上去
    var div = document.createElement('div')
    document.body.appendChild(div);
    eButton.$mount(div);
    var useHref = eButton.$el.querySelector('use').getAttribute('xlink:href');
    expect(useHref).to.equal('#ecode-download')
    //如果没有报错信息，测试通过
    //在页面中删除元素
    eButton.$el.remove();
    eButton.$destroy();
    div.remove();
}



//测试点击事件
{
    const Ctor = Vue.extend(EButton)
    var eButton = new Ctor({
        propsData:{
            icon:'ecode-download',
            iconPosition:'right'
        }
    })
    //点击事件不需要 mount到元素上
   
    eButton.$mount();
    // eButton.$on('click',()=>{
    //     expect(1).to.equal(2) //这样测试不好
    // })
    const spyfn = chai.spy(function(){})  //chai 可以判断出这个函数是否执行
    eButton.$on('click',spyfn)
    eButton.$el.click()

    expect(spyfn).to.have.been.called()
    eButton.$destroy();

}