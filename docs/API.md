- u-h1,u-h2,u-h3,u-h4-u-h5,u-h6,u-h7
  文本，对text的一个封装，规范文字输出
  - props
    - color String 文本颜色值
  - slot
    - default 文本内容
- v-iconfont
  字体图标组件
  - props
    - size String 字体图标大小
    - color String 图标颜色
  - events
    - click 点击事件
    - longpress 长按事件
  - slot
    - default 字体图标编码
- u-button
  按钮组件
  - props
    - type String(primary | highlight | minor) 按钮样式类型
    - disabled Boolean 是否禁用
  - events
    - click 点击事件
    - longpress 长按事件
  - slot
    - default 按钮里显示的文字
- u-radio
  单选组件
  - props
    - value [String, Number, Boolean, Object, Array] radio绑定的值
    - val [String, Number, Boolean, Object, Array] 当前单选项的值
    - disabled Boolean 是否禁用
  - events
    - input 选择的值变更时触发，参数为当前选项的值
    - change 选择的值变更时触发，参数为当前选项的值
- u-checkbox
  多选组件
  - props
    - value Array checkbox绑定的数组
    - val [String, Number, Boolean, Object, Array] 当前单选项的值
    - disabled Boolean 是否禁用
  - events
    - input 选择的值变更时触发，参数为当前所有选中的选项的值组成的数组
    - change 选择的值变更时触发，参数为当前所有选中的选项的值组成的数组
- u-input(待优化)
  输入框组件
  - props
    - type String(text, password, tel, number) 和weex中概念一致
    - value String 和weex中概念一致
    - placeholder 和weex中概念一致
    - disabled Boolean 是否禁用
  - events
    - input 输入的值
    - change 和weex中概念一致
    - focus 和weex中概念一致
    - blur 和weex中概念一致
    - return  和weex中概念一致
  - slot
    - left 输入框左侧，适合放一些icon
    - right 输入框右侧，适合放发送验证码，清除输入等
- u-input-number
  数字选择器组件
  - props
    - value Number 组件绑定的值，必传
    - min Number 最小值
    - max Number 最大值
    - disabled Boolean 是否禁用
  - events
    - input 数字发生改变时触发
- u-mask
  遮罩层，由于`weex`没有`z-index`的概念，所以该组件需要放在页面最底部
  - props
    - show Boolean 是否显示，默认不显示
    - justify String(flex-start|flex-end|center|space-between，同justify-content的值) 垂直方向上的布局，默认是center
  - events
    - click 点击时触发
  - slot
    - default 遮罩层里面的内容部分
- u-select(待优化)
  目前仅单选，需要配合`u-select-popup`和`mask`一同使用（限于weex的布局模式）
  - props
    - placeholder String 未选择时的placeholder
    - value [String, Number, Boolean, Object, Array] select绑定的值
    - data Array 下拉数据，{ lable: '', value: '' }格式，必传
    - disabled Boolean 是否禁用
    - renderFn option渲染函数，参考vue的render函数
  - events
    - input 选择的值发生改变的时候
    - expand 展开下拉框时触发
- u-select-popup
  配合`select`使用，作为`select`选项弹出
  - props
    - maskShow Boolean 是否显示了mask，必传
  - events
    - selected 已选择某项时触发
    - hide-mask 需要隐藏mask时触发
- u-tabs
  标签页组件
  - props
    - value [String, Number, Boolean, Object, Array] 当前选中的tab
  - events
    - input 当前激活的tab发生变化时触发
    - change 当前激活的tab发生变化时触发
  - slot
    - default 用于插入 tab
- u-tab
  标签页组件
  - props
    - label tab上显示的文字，必传
    - value [String, Number, Boolean, Object, Array] 当前tab的值
  - slot
    - default tab中的内容
- u-progress
  进度条组件
  - props
    - percentage Number 进度，必传，0-100
- u-cell-group
  cell组组件
  - props
    - title cell的header中的文字
  - slot
    - default 用于插入cell
    - left cell的header中靠左部分
    - right cell的header中靠右部分
