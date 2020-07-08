export default [{
        title: "入门",
        name: 'guide'
    },{
        title:'通用',
        name:'common',
        children:[
            {
                title: '按钮',
                name: 'button'
            }, 
            {
                title: '图标',
                name: 'icon'
            },
            {
                title:'滚动条',
                name:'scrollbar'
            }
        ]
    }, 
    {
        title: "布局",
        name: 'layout',
        children:[
            {
                title: '栅格',
                name: 'grid'
            },
            {
                title:'Layout 布局',
                name: 'layout',
            }
        ]
    }, {
        title: '选项卡',
        name: 'tab'
    },{
        title:'数据展示',
        children:[
            {
                title: "表格",
                name: 'table'
            },{
                title:'标签',
                name:'tag'
            },{
                title:'虚拟滚动',
                name:'virtualScroll'
            }
        ]
    } ,{
        title: "表单",
        name: 'form',
        children: [{
                title: '输入框',
                name: 'input'
            },
            {
                title: '多选框',
                name: 'checkbox'
            },
            {
                title: '单选框',
                name: 'radio'
            },
            {
                title: '选择器',
                name: 'select'
            },
        ]
    },{
        title:'反馈',
        children:[
            {
                title:'tooltip 文字提示',
                name:'tooltip'
            },
            {
                title:'popover 气泡卡片',
                name:'popover'
            },
            {
                title: "吐司",
                name: 'toast'
            }, 
        ]
    }
]