- u-cell
  cell组件，现在很多app都有的那种页面
  - props
    - text String cell左侧显示的值
    - value [String, Number, Boolean] cell显示在右侧的值
    - showArrow Boolean 是否显示右箭头
  - events
    - click 同weex
    - longpress 同weex
  - slot
    - icon 显示在text左侧的图标部分
    - right 显示在value后 arrow前的部分
- u-tabbar
  底部导航组件
  - props
    - value String 当前tabbar的值
    - router Boolean 是否使用路由模式，如果是，则点击item时使用item的index进行跳转，并且使用`vue-router`进行跳转，适合单页面应用
    - imageType String(iconfont | image) 图片格式，支持iconfont image, svg模式不好处理子节点的颜色，此时可以用slot处理
  - events
    - input 当前激活的tabbar发生变化时触发
    - change 当前激活的tabbar发生变化时触发
  - slot
    - default 用于插入tabbar-item
- u-tabbar-item
  底部导航项
  - props
    - label String tabbar-item显示的文字，必传
    - index String 当前tabbar-item的索引
    - normalUrl String 图片模式：普通状态的图片地址
    - activeUrl String 图片模式：选中状态的图片地址
    - fontFamily String iconfont模式：iconfont的字体family，默认值为`iconfont`
  - events
    - click 点击选中时触发
  - slot
    - normal 自定义模式：普通状态待插入部分
    - active 自定义模式：选中状态待插入部分
- v-checker
  - props
    - value [Boolean, Array] 绑定的值，全选按钮绑定`Array`类型，其它绑定`Boolean`类型
  - events
    - input 选中值发生变化时触发，全选按钮回调函数返回的是数组，其它返回的是布尔值
    - change 同input
- v-range
  范围选择器组件，不建议使用，可以用原生开发
  - props
    - value Number 绑定的值，必传
    - min Number 最小值，默认为0
    - max Number 最大值，默认为100
    - disabled Boolean 是否禁用
  - events
    - input 滑动过程中触发，回调参数为当前值
    - change 滑动结束后触发，回调参数为当前值
- u-badge
  badge组件
  - props
    - dot Boolean 是否显示小圆点
    - count [String, Number] badge上显示的数字
  - slot
    - default badge里的内容
- v-rater
  评分组件，适用于打分，评价等场合，目前原生有一定的样式问题，建议使用原生开发
  - props
    - value Number 当前评几分
    - max Number 几颗星，默认值是5
  - events
    - input 值发生改变时触发
- v-timeline
  时间轴组件，适合物流信息查询，任务查询，流程查询等场合，稍加修改可以满足更复杂的场景
  - slot
    - default 用于插入`timeline-item`
- v-timeline-item
  时间轴单项
  - props
    - date String 时间
  - slot
    - default 当前时间轴的标题
    - extra 用于在标题和时间中间插入的内容
    - extra-active 激活时的extra内容
- ajax模块
  提供对`weex`的`stream`的简单封装，通过下面方法可以注册一个全局的`Vue`原型方法
  ```js
    import { createInstance } from 'path/to/packages/utils'
    Vue.prototype.$http = createInstance({ root: 'xxx' })
  ```
  最后使用时直接
  ```js
    this.$http.get(url, 请求参数对象, options).then(res => {
      // 数据在res.data里
    }).catch(err => {
      // 错误处理
    })
    this.$http.post(url, form对象, options).then(res => {
      // 数据在res.data里
    }).catch(err => {
      // 错误处理
    })
  ```
- dateformat时间格式化模块
  提供一个简单的时间格式化功能
  ```js
    import { format } from 'path/to/packages/utils'
    format(date|dateStr, 'yyyy-MM-dd hh:mm:ss')
  ```
- storage模块
  提供对`weex`的存储的一个简单封装，返回`Promise`对象
  ```js
    import { storage } from 'path/to/packages/utils'
    storage.setItem('name', 'abc').then(() => {})
    storage.getItem('name').then(val => {})
    storage.removeItem('name').then(() => {})
  ```
